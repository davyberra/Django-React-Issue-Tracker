import datetime

from django.test import TestCase
from issue_tracker.models import Issue, Project, User


class ProjectTestCase(TestCase):
    def setUp(self) -> None:
        test_user = User.objects.create_user(username="Test User")
        Project.objects.create(
            project_name="Test Project",
            user=test_user
        )
        Project.objects.create(
            project_name="No User Project",
        )

    def test_project_has_no_user(self):
        project = Project.objects.get(project_name="No User Project")
        self.assertEqual(project.user, None)

    def test_project_has_correct_user(self):
        project = Project.objects.get(project_name="Test Project")
        user = User.objects.get(username="Test User")
        self.assertEqual(project.user, user)


class IssueTestCase(TestCase):
    def setUp(self):
        test_user = User.objects.create_user(username="Test User")
        Project.objects.create(
            project_name="proj_with_user_1",
            user=test_user
        )
        Project.objects.create(
            project_name="proj_with_user_2",
            user=test_user
        )
        Project.objects.create(
            project_name="proj-with_no_user",
        )

        Issue.objects.create(
            issue_text="first issue",
            user=test_user,
            priority="Low",
            date_posted=datetime.datetime.now(),
            date_completed=None,
            issue_type="Bug",
            in_progress=False,
            completed=False
        )