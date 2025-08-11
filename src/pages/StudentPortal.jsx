import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "$/components/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "$/components/Card";
import { useToast, ToastContainer } from "$/components/Toast";
import { supabase } from "$/integrations/supabase/client";
import { ShoppingCart, MapPin, Clock, Plus, Minus, Star, Award } from "react-feather";
import yurishMenu from "$/data/menus/yurish.json";
import evergreenMenu from "$/data/menus/evergreen.json";
import zingerMenu from "$/data/menus/zinger.json";

const StudentPortal = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('studentCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();
  const { toasts, showToast, removeToast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/StudentAuth");
        return;
      }
      setUser(user);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push("/StudentAuth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          stall:stalls(name, floor_number)
        `)
        .eq('is_available', true);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      showToast(
        { title: "Error", description: "Failed to load products" },
        { type: "error" }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('studentCart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, size = null) => {
    setCart(prev => {
      const existingItemIndex = prev.findIndex(item => 
        item.product.id === product.id && item.size === size
      );
      
      if (existingItemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      }
      
      return [...prev, { 
        product, 
        quantity: 1, 
        size,
        addedAt: new Date().toISOString()
      }];
    });
    
    showToast({
      title: "Added to cart",
      description: `${product.name}${size ? ` (${size})` : ''} added to your cart`,
    });
  };

  const removeFromCart = (productId, size = null) => {
    setCart(prev => {
      const existingItem = prev.find(item => 
        item.product.id === productId && item.size === size
      );
      
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(item =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter(item => 
        !(item.product.id === productId && item.size === size)
      );
    });
  };

  const getCartItemQuantity = (productId, size = null) => {
    const item = cart.find(item => 
      item.product.id === productId && item.size === size
    );
    return item ? item.quantity : 0;
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = item.size && item.product.sizes?.[item.size] 
        ? item.product.sizes[item.size] 
        : item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'snacks': 'bg-orange-100 text-orange-800',
      'beverages': 'bg-blue-100 text-blue-800',
      'sandwich': 'bg-green-100 text-green-800',
      'burger': 'bg-red-100 text-red-800',
      'salad': 'bg-emerald-100 text-emerald-800',
      'healthy': 'bg-teal-100 text-teal-800',
      'wrap': 'bg-purple-100 text-purple-800',
      'indian': 'bg-yellow-100 text-yellow-800',
      'south-indian': 'bg-amber-100 text-amber-800',
      'roll': 'bg-indigo-100 text-indigo-800',
      'dessert': 'bg-pink-100 text-pink-800',
      'coffee': 'bg-brown-100 text-brown-800',
      'pasta': 'bg-violet-100 text-violet-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">QueueFree Student Portal</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button variant="secondary" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.length})
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </div>
            <Button variant="ghost" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Browse products from all canteen stalls and place your order</p>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <Card className="mb-8 border-blue-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cart.map((item, index) => {
                  const price = item.size && item.product.sizes?.[item.size] 
                    ? item.product.sizes[item.size] 
                    : item.product.price;
                  
                  return (
                    <div key={`${item.product.id}-${item.size || 'regular'}-${index}`} 
                         className="flex justify-between items-start border-b pb-2">
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium">{item.product.name}</div>
                        {item.size && (
                          <div className="text-xs text-gray-500">Size: {item.size}</div>
                        )}
                        <div className="flex items-center mt-1">
                          <button 
                            onClick={() => removeFromCart(item.product.id, item.size)}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item.product, item.size)}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{(price * item.quantity).toFixed(2)}</div>
                        <div className="text-xs text-gray-500">₹{price.toFixed(2)} each</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between items-center font-bold text-lg border-t border-gray-200 pt-2">
                <span className="text-gray-900">Total:</span>
                <span className="text-blue-600">₹{getTotalAmount().toFixed(2)}</span>
              </div>
              <Button 
                variant="primary" 
                className="w-full mt-4"
                onClick={() => {
                  if (cart.length === 0) {
                    showToast({
                      title: "Your cart is empty",
                      description: "Add some items to your cart before checking out",
                      type: "warning"
                    });
                    return;
                  }
                  
                  // Here you would typically redirect to a checkout page
                  // For now, we'll just show a success message
                  showToast({
                    title: "Checkout initiated",
                    description: `Order placed successfully! Total: ₹${getTotalAmount().toFixed(2)}`,
                    type: "success"
                  });
                  
                  // Clear the cart after successful checkout
                  setCart([]);
                }}
              >
                Proceed to Checkout (₹{getTotalAmount().toFixed(2)})
              </Button>
            </CardContent>
          </Card>
        )}

        {/* vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { id: 1, name: "Yurish Food", cuisine: "Juice center", rating: 4.5, prepTime: "10–15 min", starProducts: ["Mango Shake", "Fresh Lime"], crowdFav: "Mango Shake" , image: "/banner1.png", menu: yurishMenu},
            { id: 2, name: "Evergreen", cuisine: "Juice & Health Drinks", rating: 4.6, prepTime: "5–10 min", starProducts: ["ABC Booster", "Rose milk"], crowdFav: "ABC Booster" , image: "/banner2.png", menu: evergreenMenu},
            { id: 3, name: "Zinger", cuisine: "Burger & Chicken", rating: 4.7, prepTime: "5–10 min", starProducts: ["Loaded Chicken", "Tender Strips"], crowdFav: "Loaded Chicken" , image: "/banner3.png" , menu: zingerMenu},
          ].map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden border-gray-200">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={vendor.image}
                  alt={`${vendor.name} banner`}
                  fill
                  priority={false}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center justify-between">
                  <span>{vendor.name}</span>
                  <span className="text-sm font-medium text-blue-600">★ {vendor.rating}</span>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {vendor.cuisine}  
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2">
                  <ul className="space-y-1">
                    {vendor.starProducts?.slice(0, 2).map((p, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>{p}</span>
                        {vendor.crowdFav === p && (
                          <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                            <Award className="h-3 w-3" />
                            Crowd's fav
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{vendor.prepTime}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setActiveMenu(vendor.menu);
                      setMenuOpen(true);
                    }}
                  >
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Menu Modal */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)}></div>
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between px-5 py-3 border-b shrink-0">
                <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setMenuOpen(false)}>✕</button>
              </div>
              <div className="p-5 overflow-y-auto flex-1">
                {activeMenu ? (
                  Object.entries(activeMenu).map(([category, items]) => (
                    <div key={category} className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">{category}</div>
                      <div className="space-y-2">
                        {Object.entries(items).map(([itemName, priceOrSizes]) => {
                          // Check if the value is a number (Evergreen format) or an object (Yurish format)
                          const isSimpleFormat = typeof priceOrSizes === 'number';
                          
                          return (
                            <div key={itemName} className="flex items-center justify-between border rounded-md p-3">
                              <div className="text-gray-800 text-sm">{itemName}</div>
                              <div className="text-sm text-gray-700 flex items-center gap-4">
                                {isSimpleFormat ? (
                                  <div className="flex items-center gap-4">
                                    <span>₹{priceOrSizes}</span>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart({ id: `${itemName}-regular`, name: itemName, price: priceOrSizes });
                                      }}
                                      className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                      Add
                                    </button>
                                  </div>
                                ) : (
                                  <div className="flex flex-col gap-2">
                                    {Object.entries(priceOrSizes).map(([size, price]) => (
                                      <div key={size} className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1">
                                          <span className="text-gray-500">{size}</span> 
                                          ₹{price}
                                        </span>
                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart({ 
                                              id: `${itemName}-${size.toLowerCase()}`,
                                              name: itemName,
                                              price,
                                              sizes: priceOrSizes
                                            }, size);
                                          }}
                                          className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-600">Menu not available.</div>
                )}
              </div>
              <div className="px-5 py-3 border-t flex justify-end shrink-0">
                <Button variant="primary" onClick={() => setMenuOpen(false)}>Close</Button>
              </div>
            </div>
          </div>
        )}

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        )}
    </div>
    </div>
  );
};

export default StudentPortal;