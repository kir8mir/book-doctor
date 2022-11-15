# 🚀 Welcome to doctor booking service!
- [THE DEMO](https://kir8mir.github.io/book-doctor/)

# Client part:
 - For using service you need to login first
  + use login - test, password - test 
  + or create your own user account with post request to https://doctor-book.herokuapp.com/users/
    + user DB example: {
      "username": "test",
      "password": "test",
      "visits": []
    }

# Server part:
- The server part deployed on heroku - https://doctor-book.herokuapp.com
- Server created due to Nest.js. You can see main comands in the doc-server folder
- I'm using mongoDB with mongoose in this project:
  + Use this link to make requests for user to DB - https://doctor-book.herokuapp.com/users/
  + Use this link to make requests for doctors to DB - https://doctor-book.herokuapp.com/docs/
- Here is just two simple roles Admin and User, every doctor is Admin
- Server has static module whitch preserve images for doctors profile
