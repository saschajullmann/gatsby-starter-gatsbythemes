import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import { Box, Flex } from '../Layout';
import feather from '../../utils/feather';
import media from '../../utils/media';

const footerStyle = css`
  overflow: hidden;
  padding: 2rem 0;
  background-color: ${colors.accent};
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  & img {
    display: block;
    margin: 0;
  }
  & p {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ulStyle = css`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1.45rem;
  text-transform: uppercase;
  padding: 0;
  & a {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
  & li {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  text-align: left;
  & p {
    margin: 0;
    margin-bottom: 1.45rem;
  }
`;

const socialList = css`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${media.large`
    width: 50%;
    margin-left: auto;
  `};
`;

const svgStyles = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

const Footer = ({ name, facebook, instagram, twitter, email }) => (
  <div className={footerStyle}>
    <Box width="1200px" m="0 auto" p={[3, 3, 4, 0]} align="left" color="white">
      <Flex wrap={['wrap', 'wrap', 'nowrap']} justifyContent="space-between">
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <div>
              <p>{name}</p>
            </div>
          </Wrapper>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <ul className={ulStyle}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </Wrapper>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <ul className={socialList}>
              <li>
                <a
                  title="Link to our Facebook page"
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('facebook', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li>
                <a
                  title="Link to our Twitter account"
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('twitter', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li>
                <a
                  title="Link to out Instragram account"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feather('instagram', ['30', '30'], svgStyles)}
                </a>
              </li>
              <li>
                <a title="Our E-Mail address" href={`mailto:${email}`}>
                  {feather('mail', ['30', '30'], svgStyles)}
                </a>
              </li>
            </ul>
          </Wrapper>
        </Box>
      </Flex>
    </Box>
    <Box px={[3, 3, 1]} align="center">
      <p>{`Copyright © 2019 ${name}. All rights reserved.`}</p>
    </Box>
  </div>
);

Footer.propTypes = {
  name: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  email: PropTypes.string
};

Footer.defaultProps = {
  name: 'Gatbsythemes.com starter',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram',
  email: ''
};

export default Footer;
