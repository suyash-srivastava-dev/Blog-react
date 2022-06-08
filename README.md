# BLOGS APP

**This App is deployed over 2 different heroku servers, so refresh multiple times as project is most likely to be sleeping**

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

### Backed [Youtube video](https://youtu.be/ed-l34SXUZc)

url : 
    https://blog-springboot-suyash.herokuapp.com/

Implemented all the controllers with JPA services, have added securities for user roles with help of JWT. And policies for APIs so that user with specific role could access the content/APIs.

Command:

    git push heroku master

### Frontend [Youtube video](https://youtu.be/c_gPkblHAik)

url : 
    https://suyash-blog-react.herokuapp.com/

Screenshots:
1. Home page with all the blogs, with option of searching and sorting.
![image](https://user-images.githubusercontent.com/68404906/170889679-0d90740c-7691-402e-8697-3bb3754fa222.png)


![image](https://user-images.githubusercontent.com/68404906/170889731-3f88b235-a029-4f77-8599-caaa9aa19b2c.png)
![image](https://user-images.githubusercontent.com/68404906/170889743-25c17357-d253-4aec-ad7d-ce57b97c5007.png)

2. Blog can be edited and deleted by user.

![image](https://user-images.githubusercontent.com/68404906/170889687-3b62e0ca-f045-466a-a023-bfc8c76e3578.png)

3. Signin and Signup (pending)

![image](https://user-images.githubusercontent.com/68404906/170889788-458c27eb-43b6-4652-b7b7-277967762d56.png)


Basic app where user can create,edit,delete blogs, with sorting for blogs on the basis of creation time, and filter blogs on basis of creator.

**TODO:**(pending)

Had to add login check and fetch token for the user and activate policies.Already implemented on the springboot (backend) that would restrict user actions.

Command: 

Adding remote heroku

    heroku git:remote -a suyash-blog-react

Commit the changes & Push to heroku master

    git push heroku master
