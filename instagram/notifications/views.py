from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import serializers, models

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notification = models.Notification.objects.filter(to=user)

        serializer = serializers.NotificationsSerializer(notification, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


def create_notification(creator, to, notification_type, image=None, comment=None):

    notification = models.Notification.objects.create(
        creator=creator,
        to=to,
        image=image,
        comment=comment,
        notification_type=notification_type
    )
