from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Leave

# ✅ APPLY LEAVE
@api_view(['POST'])
def apply_leave(request):
    Leave.objects.create(
        name=request.data.get('name'),
        employee_id=request.data.get('employee_id'),
        department=request.data.get('department'),
        leave_type=request.data.get('leave_type'),
        from_date=request.data.get('from_date'),
        to_date=request.data.get('to_date'),
        reason=request.data.get('reason'),
        status="Pending"
    )
    return Response({"message": "Leave Applied Successfully"})


# ✅ GET ALL LEAVES
@api_view(['GET'])
def list_leaves(request):
    leaves = Leave.objects.all().values()
    return Response(leaves)


# ✅ APPROVE LEAVE
@api_view(['PUT'])
def approve_leave(request, id):
    leave = Leave.objects.get(id=id)
    leave.status = "Approved"
    leave.save()
    return Response({"message": "Leave Approved"})


# ✅ REJECT LEAVE
@api_view(['PUT'])
def reject_leave(request, id):
    leave = Leave.objects.get(id=id)
    leave.status = "Rejected"
    leave.save()
    return Response({"message": "Leave Rejected"})