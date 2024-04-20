import BoxHeader from "../BoxHeader";
import DashboardBox from "../DashboardBox";
import FlexBetween from "../FlexBetween";

import { Box, Typography, useTheme } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const kpidata = [
    {
      totalExpenses: 10000,
      expensesByCategory: {
        "HVAC": 6000,
        "Elevators": 3000,
        "Lightings": 3000,
      },
    },
  ];

  const productData = [
    {
      _id: "1",
      consumption: 10000,
      cost: 2000,
    },
    {
      _id: "2",
      consumption: 15000,
      cost: 2500,
    },
    {
      _id: "3",
      consumption: 5000,
      cost: 1500,
    },
    {
      _id: "4",
      consumption: 1000,
      cost: 2000,
    },
  ];

  const transactionsData = [
    {
      _id: "1",
      owner: "Buyer 1",
      amount: 2000,
      productIds: ["1", "2"],
    },
    {
      _id: "2",
      owner: "Buyer 2",
      amount: 2500,
      productIds: ["2"],
    },
  ];
  // console.log("Transactions data", transactionsData);
  const pieChartData = useMemo(() => {
    if (kpidata) {
      const totalExpenses = kpidata[0].totalExpenses;
      return Object.entries(kpidata[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpidata]);
  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "consumption",
      headerName: "Consumption",
      flex: 0.5,
      renderCell: (params) => `${params.value}`,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.5,
      renderCell: (params) => `$${params.value}`,
    },
  ];
  const transactionsColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "owner",
      headerName: "Owner",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.35,
      renderCell: (params) => params.length,
    },
  ];
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Houses/Offices"
          sideText={`${productData?.length} Houses/Offices`}
        />
        <Box
          mt="0.5"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
            getRowId={(row) => row._id}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Houses with highest cost"
          sideText={`${transactionsData?.length} latest transactions`}
        />
        <Box
          mt="15"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionsData || []}
            columns={transactionsColumns}
            getRowId={(row) => row._id}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader title="Consumption Breakdown by Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={80}>
                {/* onMouseEnter={this.onPieEnter} */}
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>

              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation of Data"
          sideText="+4%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%" //&Enter you data here to show in progress bar.
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Energy is used extensively in HVAC Systems in night time.
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
