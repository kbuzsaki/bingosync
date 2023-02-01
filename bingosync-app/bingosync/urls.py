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
from django.urls import include, re_path
from django.contrib import admin

from bingosync import views, settings

urlpatterns = [
    re_path(r'^$', views.rooms, name='rooms'),
    re_path(r'^room/(?P<encoded_room_uuid>.+)/board$', views.room_board, name='room_board'),
    re_path(r'^room/(?P<encoded_room_uuid>.+)/feed$', views.room_feed, name='room_feed'),
    re_path(r'^room/(?P<encoded_room_uuid>.+)/disconnect$', views.room_disconnect, name='room_disconnect'),
    re_path(r'^room/(?P<encoded_room_uuid>.+)/room-settings$', views.room_settings, name='room_settings'),
    re_path(r'^room/(?P<encoded_room_uuid>.+)$', views.room_view, name='room_view'),
    re_path(r'^history', views.history, name='history'),
    re_path(r'^convert', views.goal_converter, name='goal_converter'),
    re_path(r'^about', views.about, name='about'),
    re_path(r'^api/select$', views.goal_selected, name='goal_selected'),
    re_path(r'^api/chat$', views.chat_message, name='chat_message'),
    re_path(r'^api/color$', views.select_color, name='select_color'),
    re_path(r'^api/revealed$', views.board_revealed, name='board_revealed'),
    re_path(r'^api/new-card$', views.new_card, name='new_card'),
    re_path(r'^api/join-room$', views.join_room_api, name='join_room_api'),
    re_path(r'^api/get-socket-key/(?P<encoded_room_uuid>.+)$', views.get_socket_key, name='get_socket_key'),
    re_path(r'^api/connected/(?P<encoded_player_uuid>.+)$', views.user_connected, name='user_connected'),
    re_path(r'^api/disconnected/(?P<encoded_player_uuid>.+)$', views.user_disconnected, name='user_disconnected'),
    re_path(r'^api/socket/(?P<socket_key>.+)$', views.check_socket_key, name='check_socket_key'),
    re_path(r'^api/reconcile$', views.reconcile_connections, name='reconcile'),
    re_path(r'^admin/', admin.site.urls),
]

# only add the route for running javascript tests in development mode
if settings.DEBUG:
    urlpatterns += [
        re_path(r'^jstests', views.jstests, name='jstests'),
    ]
