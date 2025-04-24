import ContactUsForm from "@/components/molecules/ContactUsForm";
import ContactUsHeader from "@/components/molecules/ContactUsHeader";
import DynamicHeader from "@/components/molecules/DynamicHeader";

function ContactUs() {
  return (
    <>
      <DynamicHeader
        src="004.jpg"
        title="Contact Us"
        description="At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence."
      />
      <ContactUsHeader />
      <div className="container">
        <p className="py-5">
          Get answers to all your questions you might have. you might have.
        </p>
        <p className="pb-15">
          We're excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you're a prospective client, partner, or simply curious about
          our services, we're here to answer your questions and provide the
          assistance you need.
        </p>
        <ContactUsForm />
      </div>
    </>
  );
}

export default ContactUs;
