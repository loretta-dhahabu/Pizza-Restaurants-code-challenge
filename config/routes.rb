Rails.application.routes.draw do
  resources :restaurant_pizzas, only[:index, :create]
  resources :pizzas, only[:index, :show, :create, :update]
  resources :restaurants, only[:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
