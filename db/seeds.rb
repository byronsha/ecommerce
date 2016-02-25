# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.destroy_all
Category.destroy_all
Brand.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("products")
ActiveRecord::Base.connection.reset_pk_sequence!("categories")
ActiveRecord::Base.connection.reset_pk_sequence!("brands")

brands = [
  "Nike",
  "Adidas",
  "Calvin Klein",
  "Ralph Lauren",
  "Levis"
]

brands.each_with_index do |brand, idx|
  Brand.create({id: idx + 1, name: brand})
end

categories = [
  "Hats",
  "Shoes",
  "Jackets",
  "Shirts",
  "Tees",
  "Pants"
]

categories.each_with_index do |category, idx|
  Category.create({id: idx + 1, name: category})
end

Product.create({name: "Generic running shoes", category_id: 2, brand_id: 1, price: 59.99, description: "Comfy running shoes", image_url: "http://images.footlocker.com/pi/99728021/zoom/nike-roshe-one-boys-grade-school"})
Product.create({name: "Stefan Janoski shoes", category_id: 2, brand_id: 1, price: 119.99, description: "Dope shoes", image_url: "https://s-media-cache-ak0.pinimg.com/564x/73/91/8a/73918ac42d1ef0627d0591e24b2ecdcd.jpg"})
Product.create({name: "Track jacket", category_id: 3, brand_id: 4, price: 79.99, description: "Black jacket with single white stripe and large logo", image_url: "http://cdnc.lystit.com/photos/84db-2014/04/04/polo-ralph-lauren-black-estate-fleece-track-jacket-product-1-18921854-0-780266579-normal_large_flex.jpeg"})
