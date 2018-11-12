import React, { Component } from 'react';

import styles from './Graph.scss';
import uuid from 'uuid';

class Graph extends React.Component {

  showBars() {
    const { sizeDistribution } = this.props;

    let sumOfSizes = sizeDistribution.reduce((acc, size) => {
      return acc + size.amount;
    }, 0);

    return sizeDistribution.map((size) => {
      const percent = (size.amount / sumOfSizes) * 100;
      return (
        <Bar
          percent={percent}
          key={uuid()}
        />
      )
    });
  }

  render() {
    const { sizeDistribution } = this.props;

    return (
        <div className={styles.graph}>

          <HorizontalAxis sizeDistribution={sizeDistribution} />

          <div className={styles.barsContainer}>
            { this.showBars() }
          </div>

          <VerticalAxis sizeDistribution={ sizeDistribution }/>

        </div>
    )
  }
}

export default Graph;

const Bar = ({ percent }) => {
  return (
    <div className={styles.bar} style={{ height: `${percent * 4}%` }} />
  )
}

const VerticalAxis = (props) => {
  const arr = props.sizeDistribution;

  return (
    <div className={styles.sizeMarkers}>
      {
        arr.map((el, i) => (
         <span style={{ left: `${i * 13}%` }} key={uuid()}>
          { el.size }
         </span>
        ))
      }
    </div>
  )
}

const HorizontalAxis = () => {
    const arr = [];
    for ( let i = 0; i <= 13; i++ ) {
        arr.push(i);
    }

  return (
    <div className={styles.numbers}>
        {
            arr.map((el, i) => {
                return <div className={styles.amount} key={uuid()}>{i}</div>
            })
        }
    </div>
  )
}
