import { useCart } from '@/hooks/use-cart';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface MenuItem {
  name: string;
  price?: string | number;
  variations?: Array<{ name: string; price: string | number }>;
}

interface MenuSection {
  [key: string]: MenuItem[];
}

interface MenuProps {
  menu: {
    [key: string]: MenuSection;
  };
  restaurantName: string;
}

export function Menu({ menu, restaurantName }: MenuProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const handleAddToCart = (item: MenuItem, category: string, variation?: { name: string; price: string | number }) => {
    if ((!item.price && !variation) || (variation && !variation.price)) {
      console.error('Cannot add item to cart: No price available');
      return;
    }
    
    const itemName = variation ? `${item.name} (${variation.name})` : item.name;
    const itemId = `${category}-${itemName}`;
    const price = variation ? Number(variation.price) : Number(item.price || 0);
    
    addToCart({
      id: itemId,
      name: itemName,
      price,
      category,
    });
    
    // Update quantity display
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const handleDecreaseQuantity = (item: MenuItem, category: string, variation?: { name: string; price: string | number }) => {
    const itemName = variation ? `${item.name} (${variation.name})` : item.name;
    const itemId = `${category}-${itemName}`;
    
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[itemId] || 0) - 1);
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const getQuantity = (item: MenuItem, category: string, variation?: { name: string; price: string | number }) => {
    const itemName = variation ? `${item.name} (${variation.name})` : item.name;
    const itemId = `${category}-${itemName}`;
    return quantities[itemId] || 0;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{restaurantName} Menu</h1>
      
      {Object.entries(menu).map(([category, sections]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{category}</h2>
          
          {Object.entries(sections).map(([sectionName, items]) => (
            <div key={sectionName} className="mb-8">
              <button
                onClick={() => toggleSection(sectionName)}
                className="flex justify-between items-center w-full text-left text-xl font-medium mb-4 p-2 hover:bg-gray-50 rounded-lg"
              >
                <span>{sectionName}</span>
                <span className="text-gray-500">
                  {expandedSections[sectionName] ? '−' : '+'}
                </span>
              </button>
              
              {expandedSections[sectionName] && (
                <div className="space-y-4 pl-4">
                  {items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="border-b pb-4 mb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.variations ? (
                            <div className="mt-2 space-y-2">
                              {item.variations.map((variation, vIndex) => {
                                const quantity = getQuantity(item, sectionName, variation);
                                return (
                                  <div key={`${variation.name}-${vIndex}`} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                    <span className="text-sm">{variation.name} - ₹{variation.price}</span>
                                    <div className="flex items-center space-x-2">
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => handleDecreaseQuantity(item, sectionName, variation)}
                                        disabled={quantity === 0}
                                      >
                                        <Minus className="h-3 w-3" />
                                      </Button>
                                      <span className="w-6 text-center">{quantity}</span>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => handleAddToCart(item, sectionName, variation)}
                                      >
                                        <Plus className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-medium">₹{item.price}</span>
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => handleDecreaseQuantity(item, sectionName)}
                                  disabled={!getQuantity(item, sectionName)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-6 text-center">{getQuantity(item, sectionName)}</span>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => handleAddToCart(item, sectionName)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
