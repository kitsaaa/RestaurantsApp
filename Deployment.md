# Deployment
Our group has chosen Heroku for deploying our angular app. 
## Prerequisite
Git and Heroku CLI must be installed before the deployment.
## First Step
The first step is to create an empty heroku application and git repository. This can be done either through cli or gui using their webpage. 
## Second Step
The second step is to connect your github repository to empty heroku application. This can be done in deployment tab of you heroku app, also make sure to enable automatic deployment from git repo (app will automatically be deployed whenever you push to your repo).
## Third Step
The third step is to add server.js file to angular app. Then, modify package.json to include engines (node and npm), and change start script from "ng serve" to "node server.js".
## Deploying
Finally for deploying our app simply push it to github repo ("git add .", "git commit", "git push origin <branch>").
## Presentation
https://www.youtube.com/watch?v=a5fFjIXPLvQ&ab_channel=Korolkov
