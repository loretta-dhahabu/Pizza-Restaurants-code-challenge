class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :address
end
