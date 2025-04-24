import React from "react";
import PartnersSlider from "../molecules/PartnersSlider";

export default function AuthorizedPanelBuildersSection() {
  return (
    <section className="AuthorizedPanelBuilders py-20">
      <h2 className="text-4xl text-center pb-15">Authorized Panel Builders</h2>
      <div className="partnersSections-slider container">
        <PartnersSlider />
      </div>
    </section>
  );
}
