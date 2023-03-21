# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_21_183236) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "specials", force: :cascade do |t|
    t.string "location_name"
    t.string "location_image"
    t.string "location_neighborhood"
    t.string "location_address"
    t.string "location_url"
    t.time "start_time"
    t.time "end_time"
    t.boolean "monday"
    t.boolean "tuesday"
    t.boolean "wednesday"
    t.boolean "thursday"
    t.boolean "friday"
    t.boolean "saturday"
    t.boolean "sunday"
    t.boolean "beer"
    t.boolean "wine"
    t.boolean "cocktails"
    t.boolean "food"
    t.text "hh_special_text"
    t.boolean "needs_create_review"
    t.boolean "needs_update_review"
    t.boolean "needs_delete_review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "lat", precision: 10, scale: 6
    t.decimal "lng", precision: 10, scale: 6
  end

  create_table "user_special_favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "special_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["special_id"], name: "index_user_special_favorites_on_special_id"
    t.index ["user_id"], name: "index_user_special_favorites_on_user_id"
  end

  create_table "user_special_reviews", force: :cascade do |t|
    t.integer "rating"
    t.bigint "user_id", null: false
    t.bigint "special_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["special_id"], name: "index_user_special_reviews_on_special_id"
    t.index ["user_id"], name: "index_user_special_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "user_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_special_favorites", "specials"
  add_foreign_key "user_special_favorites", "users"
  add_foreign_key "user_special_reviews", "specials"
  add_foreign_key "user_special_reviews", "users"
end
