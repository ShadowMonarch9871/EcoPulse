import BoxHeader from "../BoxHeader";
import DashboardBox from "../DashboardBox";
import FlexBetween from "../FlexBetween";
// import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
const pieData = [
  {
    name: "Group A",
    value: 500,
  },
  {
    name: "Group B",
    value: 400,
  },
  {
    name: "Group C",
    value: 100,
  },
];
const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const operationalData = [
    {
      _id: "1",
      day: "Sun",
      activeConsumption: 1000,
      passiveConsumption: 10000,
    },
    {
      _id: "2",
      day: "Mon",
      activeConsumption: 2000,
      passiveConsumption: 7500,
    },
    {
      _id: "3",
      day: "Tue",
      activeConsumption: 3000,
      passiveConsumption: 7000,
    },
    {
      _id: "4",
      day: "Wed",
      activeConsumption: 2500,
      passiveConsumption: 4000,
    },
    {
      _id: "5",
      day: "Thurs",
      activeConsumption: 3500,
      passiveConsumption: 4500,
    },
    {
      _id: "5",
      day: "Fri",
      activeConsumption: 1200,
      passiveConsumption: 6500,
    },
    {
      _id: "5",
      day: "Sat",
      activeConsumption: 2000,
      passiveConsumption: 6000,
    },
    {
      _id: "5",
      day: "Sun",
      activeConsumption: 3000,
      passiveConsumption: 5000,
    },
  ];

  const productData = [
    { price: 1000, expense: 500 },
    { price: 1500, expense: 1000 },
    { price: 2000, expense: 1500 },
    { price: 2500, expense: 2000 },
    { price: 3500, expense: 1850 },
    { price: 3000, expense: 2000 },
    { price: 3500, expense: 2500 },
    { price: 500, expense: 100 },
    { price: 1000, expense: 1500 },
    { price: 2500, expense: 3500 },
    { price: 1500, expense: 2000 },
    { price: 500, expense: 800 },
    { price: 800, expense: 1000 },
    { price: 100, expense: 500 },
    { price: 2100, expense: 2500 },
    { price: 2500, expense: 2500 },

    // Add more items as needed
  ];
  // console.log(data);
  const operationalExpenses = useMemo(() => {
    return operationalData.map(
      ({ day, activeConsumption, passiveConsumption }) => {
        return {
          day: day,
          "Active Consumption": activeConsumption,
          "Passive Consumption": passiveConsumption,
        };
      }
    );
  }, [operationalData]);

  // console.log(data);
  const productExpenseData = useMemo(() => {
    return productData.map(({ _id, price, expense }) => {
      return {
        id: _id,
        price: price,
        expense: expense,
      };
    });
  }, [productData]);
  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader title="Active vs Passive Consumption" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="day"
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
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

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Passive Consumption"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Active Consumption"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="e">
        <BoxHeader title="Activity Period" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Highest Activity </Typography>
            <Typography variant="h3" color={palette.primary[300]} m="0.3rem 0">
              55%
            </Typography>
            <Typography variant="h6">At Day Time</Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Lowest Activity</Typography>
            <Typography variant="h6">At Evening Time</Typography>
            <Typography mt="0.4rem" variant="h5">
              Power Consumption increment/decrement
            </Typography>
            <Typography variant="h6">Increment by 25%</Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Consumption vs Price" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="Consumption"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="Price"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
