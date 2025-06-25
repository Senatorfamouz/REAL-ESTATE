import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  // Sample data for the reviews over time chart
  const reviewData = [
    { name: 'Jan', reviews: 400 },
    { name: 'Feb', reviews: 300 },
    { name: 'Mar', reviews: 600 },
    { name: 'Apr', reviews: 800 },
    { name: 'May', reviews: 500 },
    { name: 'Jun', reviews: 900 },
    { name: 'Jul', reviews: 1000 },
  ];

  // Top performing properties data
  const topProperties = [
    { name: 'Ikoyi VI, Lagos', value: 18, trend: 'up' },
    { name: 'Magodo, Lagos', value: 23, trend: 'up' },
    { name: 'Eko Atlantic, Lagos', value: 15, trend: 'up' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reviews Over Time Section */}
        <div className="shadow-sm rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Reviews over time</h2>
            <div className="text-right">
              <p className="text-2xl font-bold">0.9%</p>
              <p className="text-sm text-gray-500">Than last Day</p>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={reviewData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="reviews" 
                  stroke="#3b82f6" 
                  fill="#93c5fd" 
                  fillOpacity={0.4} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performing Properties Section */}
        <div className="shadow-sm rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Top performing properties</h2>
          <div className="space-y-4">
            {topProperties.map((property, index) => (
              <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{property.name}</h3>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{property.value}</span>
                  {property.trend === 'up' ? (
                    <span className="text-green-500">↑</span>
                  ) : (
                    <span className="text-red-500">↓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;