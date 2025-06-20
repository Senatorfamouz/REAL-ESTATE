import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, DollarSign, Activity } from "lucide-react"
import SalesAnalytics from './SalesAnlytic';

const AnalyticsCard = ({ title, value, trendPercentage, timePeriod }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
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

      {/* Sales Analytics */}
      <SalesAnalytics />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

     
    </div>
  );
};

export default AnalyticsDashboard;