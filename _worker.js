
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // GitBook Proxy for /docs
    if (path.startsWith('/docs')) {
      const gitbookUrl = 'https://proxy.gitbook.site/sites/site_RHK6F';

      // Remove '/docs' prefix from the path
      let targetPath = path.replace(/^\/docs/, '');
      if (targetPath === '' || targetPath === '/') targetPath = '';

      // Construct the destination URL
      // If targetPath is empty, it hits the root of the site_RHK6F
      const destination = new URL(targetPath || '/', gitbookUrl);
      destination.search = url.search;

      const newRequest = new Request(destination, request);
      return fetch(newRequest);
    }

    // For all other requests, fetch from origin (your static site)
    return env.ASSETS.fetch(request);
  }
};
