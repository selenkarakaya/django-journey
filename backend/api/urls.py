from rest_framework import routers
from .api import ApptViewSet


router = routers.DefaultRouter()
router.register("api/appts", ApptViewSet, "appts")

# that'll basically just give us the URLa that were registered for this endpoint
urlpatterns = router.urls

# We should have a basoc CRUD API
