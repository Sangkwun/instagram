from rest_framework import serializers
from . import models
from instagram.users.models import User

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Like
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'followers',
            'following'
        )

class ImageSerializer(serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    likes = LikeSerializer(many=True)
    creator = UserSerializer()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'creator',
            'location',
            'caption',
            'comments',
            'likes'
        )
