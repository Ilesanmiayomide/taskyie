from django.urls import path
from . import views
urlpatterns = [
        path('', views.first_view, name='first_view'),
        path('login/', views.login_page_view, name='login_view'),
        path('create_account/', views.createAccount, name='createAccount'),
        path('log_user_in/', views.logUserIn, name='logUserIn'),
        path('change/', views.change, name='change')
]