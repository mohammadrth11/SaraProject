import DynamicHeader from "@/components/molecules/DynamicHeader";
import InfoSection from "@/components/molecules/InfoSection";
import AuthorizedPanelBuildersSection from "@/components/organisms/AuthorizedPanelBuildersSection";
import OurPartners from "@/components/organisms/OurPartners";
import Switchgear from "@/components/organisms/Switchgear";

export default function Divisions() {
  return (
    <>
      <DynamicHeader
        src="001.jpg"
        title="Divisions"
        description="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
      />
      <InfoSection
        title="Trading Division Overview"
        firstPara="Trading Division OverviewTrading Division OverviewFurthermore, Sara Electrical (Trading Division) are one of the Authorized distributor and channel partner of Schneider Electric, Eaton Electric, Lovato Electric, Bahra Electric (Cables & Wires, PVC Conduits & Accessories and Earthling Systems), Decoduct, Tekab, Ducab, National Cable, Jeddah Cable and Ducab BICC & Connect."
        secondPara="Sara Electrical Supplies (Trading Division) would like to take this opportunity to introduce itself as one of the best distribution channels in the supply chains of electrical materials, equipment’s, cables and electrical building materials accessories in the UAE market."
        thirdPara="Sara Electrical Supplies are one of the market distributions and reselling leader for multinational and local electrical manufacturers, In Sara Electrical Supplies estimation and design team are qualified and trained enough to serve their customer by satisfying needs and complying all technical specifications consultants, contractors and end users’ specifications and requirements, as of that Sara Electrical been market oriented and ISO Quality certified."
        image="../../public/05.png"
        direction="ltr"
      />
      <OurPartners />
      <InfoSection
        title="TSwitchgear Panel Building Division Overview"
        firstPara="Sara Electrical Switchgear have been type tested at ASEFA testing facility in France in Schneider Electric, under the stringent standards of IEC-61439-1, 2, 3 & 4, rated from 400A up to 2500 A, which cover."
        secondPara="verification of temperature rise, short circuit withstand strength, electromagnetic compatibility and mechanical operation. Thus, with routine tests of individual deliverables, the quality of the products is assured and the customer can trust that products supplied from Sara Electrical are delivered with confidence."
        thirdPara="verification of temperature rise, short circuit withstand strength, electromagnetic compatibility and mechanical operation. Thus, with routine tests of individual deliverables, the quality of the products is assured and the customer can trust that products supplied from Sara Electrical are delivered with confidence."
        fourthPara="verification of temperature rise, short circuit withstand strength, electromagnetic compatibility and mechanical operation. Thus, with routine tests of individual deliverables, the quality of the products is assured and the customer can trust that products supplied from Sara Electrical are delivered with confidence."
        image="/06.png"
        direction="ltr"
      />
      <Switchgear />
      <AuthorizedPanelBuildersSection />
    </>
  );
}
