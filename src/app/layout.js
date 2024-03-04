import { Inter } from "next/font/google";
import "./globals.css";
// Importing CSS files, assuming they are copied into the src/assets folder
import '@/assets/css/fontawesome.css';
import '@/assets/css/templatemo-cyborg-gaming.css';
import '@/assets/css/owl.css';
import '@/assets/css/animate.css';
import '@/assets/css/modal_animation.css';
import '@/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/dropdown/jquery.sweet-dropdown.min.css';


// import isotope from "@/assets/js/isotope.min.js";
// import carousel from "@/assets/js/owl-carousel.js";
// import tabs from "@/assets/js/tabs.js";
// import popup from "@/assets/js/popup.js";
// import custom from "@/assets/js/custom.js";
// import jqueryjs from "@/vendor/jquery/jquery.min.js";
// import bootstrapjs from "@/vendor/bootstrap/js/bootstrap.min.js";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Squad Groups</title>
        <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />
        <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
        {/* <!-- Owl Carousel CSS (Assuming Owl Carousel 2) --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css" integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK" crossorigin="anonymous" />
        {/* External CSS */}

        {/* External JS, with defer attribute to defer loading */}
        <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" defer></Script>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        {/* <!-- Bootstrap JS --> */}
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        {/* <!-- Isotope JS --> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
        {/* <!-- Owl Carousel JS --> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@simondmc/popup-js@1.4.2/popup.min.js"></script>


        {/* <script src={jqueryjs}></script>
        <script src={bootstrapjs}></script>

        <script src={isotope}></script>
        <script src={carousel}></script>
        <script src={tabs}></script>
        <script src={popup}></script>
        <script src={custom}></script> */}


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
