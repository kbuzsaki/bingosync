from django.views import defaults

from .views import NotAuthenticatedError

class NotAuthenticatedMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        if isinstance(exception, NotAuthenticatedError):
            return defaults.permission_denied(request, exception)
