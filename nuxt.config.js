
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Buddy Joe Coffee Co. | High Quality Coffee From California",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Buddy Joe Coffee co. provides the highest quality blends from Temecula, California. We are a one-stop shop for everything coffee so you can get your cup of Joe and go."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "buddy joe coffee, coffee subscription, buddy joe, buddy joe coffee co"
      },
      { name: "og:title", content: `Buddy Joe Coffee Co. | High Quality Coffee From California` },
      {
        name: "og:description",
        content:
          "Buddy Joe Coffee co. provides the highest quality blends from Temecula, California. We are a one-stop shop for everything coffee so you can get your cup of Joe and go."
      },
      { name: "og:url", content: `http://www.buddyjoecoffeeco.com/` },
      { name: "og:type", content: "website" },
      {
        name: "og:image",
        content: `https://davidparksdev.s3.us-east-2.amazonaws.com/breakfast_blend.jpg`
      },
      {
        name: "og:image:secure_url",
        content: `https://davidparksdev.s3.us-east-2.amazonaws.com/breakfast_blend.jpg`
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
    "nuxt-svg-loader"
  ],
  sitemap: {
    hostname: "http://www.buddyjoecoffeeco.com/",
    gzip: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
