from rest_framework import serializers
from . import models
from instagram.images.serializers import CountImageSerializer

class ListUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )

class UserProfileSerializer(serializers.ModelSerializer):

    images = CountImageSerializer(many=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'profile_image',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images'
        )
