from rest_framework import serializers
from .models import *

class BasicInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInformation
        fields = '__all__'

class BasicInfoAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfoAccount
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}  # Password should not be readable

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'email', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}  # Password should not be readable