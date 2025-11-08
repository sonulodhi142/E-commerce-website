from django.contrib import admin

# Register your models here.
from .models import Order

@admin.register(Order)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'size', 'address','pincode', 'phoneNo', 'created_at')
    list_filter = ('size',)
    search_fields = ('name',)