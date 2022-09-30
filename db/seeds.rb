# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "🍕 Seeding restaurants..."
Restaurant.create!([
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    name: "Sottocasa NYC",
    address: "298 Atlantic Ave, Brooklyn, NY 11201"
  },
  {
    image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdHRvY2FzYSUyMG55YyUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    name: "PizzArte",
    address: "69 W 55th St, New York, NY 10019"
  },
  {
    image: "https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdHRvY2FzYSUyMG55YyUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    name: "San Matteo NYC",
    address: "1559 2nd Ave, New York, NY 10028"
  }
])

puts "🍕 Seeding pizzas..."
Pizza.create!([
  {
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Cheese",
    description: "Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese. It's anything but plain.",
    ingredients: "Dough, Tomato Sauce, Cheese"
  },
  {
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Pepperoni",
    description: "Generally, the toppings for Chicago pizza are ground beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce. Some locations will finish off their pizzas with a sprinkle of Parmesan cheese across the tomato sauce.",
    ingredients: "Dough, Tomato Sauce, Cheese, Pepperoni"
  },
  {
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "California",
    description: "The typical California pizza toppings are fresh mozzarella, tomatoes, basil leaves, oregano, and olive oil. Since Neapolitan pizza is thin, it isn't designed to handle the weight of too many toppings. In fact, Neapolitan pizza is so thin that it's typically eaten with a fork and knife.",
    ingredients: "Dough, Sauce, Ricotta, Red peppers, Mustard"
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "Greek",
    description: "This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.",
    ingredients: "Dough, Sauce, Cheese, Feta, Artichokes, Kalamata Olives"
  },
  {
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Margherita",
    description: "The name of this classic Italian pizza translates to greengrocer’s pizza. It consists of a basic pizza dough which is smeared with tomato sauce, topped with mozzarella and grilled slices of eggplant and zucchini, then baked. Lastly, pizza ortolana is typically drizzled with olive oil and topped with fresh basil.",
    ingredients: "Dough, Sauce, Cheese, Basil"
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "BBQ Chicken",
    description: "BBQ Chicken pizza is a  pizza characterized by a thick deep-dish crisp crust and inverted toppings. Cheese is applied directly to the top of the dough, followed by a thick tomato sauce that is seasoned with garlic and spices. The most common topping is pepperoni, put either on top of the sauce or buried underneath the cheese.",
    ingredients: "Dough, BBQ sauce, Chicken, Cilantro, Red Onions, Fontina Cheese"
  },
  {
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "Hawaiian",
    description: "Give your taste buds a tropical vacation with this amped up Hawaiian pizza. It's got tasty chicken, ham, pineapple AND green peppers.",
    ingredients: "Dough, Sauce, Cheese, Ham, Pineapple "
  },
  {
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdCUyMGxvdmVycyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "Meat Lovers",
    description: "Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.",
    ingredients: "Dough, Sauce, Cheese, Pepperoni, Sausage, Meatballs, Mushrooms"
  },
  {
    image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZydXR0aSUyMGRpJTIwbWFyZSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "Frutti di mare",
    description: "Pizza ai frutti di mare is a variety of Italian pizza topped with seafood such as scampi, squid, and mussels. Traditionally, the pizza is served without any cheese, as the seafood is placed on top of the dough and tomato sauce instead.",
    ingredients: "Dough, Sauce, Cheese, Tuna, Shrimp, Mussels"
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZ2llJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    name: "Veggie",
    description: "Pizza is officially a vegetable. This garden delight has all the fresh veggie toppings you love: mushrooms, red onions, green bell peppers, Roma tomatoes and black olives.",
    ingredients: "Dough, Sauce, Cheese, Red Peppers, Green Peppers, Onions, Mushrooms"
  }
])

puts "🍕 Adding pizzas to restaurants..."
Restaurant.all.each do |restaurant|
  rand(1..5).times do
    # get a random pizza
    pizza = Pizza.find(Pizza.pluck(:id).sample)

    RestaurantPizza.create!(restaurant_id: restaurant.id, pizza_id: pizza.id, price: rand(5..25))
  end
end

puts "🍕 Done seeding!"


# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
