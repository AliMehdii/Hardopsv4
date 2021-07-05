
from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import *


# Apply summernote to all TextField in model.
class SomeModelAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    summernote_fields = ('content,description,mainFeatureDescription')


# Register your models here.
admin.site.register(Blog, SomeModelAdmin)
admin.site.register(BlogTag)
admin.site.register(Product)
admin.site.register(Software, SomeModelAdmin)
admin.site.register(Course)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
