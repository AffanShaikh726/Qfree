import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    // In a real app, you would navigate to a checkout page
    // For now, we'll just clear the cart and show a success message
    clearCart();
    alert('Order placed successfully!');
    navigate('/student');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="text-gray-500 mb-4">Your cart is empty</div>
        <Button onClick={() => navigate('/student')}>Browse Restaurants</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Order</h2>
        <span className="text-gray-600">{getTotalItems()} items</span>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border-b">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center">{item.quantity}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-bold">₹{getTotalPrice()}</span>
        </div>
        
        <div className="space-y-2">
          <Button 
            className="w-full"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate(-1)}
          >
            Continue Browsing
          </Button>
        </div>
      </div>
    </div>
  );
}
