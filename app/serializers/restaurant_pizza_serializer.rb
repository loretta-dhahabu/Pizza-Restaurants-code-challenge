class RestaurantPizzaSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :address

  has_many :pizzas
end
