class CreateSpecials < ActiveRecord::Migration[7.0]
  def change
    create_table :specials do |t|
      t.string :location_name
      t.string :location_image
      t.string :location_neighborhood
      t.string :location_address
      t.string :location_url
      t.time :start_time
      t.time :end_time
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :saturday
      t.boolean :sunday
      t.boolean :beer
      t.boolean :wine
      t.boolean :cocktails
      t.boolean :food
      t.text :hh_special_text
      t.boolean :needs_create_review
      t.boolean :needs_update_review
      t.boolean :needs_delete_review

      t.timestamps
    end
  end
end
