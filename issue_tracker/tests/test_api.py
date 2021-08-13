import datetime

from django.test import TestCase, Client
from rest_framework import status

from issue_tracker.models import Issue, Project, User
from issue_tracker.serializers import ProjectSerializer, IssueSerializer, UserSerializer

client = Client()


class GetProjectsTest(TestCase):
    """ Test module for GET all projects API """

    def setUp(self):
        self.test_user = User.objects.create_user(username="Test User")
        self.test_project_1 = Project.objects.create(
            project_name="Test Project",
            user=self.test_user
        )
        self.test_project_2 = Project.objects.create(
            project_name="No User Project",
        )

    def test_get_all_projects(self):
        response = client.get('http://127.0.0.1:8000/api/projects/')
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_single_project(self):
        project = Project.objects.get(pk=self.test_project_1.pk)
        response = client.get(f'http://127.0.0.1:8000/api/projects/{self.test_project_1.pk}/')
        serializer = ProjectSerializer(project)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_invalid_project(self):
        response = client.get('http://127.0.0.1:8000/api/projects/1000/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class GetIssuesTest(TestCase):
    def setUp(self):
        self.test_user = User.objects.create_user(username="Test User")
        self.test_project_1 = Project.objects.create(
            project_name="Test Project",
            user=self.test_user
        )
        self.test_issue_1 = Issue.objects.create(
            issue_text="test issue 1",
            user=self.test_user,
            priority="Low",
            date_posted=datetime.datetime.now(),
            date_completed=None,
            issue_type="Bug",
            in_progress=False,
            completed=False
        )

        self.test_issue_2 = Issue.objects.create(
            issue_text="test issue 2",
            user=self.test_user,
            priority="High",
            date_posted=datetime.datetime.now(),
            date_completed=None,
            issue_type="Feature",
            in_progress=True,
            completed=False
        )

    def test_get_all_issues(self):
        response = client.get('http://127.0.0.1:8000/api/issues/')
        issues = Issue.objects.all()
        serializer = IssueSerializer(issues, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_single_issue(self):
        issue = Issue.objects.get(pk=self.test_issue_1.pk)
        response = client.get(f'http://127.0.0.1:8000/api/issues/{self.test_issue_1.pk}/')
        serializer = IssueSerializer(issue)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_invalid_issue(self):
        response = client.get('http://127.0.0.1:8000/api/issues/1000/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
