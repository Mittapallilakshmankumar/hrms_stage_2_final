from django.urls import path
from .views import check_in, check_out, attendance_list

urlpatterns = [
    path('checkin/', check_in),
    path('checkout/', check_out),
    path('attendance/', attendance_list),
]