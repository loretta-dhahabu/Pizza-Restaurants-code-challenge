class RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    #GET /restaurants
    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    #GET /restaurants/:id
    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, serializer: RestaurantPizzaSerializer, status: :ok
    end



    private

    def record_not_found
        render json: {error: "Restaurant not found"}, status: :not_found
    end
end
