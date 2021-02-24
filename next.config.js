const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

module.exports = withMDX({
  images: {
    domains: ['res.cloudinary.com'],
  },
});
