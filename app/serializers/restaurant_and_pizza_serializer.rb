class RestaurantAndPizzaSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :pizza_id, :price
end
