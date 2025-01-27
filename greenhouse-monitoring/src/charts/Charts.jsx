import React from "react"
import Common from "../common/Common"
import "./chart.css"
import ReactApexChart from "react-apexcharts"

const Charts = () => {
  const data = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        // add this by typing
        foreColor: "grey",
      },
      fill: {
        colors: ["#35B8E0", "#6658DD", "#FF8ACC"],
      },
      stroke: {
        colors: ["#313844"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      labels: ["carbon monoxide", "temperature", "humidity"],
      legend: {
        position: "bottom",
      },
    },
  }

  const bardata = {
    series: [
      {
        name: "carbon monoxide",
        data: [65, 45, 75, 35, 30, 85],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        // add this by typing
        foreColor: "grey",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        foreColor: "#fff",
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
      },
      // remove  it tooltip
      grid: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  }

  const line = {
    series: [
      {
        name: "temperature",
        data: [50, 60, 10, 60, 80, 30],
      },
      {
        name: "humidity",
        data: [0, 40, 80, 20, 40, 60],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        //add
        foreColor: "grey",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
      //add it
      grid: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  }

  return (
    <>
      <section className='charts grid2'>
        <div className='cardBox'>
          <Common title='Daily report' />
          <ReactApexChart options={data.options} series={data.series} type='donut' height={350} />
        </div>
        <div className='cardBox'>
          <Common title='carbon monoxide' />
          <ReactApexChart options={bardata.options} series={bardata.series} type='bar' height={350} />
        </div>
        <div className='cardBox'>
          <Common title='temperature and humidity' />
          <ReactApexChart options={line.options} series={line.series} type='line' height={350} />
        </div>
      </section>
    </>
  )
}

export default Charts
