const path = require("path")

module.exports = {
  siteMetadata: {
    title: `robertmylesmcdonnell.com`,
    author: `Robert Myles McDonnell`,
    description: `Robert McDonnell's website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/content/posts/"),
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-offline",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `src/content/posts`),
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          posts: require.resolve("./src/components/layouts/BlogLayout.js"),
          default: require.resolve("./src/components/layouts/BlogLayout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "posts",
              path: `${__dirname}/src/content/posts/`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
        plugins: [
          "gatsby-remark-images",
          // {
          //   resolve: `gatsby-transformer-remark`,
          //   options: {
          //     plugins: [`gatsby-remark-copy-linked-files`],
          //   },
          // },
        ],
      },
    },
  ],
}
