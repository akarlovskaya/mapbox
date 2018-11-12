import React, {Component} from 'react';

import { FaTree, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import styles from './List.scss';

class Section extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            className: `${styles.subMenuDropdown} ${styles.closed}`
        }
      }

      handleClick = () => {
          const { isOpen } = this.state;

          if (isOpen) {
              this.setState({
                  isOpen: false,
                  className: `${styles.subMenuDropdown} ${styles.closed}`
              });
          }
          else {
              this.setState({
                  isOpen: true,
                  className: `${styles.subMenuDropdown} ${styles.open}`
              });
          }
      }


    render() {
        const {id, name} = this.props.item;
        const subnavLiElements = this.props.item.siteObjs.map( site => {
            // onClick={this.props.onClickSubitem(site.id)}
            return (
                <li key={site.id}>
                    <a href="#">{site.name}</a>
                </li>
            )
        });

        return(
            <React.Fragment>
                <li key={id} className={styles.headingClassName}>
                    <a href="#" onClick={this.handleClick}>
                        {name}
                        {this.state.isOpen ? <FaCaretUp /> : <FaCaretDown />}
                    </a>
                    <span className={styles.icon}><FaTree /></span>
                    <ul className={this.state.className}>
                        {subnavLiElements}
                    </ul>
                </li>
            </React.Fragment>
        )
    }
}

export default Section;
