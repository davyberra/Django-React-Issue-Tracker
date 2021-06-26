from django import template

register = template.Library()


@register.simple_tag()
def get_issue_count(project):
    count = 0
    for issue in project.issue_set.all():
        if issue.completed == False:
            count += 1

    return count
