
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const Graph = () => {
  const data = useSelector((state) => state?.data?.data);

  const [series, setSeries] = useState([]);
  const [options] = useState({
    chart: {
      height: '100%',
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ['Total Avg'],
        ["Cloths (F)"],
        ['Jewelery'],
        ['Electronics'],
        ["Cloths (M)"],
      ],
      labels: {
        style: {
          fontSize: '12px',
        },
      
      },
    },
  });

  useEffect(() => {
    if (data) {
      const categoryStats = {
        totalCount: 0,
        totalSum: 0,
      };

      data.forEach((item) => {
        categoryStats.totalCount++;
        categoryStats.totalSum += item.price;

        if (!categoryStats[item.category]) {
          categoryStats[item.category] = { total: 0, count: 0 };
        }
        categoryStats[item.category].total += item.price;
        categoryStats[item.category].count += 1;
      });

      const categoryAverages = {};
      for (const category in categoryStats) {
        const { total, count } = categoryStats[category];
        categoryAverages[category] = total / count;
      }

      let totalAvg = categoryStats.totalSum / categoryStats.totalCount;
      categoryAverages.totalAvg = totalAvg;

      const newSeries = [{ data: Object.values(categoryAverages).slice(2) }];

      setSeries(newSeries);
    }
  }, [data]);

  return (
    <div style={{ height: '100%',margin:"0 35px 0 10px",borderRadius:10, boxShadow:" 0 0 20px rgba(0, 0, 0, 0.2)", }}>
      <div id="chart" style={{ height: '100%' }}>
        <ReactApexChart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
};

export default Graph;








