"""
URL configuration for hrms project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# ✅ ADD THESE (important)
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),

    # ✅ Your app1 API
    path('api/app1/', include('app1.urls')),
     path('api/attendance/', include('attendance.urls')),
     path('api/', include('login.urls')),
     path('api/leave/', include('leave.urls')),#leave

]

# ✅ MEDIA FILES (for image upload)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)