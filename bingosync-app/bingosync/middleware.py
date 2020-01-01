from django.views import defaults

from bingosync.views import NotAuthenticatedError, InvalidRequestJsonError

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
