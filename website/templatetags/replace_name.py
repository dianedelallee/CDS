from django import template

register = template.Library()

@register.filter
def replace_name(value):
    return value.replace(" ","_")