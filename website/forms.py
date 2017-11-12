from django import forms
from django.utils.safestring import mark_safe


class ContactForm(forms.Form):
    last_name = forms.CharField(max_length=255,
                           required=True,
                           label=mark_safe('Nom'),
                           widget=forms.TextInput(attrs={'placeholder': ''}))
    first_name = forms.CharField(max_length=255,
                           required=True,
                           label=mark_safe('Prénom'),
                           widget=forms.TextInput(attrs={'placeholder': ''}))

    email = forms.EmailField(max_length=255,
                           required=True,
                           label=mark_safe('<span class="req">*</span> Adresse mail'),
                           widget=forms.EmailInput(attrs={'placeholder': ''}))

    subject = forms.CharField(max_length=255,
                           required=True,
                           label=mark_safe('Sujet'),
                           widget=forms.TextInput(attrs={'placeholder': ''}))

    message = forms.CharField(max_length=255,
                           required=True,
                           label=mark_safe('<span class="req">*</span> Message'),
                           widget=forms.Textarea(attrs={'placeholder': ''}))
