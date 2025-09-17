import React from 'react';

const Orders = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Order #12345</h3>
              <p className="text-sm text-muted-foreground">Placed on September 15, 2023</p>
            </div>
            <span className="px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
              Preparing
            </span>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Order #12344</h3>
              <p className="text-sm text-muted-foreground">Delivered on September 10, 2023</p>
            </div>
            <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
              Delivered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
