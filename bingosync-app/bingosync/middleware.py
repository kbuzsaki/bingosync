from django.views import defaults
from django.http import JsonResponse

import logging

from bingosync.views import NotAuthenticatedError, InvalidRequestJsonError

logger = logging.getLogger(__name__)


def _get_log_func_for_status_code(status_code):
    if status_code >= 500:
        return logger.error
    elif status_code >= 400:
        return logger.warning
    else:
        return logger.info


def _get_ip_from_request(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for
    else:
        return request.META.get('REMOTE_ADDR')


class RequestLoggingMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        self.log_req(request, response)
        return response

    def log_req(self, request, response):
        try:
            user_ip = _get_ip_from_request(request)
            log_func = _get_log_func_for_status_code(response.status_code)
            if request.method in ["PUT", "POST"] and response.status_code == 404:
                log_func('"%s %s" %s %s (%s)\nrequest: %s', request.method, request.get_full_path(),
                         response.status_code, len(response.content), user_ip, request.body)
            elif request.method in ["PUT", "POST"] and response.status_code >= 400:
                log_func('"%s %s" %s %s (%s)\nrequest: %s\nresponse: %s', request.method, request.get_full_path(),
                         response.status_code, len(response.content), user_ip, request.body, response.content)
            else:
                log_func('"%s %s" %s %s (%s)', request.method, request.get_full_path(), response.status_code,
                        len(response.content), user_ip)
        except Exception as e:
            logger.exception("Exception when logging request")


class NotAuthenticatedMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        if isinstance(exception, NotAuthenticatedError):
            return defaults.permission_denied(request, exception)


class InvalidRequestMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        if isinstance(exception, InvalidRequestJsonError):
            if request.get_full_path().startswith("/api/"):
                return JsonResponse({"error": str(exception)}, status=400)
            else:
                return defaults.bad_request(request, exception)
