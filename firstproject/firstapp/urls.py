from django.urls import path
from . import views
urlpatterns = [
        path('', views.first_view, name='first_view'),
        path('login/', views.login_page_view, name='login_view'),
        path('create_account/', views.createAccount, name='createAccount'),
        path('log_user_in/', views.logUserIn, name='logUserIn'),
        path('change/', views.change, name='change'),
        path('input_note/', views.createNote, name='createNote'),
        path('home/', views.displayNote, name='displayNote'),
        path('notes/<int:note_id>/', views.noteDetail, name='note_detail')
]