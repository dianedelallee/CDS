from django.shortcuts import render


def website_index(request):
    return render(request, "project/project_summary.html", {})


def website_home(request):
    return render(request, "project/project_summary.html", {})


def website_contact(request):
    return render(request, "project/project_summary.html", {})


def website_presentation(request):
    return render(request, "project/project_summary.html", {})


def website_faq(request):
    return render(request, "website/faq.html", {})


def website_past_events(request):
    return render(request, "project/project_summary.html", {})


def website_reservation(request):
    return render(request, "project/project_summary.html", {})
