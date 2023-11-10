import "./Loader.css";

import React from "react";
import { motion } from "framer-motion";

// const SvgVar = {
//   hidden: { rotate: -180 },
//   visible: {
//     rotate: 0,
//     transition: { duration: 0.5 },
//   },
// };
// const PathVar = {
//   hidden: { opacity: 0, pathLength: 0 },
//   visible: { rotate: 360 ,
//     opacity: 1,
//     pathLength: 1,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };

const PathVar1 = {
  hidden: { opacity: 0, pathLength: 0, rotate: 180 },
  visible: {
    rotate: 0,
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const PathVar2 = {
  hidden: { opacity: 0, pathLength: 0, rotate: -360 },
  visible: {
    rotate: 0,
    type: "spring",
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", type: "spring" },
  },
};
const PathVar3 = {
  hidden: { opacity: 0, pathLength: 0, rotate: 360 },
  visible: {
    rotate: 0,
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", type: "spring" },
  },
};

const Loader = () => {
  return (
    <>
      <div className="ppreloader">
        <div className="preloader">
          <div className="loader_34">
            <div className="ytp-spinner">
              <motion.svg 
                // variants={SvgVar} 
                initial="hidden"
                animate="visible"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 512.000000 512.000000"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet" 
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#ff075b"
                  stroke="none"
                >
                  <motion.path
                    variants={PathVar1} 
                    d="M2749 3621 c-56 -18 -66 -28 -72 -81 -18 -155 -96 -337 -198 -466 -60 -75 -63 -81 -79 -173 -18 -99 -58 -227 -93 -296 -11 -22 -44 -78 -75 -125 -46 -72 -58 -100 -77 -186 -40 -174 -93 -284 -207 -422 -58 -70 -60 -75 -54 -115 9 -53 56 -128 106 -167 21 -17 69 -45 107 -62 58 -27 83 -32 163 -36 89 -3 99 -2 150 25 l55 28 12 88 c7 49 20 116 28 150 23 90 105 252 165 326 47 58 53 70 61 132 20 158 79 311 175 455 51 76 65 107 74 157 28 160 107 324 219 458 l31 36 -30 60 c-52 105 -160 187 -278 212 -60 12 -144 13 -183 2z"
                    fill="#ff075b"
                  >
                  </motion.path>
                  <motion.path
                    variants={PathVar2}
                    d="M1320 3340 c-92 -95 -150 -131 -275 -169 -62 -20 -76 -29 -131 -89 -74 -80 -172 -142 -292 -182 -79 -26 -89 -33 -107 -67 -29 -56 -26 -162 7 -234 l24 -54 -25 -55 c-22 -47 -26 -69 -26 -150 0 -136 10 -151 115 -174 132 -30 274 -110 364 -205 21 -22 53 -38 115 -57 123 -37 156 -57 247 -145 44 -44 88 -79 97 -79 35 0 142 63 191 113 89 90 132 221 107 332 -12 53 -14 55 -54 65 -164 42 -253 93 -343 195 -48 54 -61 63 -99 69 -55 7 -188 72 -182 89 5 17 122 84 192 109 49 18 75 37 140 104 86 88 124 111 255 158 l84 31 9 45 c11 56 -4 155 -34 216 -32 67 -122 159 -182 187 -100 47 -101 46 -197 -53z"
                    fill="#ff075b"
                  />
                  <motion.path
                    variants={PathVar3} 
                    d="M3660 3408 c-173 -66 -260 -178 -267 -343 -5 -111 1 -121 115 -160 110 -38 186 -88 244 -160 24 -29 52 -58 63 -64 11 -5 63 -30 115 -55 52 -25 109 -56 125 -70 l30 -24 -76 -37 c-42 -19 -93 -38 -115 -42 -31 -4 -52 -18 -104 -72 -103 -106 -167 -143 -322 -186 -66 -19 -78 -40 -78 -136 0 -142 82 -271 218 -342 39 -21 77 -37 87 -37 9 0 51 35 94 79 85 85 143 119 255 147 58 14 79 26 135 76 121 108 214 157 354 189 67 14 81 30 98 106 15 64 0 161 -33 226 l-20 41 22 45 c32 63 38 190 13 244 -17 35 -25 40 -107 68 -137 46 -258 123 -316 202 -27 36 -42 45 -133 77 -125 44 -175 77 -264 175 -37 41 -70 75 -73 74 -3 0 -30 -9 -60 -21z"
                    fill="#ff075b"
                  />
                </g>
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="preloader">
    //   <div className="loader_34">
    //     <div className="ytp-spinner">
    //       <div className="ytp-spinner-container">
    //         <div className="ytp-spinner-rotator">
    //           <div className="ytp-spinner-left">
    //             <div className="ytp-spinner-circle"></div>
    //           </div>
    //           <div className="ytp-spinner-right">
    //             <div className="ytp-spinner-circle"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Loader;
