# Tech Blogger

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Additional Requirement](#requirements)
#### * [Deployed Application](#application)
#### * [Demo Video](#video)
#### * [Installation/Technical Requirements](#installation)
#### * [Usage](#usage)
#### * [Tests](#tests)
#### * [License](#license)


## Project Description
The scope of project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

### User Story
AS A developer who writes about tech 
I WANT a CMS-style blog site 
SO THAT I can publish articles, blog posts, and my thoughts and opinions


### Acceptance Criteria
GIVEN a CMS-style blog site:

- WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
- WHEN I click on the homepage option, THEN I am taken to the homepage.
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in.
- WHEN I choose to sign up, THEN I am prompted to create a username and password.
- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site.
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password.
- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out.
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created.
- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post.
- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.
- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard.
- WHEN I click on the logout option in the navigation, THEN I am signed out of the site.
- WHEN I am idle on the site for more than a set time, THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.

 
## Additional Requirements
The application must:
- follow MVC paradigm in the architectural structure
- use Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


## Deployed Application
https://about-tech-blog.herokuapp.com/


## Demo Video
N/A


## Installation/Technical Requirements
- Application is deployed using Heroku
- User needs to install [node.js (version 18.15.0 LTS)](https://nodejs.org/en/).
- To use the application user has to list the following as dependencies in the package.json file:
  - [inquirer (version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4),
  - [dotenv (version 8.2.0)](https://www.npmjs.com/package/dotenv/v/8.2.0),
  - [express (version 4.18.2)](https://www.npmjs.com/package/express),
  - [MySQL2 (version 3.2.0)](https://www.npmjs.com/package/mysql2),
  - [Sequile (version 6.30.0)](https://www.npmjs.com/package/sequelize).


## Usage
First time user must register to access the application. Once registered, the user can add comments to the posts  of other users and create own posts. 
User can also access user Dashboard, where user can create new posts or delete previous ones. 


## Tests
At this time no Unit Tests available to test the application functionalities. 


## Contribution
N/A


## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
