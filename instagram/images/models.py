from django.db import models
from instagram.users import models as user_models

class TimeStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Image(TimeStampModel):

    """ Image model  """

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)

class Comment(TimeStampModel):

    """ Comment model  """
    
    creator = models.ForeignKey(user_models.User, null=True)
    imgae = models. ForeignKey(Image, null=True)
    message = models.TextField()

class Like(TimeStampModel):

    """ Like model  """

    creator = models.ForeignKey(user_models.User, null=True)
    imgae = models. ForeignKey(Image, null=True)
