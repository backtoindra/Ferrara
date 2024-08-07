// offlineItems.ts
export interface OfflineItem {
    id: number;
    item: string;
    ingredients: string;
    price: string;
  }
  
  export interface Category {
    name: string;
    items: OfflineItem[];
  }
  
  export const offlineItems: Category[] = [
    {
      name: "Starters",
      items: [
        { id: 1, item: "Mozzarella Sticks", ingredients: "Mozzarella, Breadcrumbs, Marinara Sauce", price: "$8.99" },
        { id: 2, item: "Bruschetta", ingredients: "Tomatoes, Basil, Garlic, Olive Oil, Baguette", price: "$9.99" },
        { id: 3, item: "Garlic Knots", ingredients: "Dough, Garlic, Parmesan, Olive Oil", price: "$4.29" },
        { id: 4, item: "French Fries", ingredients: "Potatoes, Salt, Oil", price: "$4.99" },
        { id: 5, item: "Jalapeño Poppers", ingredients: "Jalapeños, Cheese, Breadcrumbs", price: "$8.99" },
        { id: 6, item: "VA Mussels Marinara", ingredients: "Mussels, Marinara Sauce", price: "$11.99" },
        { id: 7, item: "Shrimp Platter", ingredients: "Shrimp, Fries", price: "$10.95" },
        { id: 8, item: "Chicken Tenders", ingredients: "Chicken, Breadcrumbs, Fries", price: "$10.99" },
        { id: 9, item: "Ferrara Special Calamari", ingredients: "Calamari, Jalapeños, Banana Peppers, Olives, Roasted Red Peppers, Onions, White Wine Sauce", price: "$14.99" },
        { id: 10, item: "Ferrara Special Wings (10)", ingredients: "Wings, Choice of Sauce", price: "$12.99" },
        { id: 11, item: "Ferrara Special Wings (20)", ingredients: "Wings, Choice of Sauce", price: "$24.99" },
        { id: 12, item: "Ferrara Special Wings (30)", ingredients: "Wings, Choice of Sauce", price: "$34.99" },
      ],
    },
    {
      name: "Salads",
      items: [
        { id: 13, item: "Caesar Salad", ingredients: "Romaine Lettuce, Caesar Dressing, Croutons", price: "$7.99" },
        { id: 14, item: "Greek Salad", ingredients: "Romaine, Tomatoes, Cucumbers, Olives, Pepperoncini, Feta Cheese", price: "$11.99" },
        { id: 15, item: "Chef Salad", ingredients: "Tossed Salad, Boiled Egg, Ham, Turkey, Cheese", price: "$11.99" },
        { id: 16, item: "Garden Salad", ingredients: "Lettuce, Tomatoes, Cucumbers, Onions, Olives", price: "$9.99" },
        { id: 17, item: "Antipasto Salad", ingredients: "Tossed Salad, Ham, Salami, Capicola, Provolone", price: "$14.99" },
        { id: 18, item: "Caribbean Salad", ingredients: "Romaine, Tomatoes, Onions, Bacon, Almonds, Pineapple, Avocado, Grilled Chicken", price: "$12.99" },
      ],
    },
    {
      name: "Soups",
      items: [
        { id: 19, item: "Pasta Fagioli", ingredients: "Pasta, Beans, Tomato Broth", price: "$3.99" },
        { id: 20, item: "Minestrone", ingredients: "Mixed Vegetables, Pasta, Tomato Broth", price: "$3.99" },
      ],
    },
    {
      name: "Flat Bread Pizza",
      items: [
        { id: 21, item: "Veggie", ingredients: "Assorted Vegetables, Mozzarella, Tomato Sauce", price: "$10.99" },
        { id: 22, item: "Buffalo Chicken", ingredients: "Buffalo Chicken, Mozzarella, Tomato Sauce", price: "$10.99" },
        { id: 23, item: "Cheesesteak", ingredients: "Steak, Mozzarella, Onions, Peppers, Tomato Sauce", price: "$10.99" },
        { id: 24, item: "Mediterranean", ingredients: "Feta, Olives, Spinach, Tomato, Mozzarella, Tomato Sauce", price: "$10.99" },
      ],
    },
    {
      name: "Gluten Free Pizza",
      items: [
        { id: 25, item: "Cheese", ingredients: "Mozzarella, Tomato Sauce", price: "$10.99" },
        { id: 26, item: "Pepperoni", ingredients: "Pepperoni, Mozzarella, Tomato Sauce", price: "$10.99" },
        { id: 27, item: "Veggie", ingredients: "Assorted Vegetables, Mozzarella, Tomato Sauce", price: "$10.99" },
      ],
    },
    {
      name: "Pizza",
      items: [
        { id: 28, item: "Cheese (Small 14\")", ingredients: "Mozzarella, Tomato Sauce", price: "$12.99" },
        { id: 29, item: "Cheese (Medium 16\")", ingredients: "Mozzarella, Tomato Sauce", price: "$14.99" },
        { id: 30, item: "Cheese (Large 18\")", ingredients: "Mozzarella, Tomato Sauce", price: "$16.99" },
        { id: 31, item: "Sicilian", ingredients: "Mozzarella, Tomato Sauce", price: "$17.99" },
      ],
    },
    {
      name: "Traditional Toppings",
      items: [
        { id: 32, item: "Pepperoni", ingredients: "", price: "$2.50" },
        { id: 33, item: "Sausage", ingredients: "", price: "$2.50" },
        { id: 34, item: "Mushrooms", ingredients: "", price: "$2.50" },
        { id: 35, item: "Onions", ingredients: "", price: "$2.50" },
        { id: 36, item: "Meatball", ingredients: "", price: "$2.50" },
        { id: 37, item: "Green Peppers", ingredients: "", price: "$2.50" },
        { id: 38, item: "Black Olives", ingredients: "", price: "$2.50" },
        { id: 39, item: "Anchovies", ingredients: "", price: "$2.50" },
        { id: 40, item: "Spinach", ingredients: "", price: "$2.50" },
        { id: 41, item: "Fresh Garlic", ingredients: "", price: "$2.50" },
        { id: 42, item: "Ham", ingredients: "", price: "$2.50" },
        { id: 43, item: "Broccoli", ingredients: "", price: "$2.50" },
        { id: 44, item: "Bacon", ingredients: "", price: "$2.50" },
        { id: 45, item: "Hot Peppers", ingredients: "", price: "$2.50" },
      ],
    },
    {
      name: "Gourmet Toppings",
      items: [
        { id: 46, item: "Roasted Red Peppers", ingredients: "", price: "$3.00" },
        { id: 47, item: "Pineapple", ingredients: "", price: "$3.00" },
        { id: 48, item: "Ground Beef", ingredients: "", price: "$3.00" },
        { id: 49, item: "Feta Cheese", ingredients: "", price: "$3.00" },
        { id: 50, item: "Ricotta Cheese", ingredients: "", price: "$3.00" },
      ],
    },
    {
      name: "Specialty Pizza",
      items: [
        { id: 51, item: "Buffalo Chicken", ingredients: "Buffalo Chicken, Mozzarella, Tomato Sauce", price: "Varies" },
        { id: 52, item: "BBQ Chicken", ingredients: "BBQ Chicken, Mozzarella, Tomato Sauce", price: "Varies" },
        { id: 53, item: "Bianca", ingredients: "Mozzarella, Ricotta, Garlic, Olive Oil", price: "Varies" },
        { id: 54, item: "Ferrara Special", ingredients: "Assorted Meats, Vegetables, Mozzarella, Tomato Sauce", price: "Varies" },
        { id: 55, item: "Meat Lovers", ingredients: "Assorted Meats, Mozzarella, Tomato Sauce", price: "Varies" },
      ],
    },
    {
      name: "Specialty Rolls",
      items: [
        { id: 56, item: "Veggie Roll", ingredients: "Assorted Vegetables, Mozzarella", price: "$10.99" },
        { id: 57, item: "Pepperoni Roll", ingredients: "Pepperoni, Mozzarella", price: "$10.99" },
        { id: 58, item: "Chicken Roll", ingredients: "Chicken, Mozzarella", price: "$10.99" },
        { id: 59, item: "Buffalo Chicken Roll", ingredients: "Buffalo Chicken, Mozzarella", price: "$10.99" },
        { id: 60, item: "Sausage Roll", ingredients: "Sausage, Mozzarella", price: "$10.99" },
      ],
    },
    {
      name: "Stromboli & Calzone",
      items: [
        { id: 61, item: "Cheese Stromboli", ingredients: "Cheese, Tomato Sauce", price: "$10.99" },
        { id: 62, item: "Stromboli", ingredients: "Ham, Pepperoni, Sausage, Mushrooms, Onions, Green Peppers, Cheese, Tomato Sauce", price: "$11.99" },
        { id: 63, item: "Veggie Stromboli", ingredients: "Assorted Vegetables, Cheese, Tomato Sauce", price: "$11.99" },
        { id: 64, item: "Cheese Calzone", ingredients: "Cheese, Tomato Sauce", price: "$10.99" },
      ],
    },
    {
      name: "Chicken",
      items: [
        { id: 65, item: "Chicken Parmigiana", ingredients: "Fried Chicken Breast, Tomato Sauce, Mozzarella, Spaghetti", price: "$17.99" },
        { id: 66, item: "Chicken Marsala", ingredients: "Chicken, Butter Sauce, Marsala Wine, Mushrooms, Spaghetti", price: "$17.99" },
        { id: 67, item: "Chicken Francese", ingredients: "Egg Battered Chicken, Lemon Butter Sauce, Spaghetti", price: "$18.99" },
        { id: 68, item: "Chicken Piccata", ingredients: "Chicken, Butter, Lemon, Capers, Spaghetti", price: "$18.99" },
        { id: 69, item: "Chicken Florentine", ingredients: "Chicken, White Wine Sauce, Spinach, Mozzarella, Spaghetti", price: "$18.99" },
        { id: 70, item: "Chicken Cacciatore", ingredients: "Chicken, Mushrooms, Peppers, Onions, Light Marinara Sauce, Spaghetti", price: "$18.99" },
        { id: 71, item: "Chicken Nicola", ingredients: "Breaded Chicken Milanese, Tomato Bruschetta, Fresh Mozzarella, Spaghetti", price: "$18.99" },
        { id: 72, item: "Chicken Julien", ingredients: "Chicken, Artichoke Hearts, Garlic, Onions, Roasted Peppers, Olives, White Wine Sauce", price: "$18.99" },
        { id: 73, item: "Chicken Jessica", ingredients: "Chicken, Onions, Bacon, Garlic, Tomatoes, White Wine Sauce", price: "$18.99" },
        { id: 74, item: "Chicken & Shrimp Ferrara", ingredients: "Chicken, Shrimp, Spinach, Tomatoes, White Wine, Provolone", price: "$20.99" },
      ],
    },
    {
      name: "Veal",
      items: [
        { id: 75, item: "Veal Marsala", ingredients: "Veal, Butter Sauce, Marsala Wine, Mushrooms, Spaghetti", price: "$19.99" },
        { id: 76, item: "Veal Piccata", ingredients: "Veal, Butter, Lemon, Capers, Spaghetti", price: "$19.99" },
        { id: 77, item: "Veal Parmigiana", ingredients: "Breaded Veal, Tomato Sauce, Mozzarella, Spaghetti", price: "$19.99" },
      ],
    },
    {
      name: "Seafood",
      items: [
        { id: 78, item: "Mussels Marinara", ingredients: "Mussels, Marinara Sauce", price: "$16.99" },
        { id: 79, item: "Mussels Posillipo", ingredients: "Mussels, Garlic, White Wine Sauce", price: "$16.99" },
        { id: 80, item: "Frutti di Mare", ingredients: "Shrimp, Clams, Calamari, Mussels, Light Marinara Sauce", price: "$24.99" },
        { id: 81, item: "Shrimp Scampi", ingredients: "Shrimp, Garlic, White Wine, Butter Sauce", price: "$18.99" },
        { id: 82, item: "Shrimp Marinara", ingredients: "Shrimp, Marinara Sauce", price: "$18.99" },
        { id: 83, item: "Shrimp alla Ferrara", ingredients: "Shrimp, Fresh Tomatoes, Garlic, Artichoke Hearts, White Wine Sauce", price: "$20.99" },
      ],
    },
    {
      name: "Baked Pastas",
      items: [
        { id: 84, item: "Lasagna", ingredients: "Lasagna, Tomato Sauce, Cheese", price: "$14.99" },
        { id: 85, item: "Manicotti", ingredients: "Manicotti, Tomato Sauce, Cheese", price: "$14.99" },
        { id: 86, item: "Baked Ziti", ingredients: "Ziti, Tomato Sauce, Cheese", price: "$14.99" },
        { id: 87, item: "Stuffed Shells", ingredients: "Stuffed Shells, Tomato Sauce, Cheese", price: "$14.99" },
        { id: 88, item: "Baked Ravioli", ingredients: "Ravioli, Tomato Sauce, Cheese", price: "$14.99" },
        { id: 89, item: "Pasta Trio", ingredients: "Lasagna, Stuffed Shell, Manicotti", price: "$16.99" },
        { id: 90, item: "Pasta Platter", ingredients: "Baked Ziti, Manicotti, Ravioli", price: "$16.99" },
      ],
    },
    {
      name: "Side Orders",
      items: [
        { id: 91, item: "Meatballs", ingredients: "Meatballs", price: "$5.25" },
        { id: 92, item: "Spaghetti", ingredients: "Spaghetti", price: "$4.99" },
        { id: 93, item: "Sautéed Broccoli", ingredients: "Broccoli, Olive Oil", price: "$4.99" },
        { id: 94, item: "Spinach", ingredients: "Spinach", price: "$5.25" },
        { id: 95, item: "Fettuccine Alfredo", ingredients: "Fettuccine, Alfredo Sauce", price: "$5.99" },
        { id: 96, item: "Side of Alfredo Sauce", ingredients: "Alfredo Sauce", price: "$5.99" },
        { id: 97, item: "Sautéed Spinach", ingredients: "Spinach, Olive Oil", price: "$4.99" },
        { id: 98, item: "Garden Side Salad", ingredients: "Lettuce, Tomatoes, Cucumbers, Onions, Olives", price: "$4.99" },
        { id: 99, item: "Caesar Side Salad", ingredients: "Romaine Lettuce, Caesar Dressing, Croutons", price: "$4.99" },
      ],
    },
    {
      name: "Kids Menu",
      items: [
        { id: 100, item: "Spaghetti & Meatballs", ingredients: "Spaghetti, Meatballs", price: "$6.99" },
        { id: 101, item: "Ravioli", ingredients: "Ravioli", price: "$6.99" },
        { id: 102, item: "Chicken Tenders with Fries", ingredients: "Chicken Tenders, Fries", price: "$6.99" },
        { id: 103, item: "Chicken Parm", ingredients: "Chicken, Tomato Sauce, Cheese", price: "$6.99" },
        { id: 104, item: "Kids Pizza", ingredients: "Pizza", price: "$6.99" },
      ],
    },
    {
      name: "Hot Sandwiches",
      items: [
        { id: 105, item: "Meatball Parmigiana", ingredients: "Meatballs, Parmesan, Tomato Sauce", price: "$11.99" },
        { id: 106, item: "Eggplant Parmigiana", ingredients: "Eggplant, Parmesan, Tomato Sauce", price: "$11.99" },
        { id: 107, item: "Grilled Chicken", ingredients: "Chicken, Lettuce, Tomato, Onion", price: "$11.99" },
        { id: 108, item: "Sausage Peppers & Onions", ingredients: "Sausage, Peppers, Onions, Tomato Sauce", price: "$11.99" },
        { id: 109, item: "Chicken Parmigiana", ingredients: "Chicken, Parmesan, Tomato Sauce", price: "$11.99" },
        { id: 110, item: "Steak Special", ingredients: "Steak, Peppers, Onions, Mushrooms, Mozzarella", price: "$12.99" },
      ],
    },
    {
      name: "Cold Subs",
      items: [
        { id: 111, item: "Ham & Cheese", ingredients: "Ham, Cheese, Lettuce, Tomato, Onion", price: "$8.99" },
        { id: 112, item: "Turkey & Cheese", ingredients: "Turkey, Cheese, Lettuce, Tomato, Onion", price: "$8.99" },
        { id: 113, item: "Salami & Cheese", ingredients: "Salami, Cheese, Lettuce, Tomato, Onion", price: "$8.99" },
        { id: 114, item: "The Godfather", ingredients: "Ham, Salami, Pepperoni, Provolone, Lettuce, Tomato, Onion", price: "$11.99" },
      ],
    },
    {
      name: "Beverages",
      items: [
        { id: 115, item: "Soda", ingredients: "Various Flavors", price: "$2.60" },
      ],
    },
    {
      name: "Desserts",
      items: [
        { id: 116, item: "Cannoli", ingredients: "Pastry Shell, Sweetened Ricotta", price: "$4.50" },
        { id: 117, item: "Cheesecake", ingredients: "Cheesecake", price: "$5.99" },
        { id: 118, item: "Assorted Cakes Slice", ingredients: "Various Flavors", price: "$5.99" },
        { id: 119, item: "Tiramisu", ingredients: "Espresso-Soaked Ladyfingers, Mascarpone", price: "$5.99" },
      ],
    },
    {
      name: "Lunch Specials",
      items: [
        { id: 120, item: "Grilled Chicken Sandwich", ingredients: "Chicken, Lettuce, Tomatoes, Onions", price: "$8.99" },
        { id: 121, item: "Grilled Chicken Caesar Wrap", ingredients: "Chicken, Caesar Dressing, Lettuce, Tomato", price: "$8.99" },
        { id: 122, item: "Turkey & Cheese Wrap", ingredients: "Turkey, Cheese, Lettuce, Tomato", price: "$8.99" },
        { id: 123, item: "Steak Onions & Cheese Wrap", ingredients: "Steak, Onions, Cheese", price: "$9.50" },
      ],
    },
    {
      name: "Pizza By The Slice",
      items: [
        { id: 124, item: "Cheese Slice", ingredients: "Cheese, Tomato Sauce", price: "$2.75" },
        { id: 125, item: "Topping", ingredients: "", price: "$0.50" },
      ],
    },
    {
      name: "Entrées",
      items: [
        { id: 126, item: "Chicken Marsala", ingredients: "Chicken, Marsala Wine, Mushrooms", price: "$11.99" },
        { id: 127, item: "Chicken Piccata", ingredients: "Chicken, Lemon, Capers", price: "$11.99" },
        { id: 128, item: "Shrimp Scampi", ingredients: "Shrimp, Garlic, White Wine, Butter", price: "$12.99" },
        { id: 129, item: "Shrimp Marinara", ingredients: "Shrimp, Marinara Sauce", price: "$12.99" },
        { id: 130, item: "Veal Parmigiana", ingredients: "Veal, Tomato Sauce, Mozzarella", price: "$11.99" },
      ],
    },
  ];
  
  