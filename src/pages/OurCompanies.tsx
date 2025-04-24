import DynamicHeader from "@/components/molecules/DynamicHeader";
import CompaniesSection from "@/components/organisms/CompaniesSection";

export default function OurCompanies() {
  return (
    <>
      <DynamicHeader
        src="002.jpg"
        title="Our Companies"
        description="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
      />

      <CompaniesSection
        image="../../public/07.png"
        logo="../../public/saralogo2.svg"
        description1="Sara Electrical Supplies (Trading Division) would like to take this opportunity to introduce itself as one of the best distribution channels in the supply chains of electrical materials, equipment’s, cables and electrical building materials accessories in the UAE market."
        description2="Sara Electrical  since A group that is satisfied on multiple aspects; price competitiveness, quality and complementary products, and prompt deliveries."
        direction="ltr"
        feature1="../../public/CompanyFeatuerBox1.svg"
        feature2="../../public/CompanyFeatuerBox2.svg"
        feature3="../../public/CompanyFeatuerBox3.svg"
      />
      <CompaniesSection
        image="../../public/08.png"
        logo="../../public/saralogo1.svg"
        description1="Sara Electrical Supplies (Trading Division) would like to take this opportunity to introduce itself as one of the best distribution channels in the supply chains of electrical materials, equipment’s, cables and electrical building materials accessories in the UAE market."
        description2="Sara Electrical  since A group that is satisfied on multiple aspects; price competitiveness, quality and complementary products, and prompt deliveries."
        direction="rtl"
        feature1="../../public/CompanyFeatuerBox4.svg"
        feature2="../../public/CompanyFeatuerBox5.svg"
        // feature3="../../public/CompanyFeatuerBox3.svg"
      />
    </>
  );
}
