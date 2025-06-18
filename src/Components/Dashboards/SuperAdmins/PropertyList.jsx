import React from "react";
import { LuEye } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiSafe2Line } from "react-icons/ri";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbCurrencyNaira, TbSquareKey } from "react-icons/tb";

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

  const properties = [
    {
      name: "Dvilla Residences Batu",
      size: "1400ft",
      type: "Residences",
      status: "Rent",
      bedrooms: 5,
      location: "France",
      price: "$8,930.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-1-BQ0X_fIz.jpg",
    },
    {
      name: "PIK Villa House",
      size: "1700ft",
      type: "Residences",
      status: "Sold",
      bedrooms: 6,
      location: "Bermuda",
      price: "$60,691.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-2-DzlMFwfd.jpg",
    },
    {
      name: "Tungis Luxury",
      size: "1200ft",
      type: "Residences",
      status: "Sale",
      bedrooms: 4,
      location: "Australia",
      price: "$70,245.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-3-CYB7E841.jpg",
    },
    {
      name: "Luxury Apartment",
      size: "900ft",
      type: "Residences",
      status: "Rent",
      bedrooms: 2,
      location: "France",
      price: "$5,825.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-4-BayuI12Z.jpg",
    },
    {
      name: "Weekend Villa MBH",
      size: "1900ft",
      type: "Residences",
      status: "Sale",
      bedrooms: 5,
      location: "U.S.A",
      price: "$90,674.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-5-C9ps3IeY.jpg",
    },
    {
      name: "Luxury Penthouse",
      size: "2000ft",
      type: "Residences",
      status: "Rent",
      bedrooms: 7,
      location: "Greenland",
      price: "$10,500.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-6-Dklg0-Jq.jpg",
    },
    {
      name: "Ojiag Duplex House",
      size: "1300ft",
      type: "Residences",
      status: "Sold",
      bedrooms: 3,
      location: "France",
      price: "$75,341.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-7-B5lvQNhp.jpg",
    },
    {
      name: "Luxury Bungalow Villas",
      size: "1200ft",
      type: "Residences",
      status: "Sale",
      bedrooms: 4,
      location: "France",
      price: "$54,230.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-8-BYeoXDXu.jpg",
    },
    {
      name: "Duplex Bungalow",
      size: "1800ft",
      type: "Residences",
      status: "Rent",
      bedrooms: 3,
      location: "Canada",
      price: "$14,564.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-9-C3rr_g2o.jpg",
    },
    {
      name: "Woodis B. Apartment",
      size: "1700ft",
      type: "Residences",
      status: "Sold",
      bedrooms: 4,
      location: "U.S.A",
      price: "$34,341.00",
      image: "https://themes.techzaa.in/lahomes_n/assets/p-10-BDuHOjBg.jpg",
    },
  ];

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

      {/* Table Section */}
      <div className="p-4 bg-white shadow rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Properties List</h2>
          <button className="text-sm border px-3 py-1 rounded-md text-gray-600">
            This Month
          </button>
        </div>
        <table className="min-w-[800px] w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-500">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Properties Photo & Name</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Property Type</th>
              <th className="px-4 py-3">Rent/Sale</th>
              <th className="px-4 py-3">Bedrooms</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property, index) => (
              <tr key={index}>
                <td className="px-4 py-3 accent-amber-600">
                  <input type="checkbox" />
                </td>
                <td className="flex items-center gap-3 px-4 py-3 whitespace-nowrap">
                  <img
                    src={property.image}
                    alt="property"
                    className="w-10 h-10 rounded-md"
                  />
                  <span>{property.name}</span>
                </td>
                <td className="px-4 py-3">{property.size}</td>
                <td className="px-4 py-3">{property.type}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-md ${
                      property.status === "Rent"
                        ? "text-green-700 bg-green-100"
                        : property.status === "Sale"
                        ? "text-orange-700 bg-orange-100"
                        : "text-red-700 bg-red-100"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="px-4 py-3">{property.bedrooms}</td>
                <td className="px-4 py-3">{property.location}</td>
                <td className="px-4 py-3">{property.price}</td>
                <td className="px-4 py-3 flex flex-wrap gap-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <LuEye />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900">
                    <FaPen />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <MdOutlineDeleteOutline />
                  </button>
                  <button className="bg-black text-white rounded-md px-2 py-1 text-xs">
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyList;