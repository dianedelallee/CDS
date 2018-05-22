
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.website_index, name="website_index"),
    url(r'^actualites$', views.website_home, name="website_home"),
    url(r'^contact', views.website_contact, name="website_contact"),
    url(r'^credits', views.website_credit, name="website_credit"),
    url(r'^faq', views.website_faq, name="website_faq"),
    url(r'^partenaires', views.website_partner, name="website_partner"),
    url(r'^presentation', views.website_presentation, name="website_presentation"),
    url(r'^evenementspasses', views.website_past_events, name="website_past_events"),
    url(r'^reservation', views.website_reservation, name="website_reservation"),
]

handler404 = views.handler404