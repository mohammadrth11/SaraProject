import EmphasisSection from "@/components/organisms/EmphasisSection";
import InfoSection from "@/components/molecules/InfoSection";
import Hero from "@/components/templates/home/Hero";
import { infoSections } from "@/api/infoSectionsData";
import ChooseUsSection from "@/components/organisms/ChooseUsSection";
import History from "@/components/molecules/HistorySection";
import WhereWeOperateSection from "@/components/molecules/WhereWeOperateSection";
import OurProductSection from "@/components/organisms/OurProductSection";
import PartnersSections from "@/components/organisms/PartnersSections";

function Home() {
  // const [SectionInformation ,setSectionInformation] =useState();

  // useEffect(
  //    ()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => setSectionInformation(json))
  // }   ,[])

  // const SectionInformation =[
  //   {
  //     title :"About Us",
  //     description1:"Sara Electrical is a professionally managed company widely known in the United Arab Emirates and the Gulf Regions. Sara Electrical was founded in the year 1994 by Mr Ghassan Mousa, whose keen business acumen has brought the company to its present position thereby widening its horizons, and reinforcing its stand in the electrical materials, LV & Control Switchgear panel building, industrial & building automation systems & smart solutions provider, energy management systems and industrial products market.",
  //     description2:"Being marketing oriented business and ISO9001 certified establishment, Authorized distributor and channel partner for many brands, and establishing divisions year after a year and expanding teams and visions were our goals and targets, as it helps us to satisfy our customers need.",
  //     description3:"The company has diversified into products, services and engineering values keeping up with the business development in UAE and in the region. With the myriad opportunities emerging as a result of the rapidly changing business scenario, Sara Electrical has moved ahead confidently with a fervent emphasis on Quality, Reliability, Energy & Sustainability and Cost Effectiveness. Thanks to the relentless patronage of its prestigious clientele, Sara Electrical now offers its services all over the UAE and sells to the entire Middle East, near Africa and the subcontinent.",
  //     image:"../../../public/01.png",
  //     direction :"rtl"

  //   },
  //   {

  //     title :"CEO Message",
  //     description1 :"Embark on a journey of innovation, unwavering commitment, and cutting-edge solutions as you delve into the rich profile of Sara Electrical. Since its inception in 1994 by Mr. Ghassan Mousa, the company has transformed into a dynamic force within the electrical materials and automation systems sector.",
  //     description2 :"With over 30 years of history and excellence, Sara Electrical has transitioned from its roots as a prominent supplier of generators and electrical power products to a diversified business encompassing low voltage, switchgear, industrial automation, building automation, and energy management.",
  //     description3 :"Explore our extensive array of products and solutions, ranging from cables and low voltage components to industrial automation and energy management systems. Within our trading division, Sara Electrical Supplies, we proudly stand as a leader in the distribution of electrical materials, equipment, and cables throughout the UAE market.",
  //     image :"../../../public/02.png",
  //     direction :"ltr"
  //   },
  //   {

  //     title :"CEO Message",
  //     description1 :"Embark on a journey of innovation, unwavering commitment, and cutting-edge solutions as you delve into the rich profile of Sara Electrical. Since its inception in 1994 by Mr. Ghassan Mousa, the company has transformed into a dynamic force within the electrical materials and automation systems sector.",
  //     description2 :"With over 30 years of history and excellence, Sara Electrical has transitioned from its roots as a prominent supplier of generators and electrical power products to a diversified business encompassing low voltage, switchgear, industrial automation, building automation, and energy management.",
  //     description3 :"Explore our extensive array of products and solutions, ranging from cables and low voltage components to industrial automation and energy management systems. Within our trading division, Sara Electrical Supplies, we proudly stand as a leader in the distribution of electrical materials, equipment, and cables throughout the UAE market.",
  //     image :"../../../public/02.png",
  //     direction :"ltr"
  //   },
  // ]

  return (
    <div className="">
      <Hero />

      {/* {SectionInformation?.map((section, index) => (
        <InfoSection
         key={index}
         title={section.title}
        />
      ))
      } */}
      {infoSections.map((section, index) => (
        <InfoSection
          key={index}
          title={section.title}
          description1={section.description1}
          description2={section.description2}
          description3={section.description3}
          image={section.image}
          direction={section.direction}
        />
      ))}

      <EmphasisSection />
      <ChooseUsSection />
      <History />
      <WhereWeOperateSection />
      <OurProductSection />
      <PartnersSections />
    </div>
  );
}

export default Home;
