from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Note
# Create your views here.
def first_view(request):
    return render( request, "index.html")

def login_page_view(request):
    return render(request, "login.html")

def createAccount(request):
    if request.method == "POST":
        Email = request.POST.get("email")
        Password = request.POST.get("password")
        user = User.objects.create_user(Email, Email, Password)

        messages.success(request, "Your account has been created successfully! You can now proceed to sign in.")
    return render(request, 'login.html')


def logUserIn(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]

        user = authenticate(username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('change')
        else:
            # Login failed
            print("Invalid email or password")
    #return render(request, "change.html")


def change(request):
    return render(request, 'change.html')



def createNote(request):
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        Note.objects.create(title = title, content = content)
        return redirect('createNote')
    return render(request, 'change.html')
