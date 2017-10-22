import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
    return ReactDOM.createPortal(
      <nav className={this.props.mobileStyle}>
        <div
          onClick={this.props.toggleNav}
          onKeyPress={this.props.toggleNav}
          role="button"
          tabIndex="0"
        >
          X
        </div>
        {this.props.children}
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
