import React, { Component } from 'react';
import { GradientDarkgreenGreen } from '@vx/gradient';

import Graph from '../components/graph/Graph';

class Chart extends Component {
  // state = {
  //   width: 0,
  //   height: 0
  // };

  state = {
      sizeDistribution: [
        {
          size: '0m - 10m',
          amount: 7
        },
        {
          size: '10m - 20m',
          amount: 10
        },
        {
          size: '20m - 30m',
          amount: 13
        },
        {
          size: '30m - 40m',
          amount: 6
        },
        {
          size: '40m - 50m',
          amount: 11
        },
        {
          size: '50m - 60m',
          amount: 5
        },
        {
          size: '60m - 70m',
          amount: 8
        }
      ]
    }

  componentDidMount() {
    window.addEventListener('resize', this.setSize);

    this.setSize();
  }

  setSize = (event) => {
    const { width, height } = this.chart.getBoundingClientRect();

    this.setState((prevState) => {
      return {
        width,
        height
      };
    });
  }

  setRef = (node) => {
    this.chart = node;
  }

  render() {
    const { width, height } = this.state;

    /* This is a hack to first set the size based on percentage
       then query for the size so the chart can be scaled to the window size.
       The second render is caused by componentDidMount(). */
    if(width < 100 || height < 100) {
      return <svg ref={ this.setRef } width={'100%'} height={'100%'}></svg>
    }

    const svgStyle = {
        position: 'absolute'
    }

    return (
        <React.Fragment>
          <svg ref={ this.setRef }
               width={'100%'}
               height={'100%'}
               style={svgStyle}>
            <GradientDarkgreenGreen id="gradient" />
            <rect
              x={0}
              y={0}
              width={width}
              height={height}
              fill={`url(#gradient)`}
            />
          </svg>

          <Graph
            sizeDistribution={this.state.sizeDistribution}
          />
        </React.Fragment>
    );
  }
}

export default Chart;
