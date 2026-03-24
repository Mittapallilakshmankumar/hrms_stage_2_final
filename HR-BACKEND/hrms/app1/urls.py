# from django.urls import path
# from .views import add_candidate, get_candidates, delete_candidate, update_candidate,approve_candidate, dashboard

# urlpatterns = [
#     path('add/', add_candidate),
#     path('list/', get_candidates),
#     path('delete/<int:id>/', delete_candidate),
#     path('update/<int:id>/', update_candidate),
#     path('approve/<int:id>/', approve_candidate),
   

#     # ✅ ADD THIS
#     path('dashboard/', dashboard),

# ]



from django.urls import path
from .views import add_candidate, get_candidates, delete_candidate, update_candidate, approve_candidate, dashboard,list_employees
urlpatterns = [
    path('add/', add_candidate),
    path('list/', get_candidates),
    path('delete/<int:id>/', delete_candidate),
    path('update/<int:id>/', update_candidate),

    # ✅ Keep only this
    path('approve-candidate/<int:id>/', approve_candidate),
    

    path('dashboard/', dashboard),
    path('employees/', list_employees),
]