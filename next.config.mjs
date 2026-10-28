// Static export so the site can be hosted on GitHub Pages.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const onPages = process.env.GITHUB_ACTIONS === "true" && repo !== "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: onPages ? `/${repo}` : "",
  assetPrefix: onPages ? `/${repo}/` : undefined,
};
export default nextConfig;
