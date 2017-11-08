from django.contrib import admin
from website.models import Member


class MemberCustom(admin.ModelAdmin):
    list_display = ['last_name', 'first_name']


admin.site.register(Member, MemberCustom)
