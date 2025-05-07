
from rest_framework import serializers
from .models import Job, Profile

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields = ['created_by']
        
    def create(self, validated_data):
        """Set the created_by field to the current user if authenticated"""
        user = self.context['request'].user if self.context.get('request') else None
        if user and user.is_authenticated:
            validated_data['created_by'] = user
        return super().create(validated_data)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
