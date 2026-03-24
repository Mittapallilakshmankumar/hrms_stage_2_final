from django.urls import path
from .views import apply_leave, list_leaves, approve_leave, reject_leave

urlpatterns = [
    path('apply/', apply_leave),
    path('list/', list_leaves),
    path('approve/<int:id>/', approve_leave),
    path('reject/<int:id>/', reject_leave),
]