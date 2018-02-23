puts "Creating ingredients.."

require 'json'
require 'open-uri'

ingredients = JSON.parse(open("http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").read)

ingredients["drinks"].each do |ingredient|
  ingredient.each_value do |value|
    Ingredient.create(name: value)
  end
end

puts "Created ingredients.."
