
from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),  # Make sure this matches your latest migration
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='requirements',
            field=models.TextField(blank=True),
        ),
    ]
