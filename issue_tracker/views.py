from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.views import generic
from django.utils import timezone

from .models import Issue, Project
from .forms import NameForm, IssueForm, CreateUserForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User

# Create your views here.

@login_required
def get_name(request):
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('')
    else:
        form = NameForm()

    return render(request, 'issue_tracker/name.html', {'form': form})

# def index(request):
#     return HttpResponse("This is the index page of the Issue Tracker app.")


class IndexView(LoginRequiredMixin, generic.DetailView):


    template_name = "issue_tracker/IndexView.html"
    model = Issue

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['projects'] = Project.objects.all()
        return context


class ProjectView(LoginRequiredMixin, generic.ListView):
    template_name = "issue_tracker/ProjectView.html"
    model = Project


@login_required
def new_issue(request):
    if request.method == 'POST':
        form = IssueForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['issue_text']
            date_posted = timezone.now()
            priority = form.cleaned_data['priority']
            user = request.user
            issue = Issue(issue_text=text, date_posted=date_posted, priority=priority, user=user)
            issue.save()
            return HttpResponseRedirect('/issue_tracker/success/')
    else:
        form = IssueForm()

    return render(request, 'issue_tracker/issue_view.html', {'form': form})


def create_user(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            new_user = User.objects.create_user(username=username, email=email, password=password)
            new_user.save()
            return HttpResponseRedirect('/accounts/login/')
    else:
        form = CreateUserForm()

    return render(request, 'issue_tracker/create_user.html', {'form': form})


@login_required
def success_view(request):

    num_visits = request.session.get('num_visits', 1)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_visits': num_visits,
    }

    return render(request, 'issue_tracker/success_view.html')


@login_required
def delete_view(request, id):
    context = {}

    obj = get_object_or_404(Issue, id=id)

    if request.method == "POST":
        obj.delete()
        return HttpResponseRedirect("/")

    return render(request, "issue_tracker/delete_view.html", context)
