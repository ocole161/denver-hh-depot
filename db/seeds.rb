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
    needs_delete_review: false,
    lat: 39.75434700904769,
    lng: -104.99063138849039
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
    needs_delete_review: true,
    lat: 39.76238479071804,
    lng: -105.01423521462846
)
Special.create(
    location_name: "Sidecar Lounge",
    location_image: "https://s3-media0.fl.yelpcdn.com/bphoto/Z_ZXI-euOkxOc14SFJpOHA/o.jpg",
    location_neighborhood: "LoDo",
    location_address: "2048 Larimer Street,  Denver, Co 80205",
    location_url: "http://www.sidecardenver.com/",
    start_time: "11am",
    end_time: "7pm",
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
    beer: true,
    wine: false,
    cocktails: true,
    food: true,
    hh_special_text: "$3 Beers\n$5 Drinks and Shots",
    needs_create_review: true,
    needs_update_review: true,
    needs_delete_review: true,
    lat: 39.75355454654288, 
    lng: -104.99159073673704
)
Special.create(
    location_name: "View House",
    location_image: "https://s3-media0.fl.yelpcdn.com/bphoto/Lk5TJooer5zAJIjyq3qPZQ/o.jpg",
    location_neighborhood: "LoDo",
    location_address: "2015 Market St, Denver, CO 80205",
    location_url: "https://viewhouse.com/",
    start_time: "3pm",
    end_time: "6pm",
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
    hh_special_text: "$4 Select Beers, Wines, and Wells\n$6 Select Beers, Wines, and Cocktails\n$8 32oz Beers, Premium wine and Cocktails\nFoodSpecials",
    needs_create_review: true,
    needs_update_review: true,
    needs_delete_review: true,
    lat: 39.754132109766616,
    lng: -104.99332598618777
)
Special.create(
    location_name: "Mile High Spirits",
    location_image: "https://s3-media0.fl.yelpcdn.com/bphoto/7AB45H3_AzfAB8bAduwMfg/o.jpg",
    location_neighborhood: "LoDo",
    location_address: "2201 Lawrence St, Denver, CO",
    location_url: "https://www.drinkmhs.com/",
    start_time: "4pm",
    end_time: "7pm",
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    beer: false,
    wine: false,
    cocktails: true,
    food: false,
    hh_special_text: "$4 Cocktails\n$4 Off Bottles",
    needs_create_review: true,
    needs_update_review: true,
    needs_delete_review: true,
    lat: 39.75458591767968, 
    lng: -104.9893377004623
)

# Create users
User.create(username: "admin", password: "a", user_type: "admin")
u1 = User.create(username: "user", password: "u", user_type: "user")

# Create a review
UserSpecialReview.create(rating: 4, user_id: u1.id, special_id: s1.id)

puts "Seeding finished!"