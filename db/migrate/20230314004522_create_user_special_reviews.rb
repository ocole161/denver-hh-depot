class CreateUserSpecialReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :user_special_reviews do |t|
      t.integer :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :special, null: false, foreign_key: true

      t.timestamps
    end
  end
end
