import { footerLinks } from "@/api/footerData";

export default function Footer() {
  return (
    <footer className="  bg-[#191970] text-white ">
      <div className="footer-fisrt container pt-10 flex flex-col md:flex-row items-center justify-between text-start gap-x-20 gap-y-10">
        <div className="description w-full md:w-1/4">
          <img src="/logo.svg" alt="sara-logo" className="pb-5" />
          <p className="text-sm leading-relaxed">
            Sara Electrical is a professionally managed company widely known in
            the United Arab Emirates and the Gulf Regions.Sara Electrical is a
            professionally managed company widely known in the United Arab
            Emirates and the Gulf Regions.
          </p>
        </div>
        <div className="line hidden md:block w-px h-60 bg-gray-300"></div>
        <div className="list  flex flex-wrap justify-between gap-y-10 gap-x-3  md:w-3/4 ">
          {footerLinks.map((section, idx) => (
            <ul key={idx}>
              <li className="font-bold mb-2 text-white">{section.title}</li>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm hover:text-white transition duration-200 cursor-pointer pb-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="footer-second container flex flex-col md:flex-row items-center justify-between gap-y-5 py-10">
        <p>All rights reserved Sara Electrical © 2024</p>
        <div className="social-media flex flex-row items-center justify-between gap-5">
          <a href="#">
            <img
              src="../../../public/social-media-1.svg"
              alt="social-media-pic"
            />
          </a>
          <a href="#">
            <img
              src="../../../public/social-media-2.svg"
              alt="social-media-pic"
            />
          </a>
          <a href="#">
            <img
              src="../../../public/social-media-3.svg"
              alt="social-media-pic"
            />
          </a>
          <a href="#">
            <img
              src="../../../public/social-media-4.svg"
              alt="social-media-pic"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="  bg-[#191970] text-white ">
//       <div className="footer-fisrt container pt-10 flex flex-col md:flex-row items-center justify-between text-start gap-x-20">
//         <div className="description w-full md:w-1/4">
//           <img src="/logo.svg" alt="sara-logo" className="pb-5" />
//           <p className="text-sm leading-relaxed">
//             Sara Electrical is a professionally managed company widely known in
//             the United Arab Emirates and the Gulf Regions.Sara Electrical is a
//             professionally managed company widely known in the United Arab
//             Emirates and the Gulf Regions.
//           </p>
//         </div>
//         <div className="line hidden md:block w-px h-60 bg-gray-300"></div>
//         <div className="list w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6  text-gray-300">
//           <ul>
//             <li className="font-bold text-white">Who We Are</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               About Us
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               CEO
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Our Emphasis
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Why Choose Us
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               History & Excellence
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Our Partners
//             </li>
//           </ul>
//           <ul>
//             <li className="font-bold text-white">Divisions</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Trading
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Switchgear
//             </li>
//           </ul>
//           <ul>
//             <li className="font-bold text-white">Our Companies</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Sara Engineering & Energy
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Sara Digital
//             </li>
//           </ul>
//           <ul>
//             <li className="font-bold text-white">Projects</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Trading
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Switchgear
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Building Automation
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Industry Automation
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Energy
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Software
//             </li>
//           </ul>
//           <ul>
//             <li className="font-bold text-white">Shop</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               By Brand
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               By Category
//             </li>
//           </ul>
//           <ul>
//             <li className="font-bold text-white">Contact Us</li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Contact Form
//             </li>
//             <li className="hover:text-white cursor-pointer transition duration-100">
//               Privacy Policy
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-second container flex flex-col md:flex-row items-center justify-between py-10">
//         <p>All rights reserved Sara Electrical © 2024</p>
//         <div className="social-media flex flex-col md:flex-row items-center justify-between gap-x-5">
//           <a href="#">
//             <img
//               src="../../../public/social-media-1.svg"
//               alt="social-media-pic"
//             />
//           </a>
//           <a href="#">
//             <img
//               src="../../../public/social-media-2.svg"
//               alt="social-media-pic"
//             />
//           </a>
//           <a href="#">
//             <img
//               src="../../../public/social-media-3.svg"
//               alt="social-media-pic"
//             />
//           </a>
//           <a href="#">
//             <img
//               src="../../../public/social-media-4.svg"
//               alt="social-media-pic"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
