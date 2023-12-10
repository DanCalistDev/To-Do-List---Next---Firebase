/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/To-do-List-Next" : "",
    images: {
      unoptimized: true,
    },
  };
  