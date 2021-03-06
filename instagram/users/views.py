from django.core.urlresolvers import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView
from django.core.urlresolvers import reverse
from django.contrib.auth.mixins import LoginRequiredMixin

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

from instagram.notifications.views import create_notification

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView


class ExploreUsers(APIView):

    def get(self,request,format=None):

        print(request.META['HTTP_HOST'])
        
        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(last_five, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

class FollowUser(APIView):

    def post(self, request, user_id, format=None):
        user = request.user
        
        try:
            user_to_follow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.following.add(user_to_follow)
        user.save()

        ## Create notification ##
        create_notification(user, user_to_follow, 'follow')
        
        return Response(status=status.HTTP_200_OK)


class UnfollowUser(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try:
            user_to_follow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.following.remove(user_to_follow)
        user.save()

        return Response(status=status.HTTP_200_OK)

class UserProfile(APIView):

    def get_user(self, username):
        try:
            found_user = models.User.objects.get(username=username)

        except models.User.DoesNotExist:
            return None
        return found_user

    def get(self, reqeust, user_name, format=None):

        found_user = self.get_user(user_name)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, user_name, format=None):
        
        user = request.user
        found_user = self.get_user(user_name)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        elif found_user.username != user.username:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        else:
            serializer = serializers.UserProfileSerializer(found_user, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()

                return Response(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserFollowers(APIView):

    def get(self,request, user_name, format=None):

        try:
            found_user = models.User.objects.get(username=user_name)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()

        serializer = serializers.ListUserSerializer(user_followers, many=True, context= {"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):
    
    def get(self, request, format=None):

        username = request.query_params.get('username', None)

        if username is not None:

            users = models.User.objects.filter(username__icontains=username)

            serializer = serializers.ListUserSerializer(users, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)


class UserDetailView(LoginRequiredMixin, DetailView):
    model = models.User
    # These next two lines tell the view to index lookups by username
    slug_field = 'username'
    slug_url_kwarg = 'username'


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse('users:detail',
                       kwargs={'username': self.request.user.username})


class UserUpdateView(LoginRequiredMixin, UpdateView):

    fields = ['name', ]

    # we already imported User in the view code above, remember?
    model = models.User

    # send the user back to their own page after a successful update
    def get_success_url(self):
        return reverse('users:detail',
                       kwargs={'username': self.request.user.username})

    def get_object(self):
        # Only get the User record for the user making the request
        return models.User.objects.get(username=self.request.user.username)


class UserListView(LoginRequiredMixin, ListView):
    model = models.User
    # These next two lines tell the view to index lookups by username
    slug_field = 'username'
    slug_url_kwarg = 'username'

class ChangePassword(APIView):

    def put(self, request, user_name, format=None):

        user = request.user

        if user.username == user_name:
            
            current_password = request.data.get('current_password', None)

            if current_password is not None:
                password_match = user.check_password(current_password)

                if password_match:
                    new_password = request.data.get('new_password', None)
                
                    if current_password is not None:
                        user.set_password(new_password)
                        user.save()

                        return Response(status=status.HTTP_200_OK)

                    else:
                        return Response(status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
