import PartnersSlider from "../molecules/PartnersSlider";

export default function PartnersSections() {
  return (
    <div className="PartnersSections min-h-[50vh] bg-[url('/Vector.jpg')] bg-cover bg-center w-full flex flex-col items-center py-16">
      <div className="partnersSections-title mb-8">
        <p className="text-4xl text-center ">Our Partners</p>
      </div>

      <div className="partnersSections-slider container">
        <PartnersSlider />
      </div>
    </div>
  );
}
