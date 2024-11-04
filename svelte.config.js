import adapter from '@sveltejs/adapter-vercel'; // Make sure this matches your installed adapter

export default {
  kit: {
    adapter: adapter(),
    // other options...
  }
};
