from random import randint

from django.db.models import F
from django.shortcuts import render

from project.models import Project
from website.models import Member


def website_index(request):
    return render(request, "website/index.html", {})


def website_home(request):
    repertory = ["chair_1_rec.jpg", "chair_2_rec.jpg", "chair_3_rec.jpg", "chair_4_rec.jpg",
                  "chair_5_rec.jpg", "chair_6_rec.jpg", "chair_7_rec.jpg"]
    num = randint(0, 6)
    url = "url(/static/img/accueil/" + repertory[num] + ")"

    projects_odd = Project.objects.annotate(odd=F('id') % 2).filter(odd=False)
    projects_even = Project.objects.annotate(odd=F('id') % 2).filter(odd=True)

    return render(request,
                  "website/home.html",
                  {
                      "background_url": url,
                      "projects_right": projects_even,
                      "projects_left": projects_odd
                  })


def website_contact(request):
    return render(request, "website/contact.html", {})


def website_credit(request):
    return render(request, "website/contact.html", {})


def website_presentation(request):
    repertory = ["spatule1_low.jpg", "spatule2_low.jpg", "spatule3_low.jpg", "spatule4_low.jpg",
                  "spatule5_low.jpg"]
    num = randint(0, 4)
    url = "url(/static/img/presentation/" + repertory[num] + ")"

    member_even = Member.objects.annotate(odd=F('id') % 2).filter(odd=False)
    member_odd = Member.objects.annotate(odd=F('id') % 2).filter(odd=True)

    return render(request, "website/presentation.html", {
        "background_url": url,
        "member_right": member_even,
        "member_left": member_odd
    })


def website_partner(request):
    return render(request, "website/presentation.html", {})


def website_faq(request):
    url = "url(/static/img/accueil/chair_4_rec.jpg)"
    return render(request, "website/faq.html", {
        "background_url": url,
    })


def website_past_events(request):
    url = "url(/static/img/BrutSens/brut_9.jpg)"

    projects_odd = Project.objects.annotate(odd=F('id') % 2).filter(odd=False)
    projects_even = Project.objects.annotate(odd=F('id') % 2).filter(odd=True)

    return render(request, "website/past_event.html", {
        "background_url": url,
        "projects_right": projects_even,
        "projects_left": projects_odd
    })


def website_reservation(request):
    return render(request, "website/reservation.html", {})
