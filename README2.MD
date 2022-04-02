# Tech Blog

In this project I built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I wanted to create an application where developers can learn technical concepts, recent advancements, and new technologies. I built this project to explore the use of MVC paradigm in its architectural structure. The application uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 

## Technologies Used

* JavaScript
* MySQL2 package
* Sequelize package
* dotenv package
* express-handlebars package
* bcrypt package
* express-session package
* connect-session-sequelize package
* JSON
* Express.js 
* Node.js

## Criteria that I met to achieve this

* When the user initially visits the site, they are presented with the homepage, which includes any existing blog posts; navigation bar for the: homepage, dashboard; and the option to log in.
* When the user clicks on the homepage option, they are taken there.
* When any other navigation links are clicked, they are asked to either sign up or in.
* When signing up, they are prompted to create a username and password.
* Once they have signed up, their user credentials are saved and they are logged in.
* When the user revisits and signs in later, they are prompted to resign in.
* Once signed in, then sign out replaces the sign in on the navigation bar.
* On the homepage, existing posts include the post title and the date created.
* When existing post's are clicked; their title, content, creator’s username, date created and the option to leave a comment is viewable.
* When a comment is submitted; then it's content, user's name and date created; is displayed.
* When the dashboard link is clicked, they are taken there; where the user's past post's and the option to post a new blog is displayed.
* When adding a new post, the user is asked to enter a title and content.
* When a new post is created, it's title and content is saved to the dashboard.
* When the user clicks on their own existing post they can delete or update it.
* When the user clicks on the logout option they are signed out.
* When idle on the site for a while, they are prompted to resign in, in order to edit comments.

## Deployed Application