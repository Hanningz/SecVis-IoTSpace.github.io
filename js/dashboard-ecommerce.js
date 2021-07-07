/*=========================================================================================
    File Name: dashboard-ecommerce.js
    Description: dashboard ecommerce page content with Apexchart Examples
    ----------------------------------------------------------------------------------------
    Item Name: Frest HTML Admin Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function () {

  var $primary = '#5A8DEE';
  var $danger = '#FF5B5C';
  var $warning = '#FDAC41';
  var $info = '#00CFDD';
  var $secondary = '#828D99';
  var $secondary_light = '#e7edf3';
  var $light_primary = "#E2ECFF";


  // Multi Radial Statistics
  // -----------------------
  var multiRadialOptions = {
    chart: {
      height: 240,
      type: "radialBar",
    },
    colors: [$primary, $danger, $warning],
    series: [60, 49, 29],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        hollow: {
          size: "40%"
        },
        track: {
          margin: 10,
          background: '#fff',
        },
        dataLabels: {
          name: {
            fontSize: '15px',
            color: [$secondary],
            fontFamily: "IBM Plex Sans",
            offsetY: 25,
          },
          value: {
            fontSize: '30px',
            fontFamily: "Rubik",
            offsetY: -15,
          },
          total: {
            show: true,
            label: '',
            color: $secondary
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    },
    labels: ['', '', '']
  };

  var multiradialChart = new ApexCharts(
    document.querySelector("#multi-radial-chart"),
    multiRadialOptions
  );
  multiradialChart.render();


  // Revenue Growth Chart
  // ---------------------
  var revenueChartOptions = {
    chart: {
      height: 100,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -20,
        bottom: -15
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    colors: [$info, $secondary_light],
    series: [{
      name: 'Alarms',
      data: [50, 60, 30, 20, 40, 30, 70, 80, 90, 50, 50, 70, 35, 10, 68, 35, 25, 80]
    }, {
      name: 'CyberAlerts',
      data: [70, 50, 20, 30, 20, 50, 90, 30, 50, 0, 50, 60, 40, 50, 20, 20, 10, 0]
    }],
    xaxis: {
      categories: ['1', '2', '3', '4', '5', "6", '7', '8', '9', '10', '11', '12'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: $secondary
        },
        offsetY: -5
      }
    },
    yaxis: {
      show: false,
      floating: true,
    },
    tooltip: {
      x: {
        show: false,
      },
    }
  }

  var revenueChart = new ApexCharts(
    document.querySelector("#revenue-growth-chart"),
    revenueChartOptions
  );

  revenueChart.render();

  

  // Order Summary Chart
  // --------------------
  var orderSummaryChartOptions = {
    chart: {
      height: 270,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      },
    },
    colors: [$primary, $primary],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5,
      dashArray: [0, 8]
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [$light_primary, $primary],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80,100]
      }
    },
    series: [{
      name: 'Smoke Alarms',
      data: [12, 5, 7, 20, 8, 15, 25, 17, 10, 27, 18],
      type: 'area',
    }, {
      name: 'Water Leak',
      data: [9, 16, 5, 7, 2, 3, 9, 6, 11, 6, 2],
      type: 'line',
    },
    {
      name: 'Cyber Alerts',
      data: [18, 18, 15, 12, 19, 22, 19, 6, 15, 16, 20],
      type: 'line',
    }
  ],

    xaxis: {
      offsetY: -50,
      categories: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, ''],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: $secondary
        }
      }
    },
    tooltip: {
      x: { show: false }
    },
  }

  var orderSummaryChart = new ApexCharts(
    document.querySelector("#order-summary-chart"),
    orderSummaryChartOptions
  );

  orderSummaryChart.render();

  // Marketing Compaigns Chart - Success
  // -----------------------------------
  var donutSuccessChartOption = {
    chart: {
      width: 80,
      height: 110,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    series: [70, 30, 40],
    labels: ["Installation", "Page Views", "Active Users"],
    stroke: {
      width: 2
    },
    colors: [$warning, $info, $primary],
    plotOptions: {
      pie: {
        offsetY: 15,
        donut: {
          size: '70%',
        }
      }
    },
    legend: {
      show: false
    }
  }
  var donutSuccessChart = new ApexCharts(
    document.querySelector("#donut-success-chart"),
    donutSuccessChartOption
  );
  donutSuccessChart.render();



  var profitPrimaryOptions = {
    chart: {
      height: 40,
      width: 40,
      type: "radialBar",
      sparkline: {
        show: true
      }
    },
    grid: {
      show: false,
      padding: {
        left: -30,
        right: -30,
        top: 0,
        bottom: -70
      }
    },
    series: [30],
    colors: [$primary],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            show: false,
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    }
  };
  var profitPrimaryChart = new ApexCharts(
    document.querySelector("#profit-primary-chart"),
    profitPrimaryOptions
  );

  profitPrimaryChart.render();

// Profit Info Chart
  // --------------------------------
  var profitInfoOptions = {
    chart: {
      height: 40,
      width: 40,
      type: "radialBar",
      sparkline: {
        show: true
      }
    },
    grid: {
      show: false,
      padding: {
        left: -30,
        right: -30,
        top: 0,
        bottom: -70
      }
    },
    series: [6],
    colors: [$info],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            show: false,
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    }
  };
  var profitInfoChart = new ApexCharts(
    document.querySelector("#profit-info-chart"),
    profitInfoOptions
  );

  profitInfoChart.render();

  // Radial-Danger-chart
  // --------------------------------
  var radialDangeroptions = {
    chart: {
      height: 40,
      width: 40,
      type: "radialBar",
    },
    grid: {
      show: false,
      padding: {
        left: -30,
        right: -30,
        top: 0,
      }
    },
    series: [15],
    colors: [$danger],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            show: false,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        gradientToColors: [$danger],
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 70, 100]
      }
    },
    stroke: {
      lineCap: "round",
    }
  };
  var radialDangerChart = new ApexCharts(
    document.querySelector("#radial-danger-chart"),
    radialDangeroptions
  );

  radialDangerChart.render();


// Registration Chart
  // -------------------
  var registrationChartoptions = {
    chart: {
      type: 'bar',
      height: 60,
      width: 120,
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    colors: [$danger_light, $danger_light, $danger_light, $danger_light, $warning, $danger_light],
    series: [{
      name: 'Sessions',
      data: [3, 7, 5, 15, 9, 8, 12]
    }],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },

    plotOptions: {
      bar: {
        columnWidth: '80%',
        distributed: true,
      }
    },
    tooltip: {
      x: { show: false }
    },
    xaxis: {
      type: 'numeric',
    }
  }

  var registrationChart = new ApexCharts(
    document.querySelector("#registration-chart"),
    registrationChartoptions
  );

  registrationChart.render();



  var analyticsBarChartOptions = {
    chart: {
      height: 260,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded'
      },
    },
    legend: {
      horizontalAlign: 'right',
      offsetY: -10,
      markers: {
        radius: 50,
        height: 8,
        width: 8
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [$primary, $primary_light],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 70, 100]
      },
    },
    series: [{
      name: '2019',
      data: [80, 95, 150, 210, 140, 230, 300, 280, 130]
    }, {
      name: '2018',
      data: [50, 70, 130, 180, 90, 180, 270, 220, 110]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: $gray_light
        }
      }
    },
    yaxis: {
      min: 0,
      max: 300,
      tickAmount: 3,
      labels: {
        style: {
          color: $gray_light
        }
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

  var analyticsBarChart = new ApexCharts(
    document.querySelector("#analytics-bar-chart"),
    analyticsBarChartOptions
  );

  analyticsBarChart.render();


// Sales Chart
  // ---------------------
  var salesChartOptions = {
    chart: {
      height: 100,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -20,
        bottom: -15
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    colors: [$primary, $primary_light],
    series: [{
      name: '2019',
      data: [80, 40, 30, 90, 20, 50, 95]
    }, {
      name: '2018',
      data: [20, 60, 70, 10, 80, 50, 5]
    }],
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: $gray_light
        },
        offsetY: -5
      }
    },
    yaxis: {
      show: false,
      floating: true,
    },
    tooltip: {
      x: {
        show: false,
      },
    }
  }

  var salesChart = new ApexCharts(
    document.querySelector("#sales-chart"),
    salesChartOptions
  );

  salesChart.render();

  // Donut Chart
  // ---------------------
  var donutChartOption = {
    chart: {
      width: 200,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    series: [80, 30, 60],
    labels: ["Social", "Email", "Search"],
    stroke: {
      width: 0,
      lineCap: 'round',
    },
    colors: [$primary, $info, $warning],
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '15px',
              colors: $sub_label_color,
              offsetY: 20,
              fontFamily: 'IBM Plex Sans',
            },
            value: {
              show: true,
              fontSize: '26px',
              fontFamily: 'Rubik',
              color: $label_color,
              offsetY: -20,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Impression',
              color: $gray_light,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce(function (a, b) {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    legend: {
      show: false
    }
  }

  var donutChart = new ApexCharts(
    document.querySelector("#donut-chart"),
    donutChartOption
  );

  donutChart.render();


  // Success Line Chart
  // -----------------------------
  var successLineChartOption = {
    chart: {
      height: 100,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        bottom: -20,
      }
    },
    colors: [$success],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    series: [{
      data: [50, 0, 50, 40, 90, 0, 40, 25, 80, 40, 45]
    }],
    xaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
  }

  var successLineChart = new ApexCharts(
    document.querySelector("#success-line-chart"),
    successLineChartOption
  );
  successLineChart.render();


  // Marketing Compaigns Chart - Danger
  // -----------------------------------
  var donutDangerChartOption = {
    chart: {
      width: 80,
      height: 110,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    series: [70, 40, 30],
    labels: ["Installation", "Page Views", "Active Users"],
    stroke: {
      width: 2
    },
    colors: [$danger, $secondary, $primary],
    plotOptions: {
      pie: {
        offsetY: 15,
        donut: {
          size: '70%',
        }
      }
    },
    legend: {
      show: false
    }
  }
  var donutDangerChart = new ApexCharts(
    document.querySelector("#donut-danger-chart"),
    donutDangerChartOption
  );
  donutDangerChart.render();

  // Earnings Swiper - Perfect Scrollbar
  if ($(".widget-earnings-scroll").length > 0) {
    var widget_earnings = new PerfectScrollbar(".widget-earnings-scroll");
  }

  // Earnings Swiper - Perfect Scrollbar
  if ($(".dashboard-latest-update .card-body").length > 0) {
    var widget_earnings = new PerfectScrollbar(".dashboard-latest-update .card-body");
  }

  // User Details - Perfect Scrollbar
  if ($('.marketing-campaigns .table-responsive').length > 0) {
    var user_details = new PerfectScrollbar('.marketing-campaigns .table-responsive');
  }
  // Earnings Swiper
  // ---------------
  var swiperLength = $(".swiper-slide").length;
  if (swiperLength) {
    swiperLength = Math.floor(swiperLength / 2)
  }

  // Swiper js for this page
  var mySwiper = new Swiper('.widget-earnings-swiper', {
    slidesPerView: 'auto',
    initialSlide: swiperLength,
    centeredSlides: true,
    spaceBetween: 30,
    // active slide on click
    slideToClickedSlide: true,
  });

  activeSlide(swiperLength);

  // Active slide change on swipe
  mySwiper.on('slideChange', function () {
    activeSlide(mySwiper.realIndex);
  });

  //add class active content of active slide
  function activeSlide(index) {
    var slideEl = mySwiper.slides[index]
    var slideId = $(slideEl).attr('id');
    $(".wrapper-content").removeClass("active");
    $("[data-earnings=" + slideId + "]").addClass('active')
  };
});
