from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from instagram.users import models as user_models
from taggit.managers import TaggableManager

@python_2_unicode_compatible
class TimeStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

@python_2_unicode_compatible
class Image(TimeStampModel):

    """ Image model  """

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True, related_name="images")
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.likes.all().count()
    
    @property
    def comment_count(self):
        return self.comments.all().count()

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

    class Meta:
        ordering = ['-created_at']

@python_2_unicode_compatible
class Comment(TimeStampModel):

    """ Comment model  """
    
    creator = models.ForeignKey(user_models.User, null=True)
    image = models. ForeignKey(Image, null=True, related_name='comments')
    message = models.TextField()

    def __str__(self):
        return self.message


@python_2_unicode_compatible
class Like(TimeStampModel):

    """ Like model  """

    creator = models.ForeignKey(user_models.User, null=True)
    image = models. ForeignKey(Image, null=True, related_name='likes')

    def __str__(self):
        return 'User: {} Image_caption: {}'.format(self.creator.username, self.image.caption)
