# viewset for CRUD
from api.models import Appt
from rest_framework import viewsets, permissions
from .serializers import ApptSerializer


class ApptViewSet(viewsets.ModelViewSet):
    queryset = Appt.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ApptSerializer
