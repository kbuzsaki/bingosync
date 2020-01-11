from django.views import defaults

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
            print("Sending 400:", exception)
            return defaults.bad_request(request, exception)
