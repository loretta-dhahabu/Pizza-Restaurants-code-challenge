class Api::RestaurantPizzasController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error

    # #GET /restaurant_pizzas
    # def index
    #     restaurant_pizzas = RestaurantPizza.all
    #     render json: restaurant_pizzas
    # end

    # def show
    #     restaurant_pizzas = RestaurantPizza.find(params[:id])
    #     render json: restaurant_pizzas
    # end

    # POST /restaurant_pizzas
    def create
        restaurant_pizza = RestaurantPizza.create!(restaurant_pizza_params)
        render json: restaurant_pizza.pizza,  status: :created
    end

    private

    def restaurant_pizza_params
        params.permit(:price, :pizza_id, :restaurant_id)
    end

    def unprocessable_entity_error(exception)
        render json: {error: "errors: exception.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
