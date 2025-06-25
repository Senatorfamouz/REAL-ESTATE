import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { LuEye } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import List from './List';
import Chart from './Chart';

const AnalyticsCard = ({ title, value, trendPercentage, timePeriod }) => {
  return (
    <div className="bg-white text-gray-700 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="flex items-center text-green-500">
          <FiTrendingUp className="mr-1" />
          <span className="text-sm">{trendPercentage}</span>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-400">
        {timePeriod.split('').map((day, index) => (
          <span key={index} className="mx-0.5">{day}</span>
        ))}
      </div>
    </div>
  );
};



const AnalyticsDashboard = () => {
  const analyticsData = [
    {
      title: "No. of Properties",
      value: "2,854",
      trendPercentage: "+73.4%",
      timePeriod: "$N T W T F S"
    },
    {
      title: "Regl. Agents",
      value: "705",
      trendPercentage: "+76.89%",
      timePeriod: "$N T W T F S"
    },
    {
      title: "Customers",
      value: "9,431",
      trendPercentage: "+48%",
      timePeriod: "$M T W T F S"
    },
    {
      title: "Revenue",
      value: "$78.3M",
      trendPercentage: "+8.76%",
      timePeriod: "$M T W T F S"
    }
  ];

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((item, index) => (
            <AnalyticsCard
              key={index}
              title={item.title}
              value={item.value}
              trendPercentage={item.trendPercentage}
              timePeriod={item.timePeriod}
            />
          ))}
        </div>
      </div>

      {/* Actions Section */}
      <div className="p-6">
        <h2 className="text-[18px] font-semibold mb-6">Live Property chart</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <Chart />
        </div>
      </div>
      

    
     
      {/* Table Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Property List</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          
          <List />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;