class Api::RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    #GET /restaurants
    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    #GET /restaurants/:id
    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, serializer: RestaurantPizzaSerializer,  status: :ok
    end

    # DELETE /restaurants/:id
    def destroy
        #find
        delete_restaurant = Restaurant.find(params[:id])
        #delete
        delete_restaurant.destroy
        head :no_content

    end



    private

    def record_not_found
        render json: {error: "Restaurant not found"}, status: :not_found
    end
end
