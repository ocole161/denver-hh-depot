class User < ApplicationRecord
    has_many :user_special_favorites, dependent: :destroy
    has_many :user_special_reviews, dependent: :destroy
    has_many :specials, through: :user_special_favorites

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

    has_secure_password
end
