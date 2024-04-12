import React from "react";
import Header from "./Header";
import { SideBar } from "./SideBar";
import Footer from "./Footer";
import Chart from "react-apexcharts";
import '../StylingDashBoard/Overview.css';

const Overview = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div className="d-flex">
        <SideBar />
        <div
          className="border border-danger"
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "10px",
            width: "100%",
          }}
        >
          <div className="container-fluid">
            <Chart
              id='chart'
              type="bar"
              width={"100%"}
              height={"100%"}
              series={[
                {
                  name: "Medical Observations",
                  data: [123, 300, 464, 542, 843, 847, 950],
                },
              ]}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  }, 
                },
                plotOptions:{
                  bar:{
                    columnWidth:"50%",
                  }
                },
                title: {
                  text: "Medical Observations by Medicare Team",
                  align: "center",
                  style: {
                    fontSize: "18px",
                    color: "#28a745",
                  },
                },
                subtitle: {
                  text: "This is a Bar Chart of Medicare",
                  align: "center",
                  style: {
                    color: "#28a745",
                  },
                },
                colors: ["#28a745"],
                xaxis: {
                  categories: [
                    "Oxygen Delivery",
                    "Respiratory Rate (RR)",
                    "Respiratory Distress",
                    "Heart/Pulse Rate",
                    "Blood Pressure",
                    "Temperature",
                    "Level of Consciousness",
                  ],
                  labels: {
                    style: {
                      fontSize: "12px",
                      colors: "#28a745",
                    },
                  },
                  title: {
                    text: "Medical Diagnosis Names",
                    style: {
                      fontSize: "15px",
                      color: "#28a745",
                    },
                  },
                },
                yaxis: {
                  labels: {
                    formatter: function (val) {
                      return val + "%";
                    },
                    style: {
                      colors: "#28a745",
                      fontSize: "12px",
                    },
                  },
                  title: {
                    text: "Medical Diagnosis Rate",
                    style: {
                      fontSize: "15px",
                      color: "#28a745",
                    },
                  },
                },
                dataLabels: {
                  style: { color: "white" },
                  formatter: (value) => {
                    return `${value}%`;
                  },
                },
                grid: {
                  borderColor: "#e0e0e0",
                },
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Overview;
