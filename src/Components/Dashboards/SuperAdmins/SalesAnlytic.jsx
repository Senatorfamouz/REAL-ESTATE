"use client"

import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChevronDown, ArrowDown, ArrowUp, Home, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// Remove this import if it's causing issues:
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for the chart
const chartData = [
  { month: "Jan", income: 17000, expenses: 16800 },
  { month: "Feb", income: 17800, expenses: 16200 },
  { month: "Mar", income: 16500, expenses: 15800 },
  { month: "Apr", income: 20000, expenses: 17200 },
  { month: "May", income: 17500, expenses: 16800 },
  { month: "Jun", income: 16000, expenses: 15200 },
  { month: "Jul", income: 19200, expenses: 17800 },
  { month: "Aug", income: 17800, expenses: 16500 },
  { month: "Sep", income: 16200, expenses: 15800 },
  { month: "Oct", income: 19500, expenses: 17200 },
  { month: "Nov", income: 18800, expenses: 16800 },
  { month: "Dec", income: 19200, expenses: 17500 },
]

const SalesAnalytics = () => {
  return (
    <div className="w-full space-y-6 bg-slate-900 p-6 rounded-lg">
      {/* Main Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Sales Analytic</h2>
            <div className="flex items-center gap-2">
              {/* <Button variant="outline" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                This Month
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-4 right-4 flex items-center gap-2 text-white">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">Earnings: </span>
              <span className="text-purple-400 font-semibold">$85,934</span>
            </div>

            <div className="h-[300px] w-full bg-slate-800 rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    domain={[12000, 20000]}
                    tickFormatter={(value) => `${value / 1000}K`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: "#8b5cf6" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: "#06b6d4" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-none text-white">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-right">
                  <div className="text-3xl font-bold">$117,000.43</div>
                  <div className="text-purple-200 text-sm">My Balance</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <ArrowDown className="h-4 w-4 text-green-400" />
                      <span className="text-sm">Income</span>
                    </div>
                    <span className="font-semibold">$13,321.12</span>
                  </div>

                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <ArrowUp className="h-4 w-4 text-red-400" />
                      <span className="text-sm">Expense</span>
                    </div>
                    <span className="font-semibold">$7,566.11</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {/* <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">Send</Button>
                  <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Receive
                  </Button> */}
                </div>

                {/* Illustration placeholder */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-yellow-800" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Income */}
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <div className="text-sm text-slate-400 mb-1">Income</div>
          <div className="text-2xl font-bold mb-2">23,675.00</div>
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUp className="h-3 w-3 mr-1" />
            0.08%
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <div className="text-sm text-slate-400 mb-1">Expenses</div>
          <div className="text-2xl font-bold mb-2">11,562.00</div>
          <div className="flex items-center text-red-400 text-sm">
            <ArrowDown className="h-3 w-3 mr-1" />
            5.38%
          </div>
        </div>

        {/* Balance */}
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <div className="text-sm text-slate-400 mb-1">Balance</div>
          <div className="text-2xl font-bold mb-2">67,365.00</div>
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUp className="h-3 w-3 mr-1" />
            2.89%
          </div>
        </div>

        {/* Property */}
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Property</span>
            <Home className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-xl font-bold mb-2">15,780</div>
          <div className="text-xs text-slate-400 mb-2">60% Target</div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Revenue</span>
            <DollarSign className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-xl font-bold mb-2">$78.3M</div>
          <div className="text-xs text-slate-400 mb-2">80% Target</div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesAnalytics
