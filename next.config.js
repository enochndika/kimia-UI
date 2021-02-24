const withMDX = require('@next/mdx');

module.exports = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});
