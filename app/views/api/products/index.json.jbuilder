json.array! @products do |product|
  json.id product.id
  json.name product.name
  json.category product.category.name
  json.brand product.brand.name
  json.price product.price
  json.description product.description
  json.image_url product.image_url
end
