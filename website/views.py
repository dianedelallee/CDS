from django.shortcuts import render


def website_index(request):
    return render(request, "project/project_summary.html", {})


def website_home(request):
    return render(request, "project/project_summary.html", {})
