from django import forms
from django.utils.safestring import mark_safe


class ContactForm(forms.Form):
    name = forms.CharField(max_length=255,
                           required=True,
                           label=mark_safe('License key / Coupon code'),
                           widget=forms.TextInput(attrs={'placeholder': 'Nom'}))
