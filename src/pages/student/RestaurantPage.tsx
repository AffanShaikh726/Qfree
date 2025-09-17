import { useState } from 'react';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { Menu } from '@/components/restaurant/Menu';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample menu data - this would come from your API in a real app
const menuData = {
  "Drinks": {
    "Mocktails": [
      { "name": "Virgin Mojito", "price": "70" },
      { "name": "Green Apple Mojito", "price": "70" },
      { "name": "Blue Lagoon", "price": "70" },
      { "name": "Strawberry", "price": "70" },
      { "name": "Blueberry", "price": "80" },
      { "name": "Red Wine Sangria", "price": "90" },
      { "name": "Passion Fruit", "price": "90" },
      { "name": "Mango Berry Blast", "price": "90" },
      { "name": "Strawberry Mango Blast", "price": "100" },
      { "name": "Rainbow", "price": "100" }
    ],
    "Milk Shakes": [
      { "name": "Nutella Brownie Crumble", "price": "120" },
      { "name": "Belgium Chocolate", "price": "110" },
      { "name": "Cold Coffee Popeye", "price": "110" },
      { "name": "Triple Choco Chips", "price": "110" },
      { "name": "Crunchy Butter Scotch", "price": "70" },
      { "name": "Red Velvet", "price": "70" },
      { "name": "Brownie", "price": "60" },
      { "name": "Oreo", "price": "60" },
      { "name": "Kitkat", "price": "60" },
      { "name": "Chocolate", "price": "60" },
      { "name": "Black Current", "price": "60" },
      { "name": "Strawberry", "price": "60" },
      { "name": "Mango", "price": "60" },
      { "name": "Green Apple", "price": "60" },
      { "name": "Water Melon", "price": "60" }
    ],
    "Smoothies": [
      {
        "name": "Boba Tea & Boba Shakes",
        "variations": [
          { "name": "Lemon", "price": "100" },
          { "name": "Peach", "price": "120" },
          { "name": "Blueberry", "price": "150" },
          { "name": "Green Apple", "price": "150" },
          { "name": "Strawberry", "price": "150" },
          { "name": "Lychee", "price": "150" },
          { "name": "Mango", "price": "150" },
          { "name": "Coffee", "price": "150" }
        ]
      }
    ]
  },
  "Food": {
    "Sandwich": [
      { "name": "Veg Aloo Tikki", "price": "100" },
      { "name": "Cheese & Corn", "price": "120" },
      { "name": "Paneer", "price": "130" },
      { "name": "Egg", "price": "80" },
      { "name": "Chicken", "price": "150" }
    ],
    "Italian Pasta": [
      { "name": "Cheesy White Sauce", "price": "120" },
      { "name": "Tangy Red Sauce", "price": "120" },
      { "name": "Mixed Sauce", "price": "130" },
      { "name": "Panner", "price": "130" }
    ]
  },
  "Desserts": {
    "Cones": [
      { "name": "Vanilla", "price": "50" },
      { "name": "Strawberry", "price": "60" },
      { "name": "Chocolate", "price": "60" },
      { "name": "Oreo", "price": "60" },
      { "name": "Butterscotch", "price": "60" },
      { "name": "Choco chips", "price": "60" },
      { "name": "Blueberry", "price": "60" }
    ],
    "Sundaes": [
      { "name": "Nutty Brownie Sundae", "price": "70" },
      { "name": "Choco Fudge Sundae", "price": "80" },
      { "name": "Oreo Sundae", "price": "75" },
      { "name": "Kit Kat Sundae", "price": "80" },
      { "name": "Brownie Sundae", "price": "80" }
    ]
  }
};

export function RestaurantPage() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const restaurant = {
    name: "Sundays",
    rating: 4.5,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  };

  const handleViewMenu = () => {
    setShowMenu(true);
  };

  const handleBack = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={`${restaurant.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center px-4">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold line-clamp-1">
              {restaurant.name}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                {restaurant.rating}
              </span>
              <span className="mx-2">•</span>
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {showMenu ? (
          <Menu 
            menu={menuData} 
            restaurantName={restaurant.name}
          />
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Welcome to {restaurant.name}</h2>
              <p className="text-muted-foreground">Explore our delicious menu</p>
            </div>
            <Button 
              onClick={handleViewMenu}
              className="w-full py-6 text-lg"
            >
              View Full Menu
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
