const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');
const Webpack = require('webpack');

//exports.onCreateWebpackConfig = ({ config, stage }) => {
//  switch (stage) {
//    case 'develop':
//      config.preLoader('eslint-loader', {
//        test: /\.(js|jsx)$/,
//        exclude: /node_modules/
//      });
//
//      break;
//  }
//  return config;
//};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = parseFilepath(fileNode.relativePath);

    const slug = `/${parsedFilePath.dir}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(
      'src/templates/blog-post-template.js'
    );
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
      })
    );
  });
};
