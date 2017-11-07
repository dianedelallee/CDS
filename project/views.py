from django.shortcuts import render


def project_summary(request):
    return render(request, "project/project_summary.html", {})
