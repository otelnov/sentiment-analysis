let rg = require('rangen');

export default ngModule => {
  ngModule.factory('MainFactory', [
    '$http', 'config',
    function ($http, config) {
      let api = config.apiUrl;

      function send(data, cb) {
        $http.get(`${api}/?tag=${data.tag}`).then(() => {
          //cb(response.data.error, response.data.data);
          let pos = rg.num(0, 100);
          let temp = 100 - pos;
          let neg = rg.num(0, temp);
          let neutr = 100 - pos - neg;
          cb(null, {
            donut: [
              {
                key: 'pos',
                y: pos
              },
              {
                key: 'neutr',
                y: neutr
              },
              {
                key: 'neg',
                y: neg
              }
            ],
            timeseries: [
              {
                values: [
                  {x: 1, y: rg.num(0, 10)},
                  {x: 2, y: rg.num(0, 10)},
                  {x: 3, y: rg.num(0, 10)},
                  {x: 4, y: rg.num(0, 10)},
                  {x: 5, y: rg.num(0, 10)},
                  {x: 6, y: rg.num(0, 10)},
                  {x: 7, y: rg.num(0, 10)},
                  {x: 8, y: rg.num(0, 10)},
                  {x: 9, y: rg.num(0, 10)},
                  {x: 10, y: rg.num(0, 10)}
                ],
                key: 'Positive',
                color: '#ff7f0e'
              },
              {
                values: [
                  {x: 1, y: rg.num(0, 10)},
                  {x: 2, y: rg.num(0, 10)},
                  {x: 3, y: rg.num(0, 10)},
                  {x: 4, y: rg.num(0, 10)},
                  {x: 5, y: rg.num(0, 10)},
                  {x: 6, y: rg.num(0, 10)},
                  {x: 7, y: rg.num(0, 10)},
                  {x: 8, y: rg.num(0, 10)},
                  {x: 9, y: rg.num(0, 10)},
                  {x: 10, y: rg.num(0, 10)}
                ],
                key: 'Negative',
                color: '#2ca02c'
              },
              {
                values: [
                  {x: 1, y: rg.num(0, 10)},
                  {x: 2, y: rg.num(0, 10)},
                  {x: 3, y: rg.num(0, 10)},
                  {x: 4, y: rg.num(0, 10)},
                  {x: 5, y: rg.num(0, 10)},
                  {x: 6, y: rg.num(0, 10)},
                  {x: 7, y: rg.num(0, 10)},
                  {x: 8, y: rg.num(0, 10)},
                  {x: 9, y: rg.num(0, 10)},
                  {x: 10, y: rg.num(0, 10)}
                ],
                key: 'Neutral',
                color: '#7777ff'
              }
            ]
          });
        }, cb);
      }

      let donutOptions = {
        chart: {
          type: 'pieChart',
          height: 450,
          donut: true,
          x: function (d) {
            return d.key;
          },
          y: function (d) {
            return d.y;
          },
          showLabels: true,
          labelType: 'percent',
          pie: {
            startAngle: function (d) {
              return d.startAngle;
            },
            endAngle: function (d) {
              return d.endAngle;
            }
          },
          transitionDuration: 500,
          legend: {
            margin: {
              top: 5,
              right: 140,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      let lineOptions = {
        chart: {
          type: 'lineChart',
          height: 450,
          margin: {
            top: 20,
            right: 20,
            bottom: 40,
            left: 55
          },
          x: function (d) {
            return d.x;
          },
          y: function (d) {
            return d.y;
          },
          useInteractiveGuideline: true,
          dispatch: {
            stateChange: function () {
              console.log('stateChange');
            },
            changeState: function () {
              console.log('changeState');
            },
            tooltipShow: function () {
              console.log('tooltipShow');
            },
            tooltipHide: function () {
              console.log('tooltipHide');
            }
          },
          xAxis: {
            axisLabel: 'Time (ms)'
          },
          yAxis: {
            axisLabel: 'Voltage (v)',
            tickFormat: function (d) {
              return d3.format('.02f')(d);
            },
            axisLabelDistance: 30
          },
          callback: function (chart) {
            console.log('!!! lineChart callback !!!', chart);
          }
        },
        title: {
          enable: true,
          text: 'Title for Line Chart'
        },
        subtitle: {
          enable: true,
          text: 'Subtitle for simple line chart',
          css: {
            'text-align': 'center',
            margin: '10px 13px 0px 7px'
          }
        },
        caption: {
          enable: true,
          html: '<b>Figure 1.</b> Lorem ipsum',
          css: {
            'text-align': 'justify',
            margin: '10px 13px 0px 7px'
          }
        }
      };

      return {send, donutOptions, lineOptions};
    }
  ]);
};
