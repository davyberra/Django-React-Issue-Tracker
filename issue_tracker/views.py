from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.views import generic
from django.utils import timezone

from .models import Issue, Project
from .forms import NameForm, IssueForm, CreateUserForm, CreateProjectForm
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
    model = Project


class ProjectView(LoginRequiredMixin, generic.ListView):
    template_name = "issue_tracker/ProjectView.html"
    model = Project


@login_required
def new_issue(request, pk):
    if request.method == 'POST':
        form = IssueForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['issue_text']
            date_posted = timezone.now()
            priority = form.cleaned_data['priority']
            user = request.user
            issue_type = form.cleaned_data['issue_type']
            project = Project.objects.get(id=pk)
            # project = project.project_name
            issue = Issue(issue_text=text, date_posted=date_posted, priority=priority, user=user, project=project,
                          issue_type=issue_type)
            issue.save()
            return HttpResponseRedirect(f'/issue_tracker/{pk}/success/')
    else:
        form = IssueForm()

    return render(request, 'issue_tracker/issue_view.html', {'form': form,
                                                             'pk': pk})


def create_project(request):
    if request.method == 'POST':
        form = CreateProjectForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['project_name']
            user = request.user
            project = Project(project_name=name, user=user)
            project.save()
            return HttpResponseRedirect('/projects/')

    else:
        form = CreateProjectForm()

    return render(request, 'issue_tracker/create_project.html', {'form': form})


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
def success_view(request, pk):

    num_visits = request.session.get('num_visits', 1)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_visits': num_visits,
    }

    return render(request, 'issue_tracker/success_view.html', context={'pk': pk})


@login_required
def delete_view(request, id, pk):
    context = {'pk': pk}

    obj = get_object_or_404(Issue, id=id)

    if request.method == "POST":
        obj.delete()
        return HttpResponseRedirect(f"/{pk}/issues/")

    return render(request, "issue_tracker/delete_view.html", context)


@login_required
def delete_project_view(request, pk):
    context = {'pk': pk}

    obj = get_object_or_404(Project, id=pk)

    if request.method == "POST":
        obj.delete()
        return HttpResponseRedirect('/projects/')

    return render(request, "issue_tracker/delete_project_view.html", context)


@login_required()
def complete_issue_view(request, id, pk):
    context = {'pk': pk}
    obj = get_object_or_404(Issue, id=id)

    if request.method == "POST":
        obj.completed = True
        obj.date_completed = timezone.now()
        obj.save()
        return HttpResponseRedirect(f'/{pk}/issues/')

    return render(request, "issue_tracker/complete_view.html", context)


class CompletedIssuesIndexView(LoginRequiredMixin, generic.DetailView):

    template_name = "issue_tracker/completed_issues_index_view.html"
    model = Project
