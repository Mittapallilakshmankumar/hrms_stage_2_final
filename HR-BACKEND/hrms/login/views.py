from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response


# REGISTER
@api_view(['POST'])
def register_view(request):
    name = request.data.get('name')
    email = request.data.get('email')
    mobile = request.data.get('mobile')
    password = request.data.get('password')

    if User.objects.filter(email=email).exists():
        return Response({"error": "Email already exists"}, status=400)

    User.objects.create_user(
        username=email,
        email=email,
        password=password,
        first_name=name
    )

    return Response({"message": "Registered successfully"})


# LOGIN



# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from django.contrib.auth import authenticate
# from app1.models import Employee   # 👈 IMPORTANT

# @api_view(['POST'])
# def login_view(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     user = authenticate(username=email, password=password)

#     if user:
#         try:
#             employee = Employee.objects.get(email=email)

#             return Response({
#                 "message": "Login success",
#                 "name": user.first_name,
#                 "employee_id": employee.employee_id
#             })

#         except Employee.DoesNotExist:
#             return Response({
#                 "message": "Login success",
#                 "name": user.first_name,
#                 "employee_id": None
#             })

#     else:
#         return Response({"error": "Invalid credentials"}, status=400)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from app1.models import Employee

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(username=email, password=password)

    if user:

        # 👨‍💼 ADMIN LOGIN
        if user.is_superuser:
            return Response({
                "message": "Admin login",
                "name": user.first_name,
                "role": "admin"   # 👈 ADD THIS
            })

        # 👤 EMPLOYEE LOGIN
        try:
            employee = Employee.objects.get(email=email)

            return Response({
                "message": "Login success",
                "name": user.first_name,
                "employee_id": employee.employee_id,
                "role": "employee"   # 👈 ADD THIS
            })

        except Employee.DoesNotExist:
            return Response({
                "message": "Login success",
                "name": user.first_name,
                "employee_id": None,
                "role": "employee"
            })

    else:
        return Response({"error": "Invalid credentials"}, status=400)