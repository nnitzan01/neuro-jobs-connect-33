
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Job, Profile
from .serializers import JobSerializer, ProfileSerializer
from django.db.models import Q

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  # Restrict POST/PUT/DELETE to authenticated users
    
    def get_queryset(self):
        queryset = Job.objects.all().order_by('-created_at')
        
        # Handle featured filter
        featured = self.request.query_params.get('featured')
        if featured is not None:
            queryset = queryset.filter(featured=featured.lower() == 'true')
            
        # Handle search query
        search_query = self.request.query_params.get('search')
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(company__icontains=search_query) |
                Q(description__icontains=search_query)
            )
            
        # Filter by job function (matches to title for simplicity)
        job_function = self.request.query_params.get('job_function')
        if job_function and job_function != 'all':
            queryset = queryset.filter(title__icontains=job_function.replace('-', ' '))
            
        # Filter by sector
        sector = self.request.query_params.get('sector')
        if sector and sector != 'all':
            queryset = queryset.filter(sector__icontains=sector.replace('-', ' '))
            
        # Filter by location
        location = self.request.query_params.get('location')
        if location and location != 'all':
            queryset = queryset.filter(location__icontains=location)
            
        # Filter by job type
        job_type = self.request.query_params.get('type')
        if job_type and job_type != 'all':
            queryset = queryset.filter(type__icontains=job_type)
            
        # Filter by setting (remote, on-site, etc)
        setting = self.request.query_params.get('setting')
        if setting and setting != 'all':
            queryset = queryset.filter(setting__icontains=setting)
            
        return queryset
    
    @action(detail=True, methods=['get'])
    def detail(self, request, pk=None):
        """Get detailed information about a specific job"""
        job = self.get_object()
        serializer = self.get_serializer(job)
        return Response(serializer.data)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
