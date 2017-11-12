from django.shortcuts import render

from project.models import Project


def project_info(request, event_name):
    project = Project.objects.get(name=event_name.replace("_", " "))
    url = "url(/static/img/" + project.big_image_path + ")"

    return render(request, "project/project_info.html", {
        "background_url": url,
        "project": project
    })