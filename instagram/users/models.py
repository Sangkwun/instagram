from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class User(AbstractUser):

    """ user model """

    GENDER_CHOICES = (
        ('male','Male'),
        ('female','Female'),
        ('not-specified', 'Not-specified')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    website = models.URLField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    phone = models.TextField(max_length=140, null=True, blank=True)
    gender = models.CharField(
        max_length=80, choices=GENDER_CHOICES, null=True, blank=True)
    followers = models.ManyToManyField('self', blank=True)
    following = models.ManyToManyField('self', blank=True)
    profile_image = models.ImageField(null = True, blank=True)

    def __str__(self):
        return self.username

    @property
    def post_count(self):
        return self.images.all().count()

    @property
    def followers_count(self):
        return self.followers.all().count()

    @property
    def following_count(self):
        return self.following.all().count()

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
