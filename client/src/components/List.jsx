import React, { Component } from 'react';

import styles from './List.scss';
import Section from './Section';

export default class List extends Component {

    render() {
      const { items, onClickSubitem } = this.props;

      return (
          <nav role="navigation">
              <a href="#">Logo</a>
              <ul className={ styles.menuDropdown }>
                {
                    items.map(item => {
                        return <Section key={ item.id } item={ item } onClickSubitem={ onClickSubitem } />
                    })
                }
              </ul>
          </nav>
      );
    }
}
