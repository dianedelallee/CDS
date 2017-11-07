from django.contrib import admin
from project.models import Project


class ProjectCustom(admin.ModelAdmin):
    list_display = ['name', 'chief', 'date', 'place', 'description']


admin.site.register(Project, ProjectCustom)
