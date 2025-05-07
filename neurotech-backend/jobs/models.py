
from django.db import models
from django.contrib.auth.models import User

class Job(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    type = models.CharField(max_length=50)  # Full-time, Part-time, etc.
    logo = models.URLField(blank=True, null=True)
    applyUrl = models.URLField()
    featured = models.BooleanField(default=False)
    sector = models.CharField(max_length=100, blank=True)
    setting = models.CharField(max_length=50, blank=True)  # Remote, On-site, Hybrid
    description = models.TextField(blank=True)
    requirements = models.TextField(blank=True)
    salary = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return f"{self.title} at {self.company}"


class Profile(models.Model):
    """Model to store candidate profile submissions"""
    jobTitle = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    jobType = models.CharField(max_length=50)
    workSetting = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    salaryMin = models.CharField(max_length=50, blank=True)
    salaryMax = models.CharField(max_length=50, blank=True)
    description = models.TextField()
    requirements = models.TextField()
    applicationLink = models.URLField()
    contactEmail = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.jobTitle} ({self.contactEmail})"
