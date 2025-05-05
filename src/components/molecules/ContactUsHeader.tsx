import { socialMediaIconsData } from "@/api/social-media-icons";

export default function ContactUsHeader() {
  return (
    <div className="ContactUsHeader  py-20 bg-[url('/Vector.jpg')] bg-cover bg-center relative  w-full flex ">
      <div className=" container text-white flex items-center justify-between flex-col md:flex-row flex-wrap gap-y-5">
        <div className="email bg-[#191970] w-70 h-25 flex gap-x-3 items-center justify-center">
          <img src="../../../public/contactUsIcon1.svg" alt="" />
          <a href="">Sales@Example.com</a>
        </div>
        <div className="telephone bg-[#191970] w-70 h-25 flex gap-x-3 items-center justify-center">
          <img src="../../../public/contactUsIcon2.svg" alt="" />
          <a href="">+1 (123) 456-7890</a>
        </div>
        <div className="location bg-[#191970] w-70 h-25 flex gap-x-3 items-center justify-center">
          <img src="../../../public/contactUsIcon3.svg" alt="" />
          <a href="">Headquarters</a>
        </div>
        <div className="social-media flex flex-row items-center justify-center gap-5 bg-[#191970] w-70 h-25">
          {socialMediaIconsData?.map((ele) => (
            <a href={ele.src}>
              <img src={ele.image} alt={ele.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
