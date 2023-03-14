class UserSpecialReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating
  has_one :user
  has_one :special
end
