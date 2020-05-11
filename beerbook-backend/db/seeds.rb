require 'faker'
Beer.destroy_all



(0..20).each do |number|
    Beer.create({name: Faker::Beer.name, image: Faker::Avatar.image, description: Faker::Coffee.notes  , likes: 0, unlikes:0, origin: Faker::Coffee.origin})
end

