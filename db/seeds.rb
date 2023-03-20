User.destroy_all
Special.destroy_all
UserSpecialFavorite.destroy_all
UserSpecialReview.destroy_all

puts "Seeding..."

# Create Specials
s1 = Special.create(
    location_name: "Aloy Modern Thai",
    location_image: "https://s3-media0.fl.yelpcdn.com/bphoto/xIPALfR5UYWAR7nKCy46pQ/o.jpg",
    location_neighborhood: "LoDo",
    location_address: "2134 Larimer St, Denver, CO 80205",
    location_url: "https://www.aloymodernthai.com/",
    start_time: "3pm",
    end_time: "7pm",
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    beer: true,
    wine: true,
    cocktails: true,
    food: true,
    hh_special_text: "Draft and Can Beers $5 or less\nSpecialty Cocktails $6\nWine $6 Glasses & $20 Bottles\nSake 1/2 off\n\n$3 off Appetizers",
    needs_create_review: false,
    needs_update_review: false,
    needs_delete_review: false
)
Special.create(
    location_name: "The Well Pizza and Bar",
    location_image: "https://s3-media0.fl.yelpcdn.com/bphoto/Z9FlXeD4gSxEiqgq2ejweA/o.jpg",
    location_neighborhood: "LoHi",
    location_address: "3210 Wyandot Street, Denver, CO 80211",
    location_url: "https://www.thewellpizzabar.com/",
    start_time: "4pm",
    end_time: "8pm",
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
    beer: true,
    wine: true,
    cocktails: true,
    food: true,
    hh_special_text: "$1 Off Beer\n$2 Off Wine\n$3 off Specialty Cocktails",
    needs_create_review: true,
    needs_update_review: true,
    needs_delete_review: true
)

# Create users
User.create(username: "admin", password: "a", user_type: "admin")
u1 = User.create(username: "user", password: "u", user_type: "user")

# Create a review
UserSpecialReview.create(rating: 4, user_id: u1.id, special_id: s1.id)

puts "Seeding finished!"