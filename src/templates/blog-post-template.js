/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import PageWrapper from '../components/PageWrapper';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <PageWrapper>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>{post.frontmatter.title}</h1>
          <h5>Written by {post.frontmatter.author.id}</h5>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
        }
      }
    }
  }
`;

export default Template;
