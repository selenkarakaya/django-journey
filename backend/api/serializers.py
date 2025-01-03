from rest_framework import serializers
from api.models import Appt

# Appt serializer


class ApptSerializer(serializers.ModelSerializer):
    class Meta:
        model: Appt
        fields = "__all__"
