class UserSpecialFavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :special
end
