import { Inter } from "next/font/google";
// import "./globals.css";

// Importing local CSS files
// import "/assets/css/fontawesome.css";
// import "/assets/css/owl.css";
// import "/assets/css/animate.css";
// import "/assets/css/modal_animation.css";
// import "/vendor/bootstrap/css/bootstrap.min.css";
// import "/assets/dropdown/jquery.sweet-dropdown.min.css";
// import "/assets/css/templatemo-cyborg-gaming.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Squad Groups",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="http://www.jqueryscript.net/css/jquerysctipttop.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/dropdown/jquery.sweet-dropdown.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* <!-- Bootstrap core CSS --> */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Additional CSS Files --> */}
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/templatemo-cyborg-gaming.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/modal_animation.css" />
        <link rel="stylesheet" href="assets/css/globals.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* External JS, loaded after page load */}

        <Script
          strategy="afterInteractive"
          src="/vendor/jquery/jquery.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendor/bootstrap/js/bootstrap.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/assets/dropdown/jquery.sweet-dropdown.min.js"
        />
        {/* <Script strategy="afterInteractive" src="./script.js" /> */}

        <Script strategy="afterInteractive" src="/assets/js/isotope.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/owl-carousel.js" />
        <Script strategy="afterInteractive" src="/assets/js/tabs.js" />
        <Script strategy="afterInteractive" src="/assets/js/popup.js" />
        <Script strategy="afterInteractive" src="/assets/js/custom.js" />
        {/* <Script strategy="afterInteractive" src="/assets/js/utils.js" /> */}
        {/* <Script strategy="afterInteractive" src="/assets/js/api.js" /> */}
        {/* <Script strategy="afterInteractive" src="/assets/js/modal.js" /> */}
        <Script
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=279493455819376&autoLogAppEvents=1"
        />
      </body>
    </html>
  );
}
