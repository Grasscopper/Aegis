from .models import Hero
from django.core import serializers
from django.http import HttpResponse

# Create your views here.
def gethero(request):
    hero = Hero.objects.all()
    data = serializers.serialize('json', hero)
    return HttpResponse(data, content_type='application/json')