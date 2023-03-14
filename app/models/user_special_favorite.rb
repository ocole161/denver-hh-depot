class UserSpecialFavorite < ApplicationRecord
  belongs_to :user
  belongs_to :special
end
