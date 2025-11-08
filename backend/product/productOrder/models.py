from django.db import models

# Create your models here.
class Order(models.Model):
    SIZE_CHOICES = [
        ('S', 'S'),
        ('M', 'M'),
        ('X', 'X'),
        ('XL', 'XL'),
    ]
    name = models.CharField(max_length=255)
    size = models.CharField(max_length=10, choices=SIZE_CHOICES)
    address = models.CharField(max_length=255)
    pincode = models.IntegerField()
    phoneNo = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.address})"