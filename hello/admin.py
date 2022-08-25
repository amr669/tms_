from django.contrib import admin

from hello.views import contact

# Register your models here.
from . models import CAR, CUSTOMER, VIOLATION ,Contact
admin.site.register([CAR, CUSTOMER, VIOLATION, Contact])