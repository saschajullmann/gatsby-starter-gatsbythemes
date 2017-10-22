import React, { Component } from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';
import colors from '../../utils/colors';
import MobileNav from './mobile';
import media from '../../utils/media';
import { Box } from '../../components/Layout';

const basicNav = css`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  margin: 0;
  width: 100%;
  list-style-type: none;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1);
  z-index: 9998;
  height: 3.5rem;

  & ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const fullNav = css`
  ${basicNav};
  display: none;
  & li {
    margin: 0;
  }

  & li img {
    display: inline-block;
    vertical-align: middle;
  }
  & ul div {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;

    & li {
      margin-left: 1.25rem;
    }
  }

  ${media.mid`
    display: flex;
  `};
`;

// Styles for the mobile View of the navigation
const mobileNav = css`
  ${basicNav};
  & li {
    margin: 0;
  }

  & li:last-child {
    margin-left: auto;
    font-weight: 600;
    cursor: pointer;
  }

  & li img {
    display: block;
    margin: auto;
  }
  ${media.mid`
    display: none;
  `};
`;

// Styles for the overlay which pops up, when the menu is clicked
const mobileStyle = css`
  position: fixed;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  display: block;
  padding: 1rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  & ul {
    list-style-type: none;
    padding: 0;
    margin: 3rem 0 0 0;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    & div {
      text-align: center;
    }
  }

  & ul li {
    margin-top: 2rem;
  }
  & div {
    font-weight: 600;
    text-align: right;
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false });
    } else {
      this.setState({ mobileActive: true });
    }
  }

  render() {
    return (
      <nav>
        <Box width="100%" px={[3, 3, 4]} className={fullNav}>
          <ul>
            <li>Gatsbythemes.com starter</li>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </div>
          </ul>
        </Box>
        <Box width="100%" px={[3, 3, 4]} className={mobileNav}>
          <ul>
            <li>Gatsbythemes.com starter</li>
            <li>
              <div
                onClick={this.toggleNav}
                role="button"
                tabIndex="0"
                onKeyPress={this.toggleNav}
              >
                MENU
              </div>
            </li>
          </ul>
        </Box>
        {this.state.mobileActive && (
          <MobileNav toggleNav={this.toggleNav} mobileStyle={mobileStyle}>
            <ul>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="0"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/about">About</Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/blog">Blog</Link>
                </div>
              </li>
            </ul>
          </MobileNav>
        )}
      </nav>
    );
  }
}

export default Navigation;
