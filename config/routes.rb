Rails.application.routes.draw do
  namespace :api do
    resources :restaurant_pizzas, only: [:index, :create ,:show]
    resources :pizzas, only: [:index, :show]
    resources :restaurants, only: [:index, :show, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
