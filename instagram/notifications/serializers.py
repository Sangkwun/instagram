from rest_framework import serializers
from instagram.users.serializers import ListUserSerializer
from instagram.images.serializers import SmallImageSerializer
from . import models

class NotificationsSerializer(serializers.ModelSerializer):

    creator = ListUserSerializer()
    image = SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'

