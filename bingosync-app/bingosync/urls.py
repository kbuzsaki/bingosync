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

from . import views

urlpatterns = [
    url(r'^$', views.rooms, name='rooms'),
    url(r'^join$', views.join_room, name='join_room'),
    url(r'^room/(?P<encoded_room_uuid>.+)/board$', views.room_board, name='room_board'),
    url(r'^room/(?P<encoded_room_uuid>.+)$', views.room_view, name='room_view'),
    url(r'^board/(?P<seed>[0-9]+)$', views.board_view, name='board_view'),
    url(r'^board/(?P<seed>[0-9]+).json$', views.board_json, name='board_json'),
    url(r'^api/board/(?P<seed>[0-9]+)$', views.board_json, name='board_json'),
    url(r'^api/board/(?P<seed>[0-9]+).json$', views.board_json, name='board_json'),
    url(r'^api/select$', views.goal_selected, name='goal_selected'),
    url(r'^admin/', include(admin.site.urls)),
]

