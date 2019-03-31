module.exports = {
  siteMetadata: {
    title: `Robert Myles McDonnell`,
    author: `Robert Myles McDonnell`,
    description: `Website of Robert McDonnell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-mdx`
  ],
}
