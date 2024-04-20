import BoxHeader from "../BoxHeader";
import DashboardBox from "../DashboardBox";
// import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";

const Row1 = () => {
  const { palette } = useTheme();
  // const { data, error, status } = useGetKpisQuery();
  // console.log("Status", status);
  // console.log("Error", error);

  const revenueExpenses = [
    { name: "Mon", revenue: 33000, expenses: 90000 },
    { name: "Tue", revenue: 26000, expenses: 80000 },
    { name: "Wed", revenue: 20000, expenses: 50000 },
    { name: "Thurs", revenue: 35000, expenses: 40000 },
    { name: "Fri", revenue: 50000, expenses: 60000 },
    { name: "Sat", revenue: 55000, expenses: 85000 },
    { name: "Sun", revenue: 65000, expenses: 95000 },

    // Add more months as needed
  ];

  const revenue = [
    { name: "HVAC", revenue: 80000 },
    { name: "Lightings", revenue: 20000 },
    { name: "IT", revenue: 50000 },
    { name: "Elevators", revenue: 25000 },
    { name: "Heating", revenue: 15000 },
    { name: "Security", revenue: 5000 },

    // Add more months as needed
  ];

  const revenueProfit = [
    { name: "Mon", revenue: 9000, profit: 90000 },
    { name: "Tue", revenue: 30000, profit: 80000 },
    { name: "Wed", revenue: 10000, profit: 50000 },
    { name: "Thurs", revenue: 35000, profit: 40000 },
    { name: "Fri", revenue: 25000, profit: 60000 },
    { name: "Sat", revenue: 45000, profit: 85000 },
    { name: "Sun", revenue: 55000, profit: 95000 },

    // Add more months as needed
  ];
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Energy Consumption and Savings"
          subtitle="Top line for consumption and bottom for savings"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              axisLine={{ strokeWidth: "0" }}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dot={true}
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dot={true}
              dataKey="expenses"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Energy Consumption based on time"
          subtitle="Top line for Day(7AM-6PM) and bottom for Night(6PM-7AM)"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <Tooltip />
            {/* <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            /> */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="c">
        <BoxHeader
          title="Consumption by System"
          // subtitle="Top line for revenue and bottom for profit"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <Tooltip />

            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
