import { Star, Clock, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/use-cart';

interface RestaurantCardProps {
  name: string;
  rating: number;
  deliveryTime: string;
  image: string;
  onViewMenu: () => void;
}

export function RestaurantCard({
  name,
  rating,
  deliveryTime,
  image,
  onViewMenu,
}: RestaurantCardProps) {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
          <Heart className="h-5 w-5 text-red-500" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{deliveryTime} • Customer Favorites</span>
        </div>
        
        <div className="mt-4 flex justify-between items-center space-x-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onViewMenu}
          >
            View Menu
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="relative"
            onClick={() => navigate('/student/cart')}
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
