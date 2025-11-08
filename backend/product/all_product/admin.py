from django.contrib import admin

# Register your models here.
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'new_price', 'old_price', 'created_at')
    list_filter = ('category',)
    search_fields = ('name',)
