// // next.config.mjs
// const nextConfig = {
//     eslint: {
//       ignoreDuringBuilds: true,
//     },
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "*"
//         },
//         {
//           protocol: "http",
//           hostname: "*"
//         }
//       ]
//     }
//   };

//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
        mdxRs: true,
        serverComponentsExternalPackages: ['mongoose']
    }
};

export default nextConfig;
