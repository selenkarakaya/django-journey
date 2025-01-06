from rest_framework import routers
from .api import ApptViewSet


router = routers.DefaultRouter()
router.register("api/appts", ApptViewSet, "appts")

urlpatterns = router.urls
