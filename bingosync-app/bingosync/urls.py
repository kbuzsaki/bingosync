"""bingosync URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

from bingosync import views, settings

urlpatterns = [
    url(r'^$', views.rooms, name='rooms'),
    url(r'^room/(?P<encoded_room_uuid>.+)/board$', views.room_board, name='room_board'),
    url(r'^room/(?P<encoded_room_uuid>.+)/feed$', views.room_feed, name='room_feed'),
    url(r'^room/(?P<encoded_room_uuid>.+)/disconnect$', views.room_disconnect, name='room_disconnect'),
    url(r'^room/(?P<encoded_room_uuid>.+)/room-settings$', views.room_settings, name='room_settings'),
    url(r'^room/(?P<encoded_room_uuid>.+)$', views.room_view, name='room_view'),
    url(r'^history', views.history, name='history'),
    url(r'^convert', views.goal_converter, name='goal_converter'),
    url(r'^about', views.about, name='about'),
    url(r'^api/select$', views.goal_selected, name='goal_selected'),
    url(r'^api/chat$', views.chat_message, name='chat_message'),
    url(r'^api/color$', views.select_color, name='select_color'),
    url(r'^api/revealed$', views.board_revealed, name='board_revealed'),
    url(r'^api/new-card$', views.new_card, name='new_card'),
    url(r'^api/join-room$', views.join_room_api, name='join_room_api'),
    url(r'^api/get-socket-key/(?P<encoded_room_uuid>.+)$', views.get_socket_key, name='get_socket_key'),
    url(r'^api/connected/(?P<encoded_player_uuid>.+)$', views.user_connected, name='user_connected'),
    url(r'^api/disconnected/(?P<encoded_player_uuid>.+)$', views.user_disconnected, name='user_disconnected'),
    url(r'^api/socket/(?P<socket_key>.+)$', views.check_socket_key, name='check_socket_key'),
    url(r'^api/reconcile$', views.reconcile_connections, name='reconcile'),
    url(r'^admin/', admin.site.urls),
]

# only add the route for running javascript tests in development mode
if settings.DEBUG:
    urlpatterns += [
        url(r'^jstests', views.jstests, name='jstests'),
    ]
