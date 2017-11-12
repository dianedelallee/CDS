import glob

from django.shortcuts import render

from project.models import Project

<<<<<<< HEAD
=======
def split_list(alist, wanted_parts=1):
    length = len(alist)
    return [ alist[i*length // wanted_parts: (i+1)*length // wanted_parts]
             for i in range(wanted_parts) ]



>>>>>>> development
def project_info(request, event_name):
    project = Project.objects.get(name=event_name.replace("_", " "))
    url = "url(/static/img/" + project.big_image_path + ")"

    photos_caroussel = []
    fichiers = glob.glob( "./website/static/img/"+project.small_image_path+"/small/*")
    for fic in fichiers:
        photos_caroussel.append( event_name.replace("_", "") + "/small/" + fic.split("/")[-1])

    number_of_image = len(photos_caroussel)/4 + 1
    photos = lambda A, n=int(number_of_image): [A[i:i + n] for i in range(0, len(A), n)]

    return render(request, "project/project_info.html", {
        "background_url": url,
        "project": project,
        "photo_small": photos(photos_caroussel),
        "num_img": number_of_image
    })