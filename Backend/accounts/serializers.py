from django.contrib.auth.models import User
from rest_framework import serializers



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,  min_length=8 ,style={'input_type': 'password'})


    class Meta:
        model = User
        fields = [ 'username', 'email' , 'password']

    def create(self, validated_data):
        # if you use create_user, the password will be hashed
        # if you use create, the password will be stored as plain text
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
           
        

    
