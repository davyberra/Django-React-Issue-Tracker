# Django/React Issue Tracker

### [View the site here](https://django-react-issue-tracker.herokuapp.com/) 

## Description
An application that allows a user to log in, create projects and keep track of issues.

Users can create their own account which will then display only the projects associated with that account. On each project, users can add issues, declare whether it is a bug/feature, delete/edit issues, and view completed issues.
The date/time that each issue was created and completed are automatically tracked as well.

Created using Django, React, Bootstrap, and deployed on Heroku.
## Usage
### Creating an account
![Login Page](https://imgur.com/Tz50MeR.jpg)

The app will first ask you to login with your credentials. To get set up with your own
account, click 'Signup' in the navigation bar at the top of the page. You will be taken to a screen as shown below
where you can signup with a username and password.

![Signup Page](https://imgur.com/lxOvme0.jpg)
### Creating a Project
![Project View](https://imgur.com/IwEq9pD.jpg)

After signing up, you should be taken to the dashboard screen where you can view and create new projects.
Clicking the 'New Project' button will pop up a window for you to type in the name of your project.

![New Project](https://imgur.com/Uxxy1MW.jpg)

After clicking 'Save Project' your new project should appear on your dashboard.

![Test Project](https://imgur.com/wkQd8h3.jpg)
### Creating/Modifying Issues
Now that you have a new project set up, go ahead and click on the name of the project to be taken to the Issues Dashboard.

![Issue View](https://imgur.com/IwEq9pD.jpg)

This screen will list all the issues for the specified project, along with various data about each.
Clicking on 'New Issue' will pop up a screen just like when creating a new project that allows you to create a new issue.

![New Issue](https://imgur.com/N8dc9F2.jpg)

On this screen you are given many fields to fill out, including the issue description, type (Bug/Feature), and priority level.
Clicking 'Save Issue' will take you back to the Issue Dashboard with the new issue added.

![First Issue](https://imgur.com/aQW29jv.jpg)

You can add as many issues as you want, and toggle their status with the dropdown as shown below.

![In Progress](https://imgur.com/5SSJgho.jpg)

You can mark an issue as complete when it is finished, moving it to the Completed Issues view which can be accessed by
clicking the 'View Completed Issues' button.

![Completed Issues](https://imgur.com/BhfcA7v.jpg)

If you wish to delete an issue permanently, simply click the 'delete' button. A confirmation will popup ensuring that you 
truly wish to delete the issue, and clicking OK will delete it permanently.
### Logging out
To logout of your account, click the 'Logout' button in the navigation bar, which will take you to a confirmation screen.

![Logout](https://imgur.com/FMpVFZa.jpg)

Clicking through this screen will successfully log you out and redirect you to the login page.