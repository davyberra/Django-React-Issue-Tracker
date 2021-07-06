from davys_issue_tracker.settings import *
import dj_database_url

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = [
    'localhost',
    '.herokuapp.com',
]

SECRET_KEY = get_env_variable("SECRET_KEY")
DATABASE_URL = get_env_variable("DATABASE_URL")
# db_from_env = dj_database_url.config()
# DATABASES['default'].update(db_from_env)

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"