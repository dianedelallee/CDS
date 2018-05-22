from random import randint

from django.db.models import F
from django.shortcuts import render

from project.models import Project
from website.models import Member
from website.forms import ContactForm

def website_index(request):
    return render(request, "website/index.html", {})


def website_home(request):
    repertory = ["printemps_1.jpg", "printemps_2.jpg", "printemps_3.jpg", "printemps_4.jpg",
                  "printemps_5.jpg", "printemps_6.jpg", "printemps_7.jpg"]
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
    url = "url(/static/img/contact_low.jpg)"

    if request.method == "POST":
        last_name  = request.POST.get('last_name')
        first_name  = request.POST.get('first_name')
        email  = request.POST.get('email')
        subject  = request.POST.get('subject')
        message  = request.POST.get('message')
        print(message)
        print(subject)
        print(email)
        print(first_name)
        print(last_name)


    form = ContactForm()

    return render(request, "website/contact.html", {
        "background_url": url,
        "form": form
    })


def website_credit(request):
    return render(request, "website/contact.html", {})


def website_presentation(request):
    repertory = ["spatule1_low.jpg", "spatule2_low.jpg", "spatule3_low.jpg", "spatule4_low.jpg",
                  "spatule5_low.jpg"]
    num = randint(0, 4)
    url = "url(/static/img/presentation/" + repertory[num] + ")"

    members = Member.objects.all().order_by('last_name').reverse()
    member_even = members.annotate(odd=F('id') % 2).filter(odd=False)
    member_odd = members.annotate(odd=F('id') % 2).filter(odd=True)

    return render(request, "website/presentation.html", {
        "background_url": url,
        "member_right": member_even,
        "member_left": member_odd
    })


def website_partner(request):
    url = "url(/static/img/partenaires.jpg)"
    return render(request, "website/partner.html", {
        "background_url": url,
    })


def website_faq(request):
    url = "url(/static/img/accueil/printemps_2.jpg)"
    return render(request, "website/faq.html", {
        "background_url": url,
    })


def website_past_events(request):
    url = "url(/static/img/BrutdeSens/brut_9.jpg)"

    projects_odd = Project.objects.annotate(odd=F('id') % 2).filter(odd=False)
    projects_even = Project.objects.annotate(odd=F('id') % 2).filter(odd=True)

    return render(request, "website/past_event.html", {
        "background_url": url,
        "projects_right": projects_even,
        "projects_left": projects_odd
    })


def website_reservation(request):
    return render(request, "website/reservation.html", {
    })


def handler404(request):
    print("here")
    return render(request, '404.html', status=404)