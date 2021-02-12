from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.views import generic
from django.utils import timezone

from .models import Issue
from .forms import NameForm, IssueForm

# Create your views here.

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


class IndexView(generic.ListView):
    template_name = "issue_tracker/IndexView.html"
    model = Issue





def new_issue(request):
    if request.method == 'POST':
        form = IssueForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['issue_text']
            date_posted = timezone.now()
            priority = form.cleaned_data['priority']
            issue = Issue(issue_text=text, date_posted=date_posted, priority=priority)
            issue.save()
            return HttpResponseRedirect('/issue_tracker/success/')
    else:
        form = IssueForm()

    return render(request, 'issue_tracker/issue_view.html', {'form': form})


def success_view(request):

    num_visits = request.session.get('num_visits', 1)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_visits': num_visits,
    }

    return render(request, 'issue_tracker/success_view.html', context=context)


def delete_view(request, id):
    context = {}

    obj = get_object_or_404(Issue, id=id)

    if request.method == "POST":
        obj.delete()
        return HttpResponseRedirect("/")

    return render(request, "issue_tracker/delete_view.html", context)
