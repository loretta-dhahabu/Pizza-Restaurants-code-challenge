class RestaurantsController < ApplicationController
    
    #GET /restaurants
    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    #GET /restaurants/:id
    def show
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant
    end
end
