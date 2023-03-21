class SpecialSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :location_image, :location_neighborhood, :location_address, :location_url, :start_time, :end_time, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :beer, :wine, :cocktails, :food, :hh_special_text, :needs_create_review, :needs_update_review, :needs_delete_review, :lat, :lng

  has_many :user_special_reviews
end
