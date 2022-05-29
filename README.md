# BLOGS APP



## Application Details:

#### Database
Using Derby database for on fly (single time app), same configurations works with Postrges as tested locally.
We have three tables 
1. **User** (Employee was used to avoid confusion on User class from spring security) : Contains user details 
with id, name, password, role, etc.
2. **Blog**: It contains blog details and date time of creation for sorting in later stage.
3. **Role**: Used to assign different roles to any user. i.e. Admin, SuperAdmin, Reader

Have added sample blogs and sample users for default use case.


### APIs

PFA postman collection for reference of APIs used for serving forntend app.


## Application Description:

### Backed

url : 
    https://blog-springboot-suyash.herokuapp.com/

Implemented all the controllers with JPA services, have added securities for user roles with help of JWT. And policies for APIs so that user with specific role could access the content/APIs.

Command:

    git push heroku master

### Frontend

url : 
    https://suyash-blog-react.herokuapp.com/


Basic app where user can create,edit,delete blogs, with sorting for blogs on the basis of creation time, and filter blogs on basis of creator.

**TODO:**(pending)

Had to add login check and fetch token for the user and activate policies.Already implemented on the springboot (backend) that would restrict user actions.

Command: 

Adding remote heroku

    heroku git:remote -a suyash-blog-react

Commit the changes & Push to heroku master

    git push heroku master
