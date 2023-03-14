class UserSpecialReview < ApplicationRecord
  belongs_to :user
  belongs_to :special
end
