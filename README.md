# Pizza-Restaurants

## Table Of Content
* Description

* Ruby version

* System dependencies setup

* Database creation

* Deployment instructions

* Features

* License

# Description
This is an app called Pizza-Restaurants that displays restaurants details i.e the nmae, location address, and images.<br>
It also allows the user to see all the pizzas offered by every restaurant.<br>
It also gives the users a permission to add pizzas to the restaurant.<br>
The user can also remove a restaurant tgether with its associated pizzas.

## Ruby Version
* ruby 2.7.4p191 (2021-07-07 revision a21a3b7d23) [x86_64-linux]
## System Dependencies Local setup
To download the dependencies for the frontend and backend, run:

* bundle install
* npm install --prefix client

You can run the Rails API on localhost:3000 by running:

* rails s

You can run the React app on localhost:4000 by running:

* npm start --prefix client

## Database Creation
### Models
The relationships and assocciations are as follows:

* A Restaurant has many Pizzas through RestaurantPizza
* A Pizza has many Restaurants through RestaurantPizza
* A RestaurantPizza belongs to a Restaurant and belongs to a Pizza

If you use a Rails generator to create the models, make sure to use the --no-test-framework flag to avoid overwriting the test files. For example,  e.g rails g restaurant --no-test-framework

Add any code needed in the model files to establish the relationships.

Then, run the migrations and seed file:

* rails db:migrate db:seed

## Routes
Make sure to return JSON data in the format specified along with the appropriate HTTP verb.

* GET /restaurants  => gets all the restaurants in an array format

* GET /restaurants/:id => gets a single or the specified restaurant with its available pizza list

* DELETE /restaurants/:id  =>removes the specified restaurant from the database, along with any RestaurantPizzas that are associated with it (a RestaurantPizza belongs to a Restaurant, so you need to delete the RestaurantPizzas before the Restaurant can be deleted).
* GET /pizzas  => gets all the pizzas in an array format

* POST /restaurant_pizzas  => creates a new RestaurantPizza that is associated with an existing Pizza and Restaurant. 

  
## Deployment Instructions
To deploy a rails API with a react frontend within it, I followed the following procedure:

* Download the Heroku CLI from;  https://devcenter.heroku.com/articles/heroku-cli. <br>
run this command in the Ubuntu terminal to install;
  * curl https://cli-assets.heroku.com/install.sh | sh <br>
This will let you run commands from your terminal to deploy and interact with your application on Heroku.
* After downloading and installing, log in to Heroku via the CLI in the terminal:

  * heroku login

* Install the latest ruby version; 
  * rvm install 2.7.4 --default

* Next, install Postgres to the root of your machine: 
   * sudo apt update
   * sudo apt install postgresql postgresql-contrib libpq-dev

* run; 
    * heroku stack:set heroku-20

* run;
    * heroku create (app name)

* run;
    * bundle lock --add-platform x86_64-linux <br> =>
This will add the platform to your Gemfile.lock

* Make a Procfile for Heroku at the root directory with the following code:

    * web: bundle exec rails s
    * release: bin/rake db:migrate

### Deployment

* At the root directory, run this code:

    * bundle install
$ rails db:create db:migrate db:seed
    * npm install --prefix client

    * npm run build --prefix client
* Then move all the static pages to the public folder of the root directory as follows:

     * mv client/build/* public


* Now go back to your terminal and run the following code to set buildpacks and create a remote repository:

     * heroku buildpacks:add heroku/nodejs --index 1
     * heroku buildpacks:add heroku/ruby --index 2

* lastily;
    * git add .
    * git commit
    * git push heroku master

## Deployed Link
### frontend
https://restaurant-pizzas.herokuapp.com/

### backend
https://restaurant-pizzas.herokuapp.com/api/restaurants

## Features
A user will be able to: 
1. See all the restaurants
2. Render/Display a list of pizzas.
3. add pizzas to each restaurant
4. Delete a specific restaurant together with its associated pizzas


## Requirements
* Access to a computing device
* Internet access
## Installation process
* Clone to my repo : git clone https://github.com/loretta-dhahabu/Pizza-Restaurants-code-challenge

## Technology Used
* I used HTML for laying out the structure of the app
* The CSS was used to style the web pages
* React was used to create interactive UI. Design simple views for each state in my application, and efficiently update and render just the right components when my data changes.
* rubyon rails for backend

## License 
### MIT License

Copyright (c) [2022] [Loretta Dhahabu Jefwa]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Author Loretta-Dhahabu : https://github.com/loretta-dhahabu

Releases
No releases published

Packages
No packages published

Languages used
html
css
Ruby on Rails
React JS




