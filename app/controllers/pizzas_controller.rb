class PizzasController < ApplicationController

    #GET /pizzas
    def index
        pizzas = Pizza.all
        render json: pizzas, status: :ok
    end

    #GET /pizzas/:id
    def show
        pizza = Pizza.find(params[:id])
        render json: pizza, status: :ok
    end

end
