
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.website_index, name="website_index"),
    url(r'^actualites$', views.website_home, name="website_home"),
]
