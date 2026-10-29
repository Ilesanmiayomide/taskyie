from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.http import JsonResponse
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
    return render(request, "index.html")


def change(request):
    return render(request, 'change.html')



# def createNote(request):
#     if request.method == "POST":
#         title = request.POST.get("title")
#         content = request.POST.get("content")
#         Note.objects.create(title = title, content = content)

#         print("Note saved:", Note.id, Note.title)
#         return redirect('createNote')
#     return render(request, 'change.html')



# from django.shortcuts import render, redirect
# from .models import Note

def createNote(request):
    print("Request method:", request.method)

    if request.method == "POST":
        print("POST request received")
        print("Form data:", request.POST)

        title = request.POST.get("title")
        content = request.POST.get("content")

        note = Note.objects.create(
            user=request.user,
            title=title,
            content=content
        )

        print("Note saved:", note.id, note.title)

        return redirect('createNote')

    return render(request, 'change.html')


def displayNote(request):
    notes = Note.objects.filter(user=request.user)
    data = list(notes.values('id', 'title', 'content', 'created_at'))
    return JsonResponse(data, safe=False)


def noteDetail(request, note_id):
    note = get_object_or_404(Note, id=note_id, user=request.user)

    return render(request, "details_page.html", {
        "note": note
    })