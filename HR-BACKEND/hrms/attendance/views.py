from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime
from .models import Attendance
from .serializers import AttendanceSerializer


# 🔥 CHECK-IN
@api_view(['POST'])
def check_in(request):
    Attendance.objects.create(
        name=request.data.get('name'),
        check_in=datetime.now().time(),
        notes=request.data.get('notes', "")
    )
    return Response({"msg": "Check-in saved"})


# 🔥 CHECK-OUT
@api_view(['POST'])
def check_out(request):
    obj = Attendance.objects.filter(
        name=request.data.get('name'),
        date=datetime.now().date()
    ).last()

    if obj:
        obj.check_out = datetime.now().time()
        obj.summary = request.data.get('summary', "")
        obj.save()
        return Response({"msg": "Check-out saved"})

    return Response({"error": "No check-in found"})


# 🔥 GET
@api_view(['GET'])
def attendance_list(request):
    data = Attendance.objects.all().order_by('-date')
    serializer = AttendanceSerializer(data, many=True)
    return Response(serializer.data)