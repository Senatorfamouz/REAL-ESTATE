import React from "react";
import { LuEye } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiSafe2Line } from "react-icons/ri";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbCurrencyNaira, TbSquareKey } from "react-icons/tb";
import List from "./List"

const PropertyList = () => {
  const summaryCards = [
    {
      title: "Total Incomes",
      value: "$127,812.09",
      description: "↑ 34.4% vs last month",
      icon: <RiSafe2Line size={40} className="text-purple-600" />,
      bg: "bg-purple-100",
      changeColor: "text-green-500",
    },
    {
      title: "Total Properties",
      value: "15,780 Unit",
      description: "↓ 8.5% vs last month",
      icon: <FaBuildingColumns size={40} className="text-red-500" />,
      bg: "bg-red-100",
      changeColor: "text-red-500",
    },
    {
      title: "Unit Sold",
      value: "893 Unit",
      description: "↑ 17% vs last month",
      icon: <TbCurrencyNaira size={40} className="text-green-500" />,
      bg: "bg-green-100",
      changeColor: "text-green-500",
    },
    {
      title: "Unit Rent",
      value: "459 Unit",
      description: "↓ 12% vs last month",
      icon: <TbSquareKey size={40} className="text-pink-500" />,
      bg: "bg-pink-100",
      changeColor: "text-red-500",
    },
  ];
    ////


  return (
    <div className="p-4 space-y-8">
      {/* Header */}
      <div className="px-4 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
        <h2 className="text-lg font-semibold text-gray-800">Property List</h2>
        <p className="text-sm text-gray-500">
          Real Estate <span className="text-gray-800">Listing List</span>
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {summaryCards.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-amber-50 p-5 shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-gray-600 text-sm font-medium">{item.title}</h4>
                <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${item.bg}`}>{item.icon}</div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className={`text-xs font-medium ${item.changeColor}`}>
                {item.description}
              </p>
              <button className="text-sm text-blue-500 hover:underline">
                See Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Property List */}
      <List />
      
    </div>
  );
};

export default PropertyList;