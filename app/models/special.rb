class Special < ApplicationRecord
    has_many :user_special_favorites, :dependent :destroy
    has_many :user_special_reviews, :dependent :destroy

    validates :location_name, presence: true, uniqueness: true
    validates :hh_special_text, presence: true
end
