/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';

const imgStyle = css`
  border-radius: 5px;
`;

const About = ({ data }) => {
  const imageData = data.file.childImageSharp;
  return (
    <PageWrapper>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>About</h1>
          <Img
            className={imgStyle}
            alt="Picture of X"
            fluid={imageData.fluid}
          />
          <p>This is an example showing the use of &quot;gatsby-image&quot;.</p>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
