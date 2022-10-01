class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :ingredients
end
