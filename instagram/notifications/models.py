from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from instagram.users.models import User
from instagram.images.models import Image
from instagram.images.models import TimeStampModel

class Notification(TimeStampModel):

    TYPE_CHOICES=(
        ('like', 'Like'),
        ('comment','Comment'),
        ('follow','Follow')
    )

    creator = models.ForeignKey(User, related_name='creator')
    to = models.ForeignKey(User, related_name='to')
    image = models.ForeignKey(Image, null=True, blank=True)

    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)

