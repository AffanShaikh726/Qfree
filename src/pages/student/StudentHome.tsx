import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample restaurant data - in a real app, this would come from an API
const restaurants = [
  {
    id: 'sundays',
    name: 'Sundays',
    rating: 4.5,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  // Add more restaurants as needed
];

export function StudentHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewMenu = (restaurantId: string) => {
    navigate(`/student/restaurant?id=${restaurantId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-6">Order Food</h1>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for restaurants and food"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Popular Restaurants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="w-full">
              <RestaurantCard
                name={restaurant.name}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                image={restaurant.image}
                onViewMenu={() => handleViewMenu(restaurant.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
