/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <PageWrapper>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, '1200px']}
          m={['3.5rem 0', '3.5rem 0', '3.5rem auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          textAlign="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
          <Flex justifyContent="center" wrap={['wrap', 'wrap', 'nowrap']}>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonPrimary>About</ButtonPrimary>
              </Link>
            </Box>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonSecondary>About</ButtonSecondary>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bg={colors.primary} py={[3, 3, 4]}>
        <Box
          width={[1, 1, '1200px']}
          m="0 auto"
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>This could be another section</h1>
          <p>With another text object</p>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
