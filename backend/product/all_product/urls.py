from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'all_product', ProductViewSet, basename='all_product')

urlpatterns = router.urls
