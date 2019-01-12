import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import feather from '../../utils/feather';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.mobileContainer = document.createElement('div');
    document.body.appendChild(this.mobileContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.mobileContainer);
  }

  render() {
    const { mobileStyle, toggleNav, children } = this.props;
    return ReactDOM.createPortal(
      <nav className={mobileStyle}>
        <div
          onClick={toggleNav}
          onKeyPress={toggleNav}
          role="button"
          tabIndex="0"
        >
          {feather('x', ['32', '32'])}
        </div>
        {children}
      </nav>,
      this.mobileContainer
    );
  }
}

MobileNav.propTypes = {
  mobileStyle: PropTypes.string.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default MobileNav;
