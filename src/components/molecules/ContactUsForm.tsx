import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const firstRowFields = [
  { id: "firstName", name: "firstName", label: "First Name", type: "text" },
  { id: "lastName", name: "lastName", label: "Last Name", type: "text" },
  { id: "email", name: "email", label: "Email", type: "email" },
];

const secondRowFields = [
  { id: "phone", name: "phone", label: "Phone", type: "tel" },
  { id: "inquiry", name: "inquiry", label: "Inquiry Type", type: "text" },
  {
    id: "hear",
    name: "hear",
    label: "How Did You Hear About Us?",
    type: "text",
  },
];

export default function ContactUsForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="grid gap-y-5 pb-15">
      <div className="first-row grid grid-cols-1 md:grid-cols-3 gap-5">
        {firstRowFields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.id} className="pb-3 text-gray-700">
              {field.label}
            </Label>
            <Input
              id={field.id}
              name={field.name}
              type={field.type}
              className="rounded-none border-gray-500"
            />
          </div>
        ))}
      </div>

      <div className="second-row grid grid-cols-1 md:grid-cols-3 gap-5">
        {secondRowFields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.id} className="pb-3 text-gray-700">
              {field.label}
            </Label>
            <Input
              id={field.id}
              name={field.name}
              type={field.type}
              className="rounded-none border-gray-500"
            />
          </div>
        ))}
      </div>

      <div className="message">
        <Label htmlFor="message" className="pb-3 text-gray-700">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          className="rounded-none border-gray-500"
        />
      </div>

      <div className=" checkbox-row flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className=" text-gray-700">
          I agree with
          <a href="#" className="underline text-blue-600">
            Terms of Use
          </a>
          and
          <a href="#" className="underline text-blue-600">
            Privacy Policy
          </a>
        </Label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-600 cursor-pointer hover:bg-red-700 text-white py-2 px-6 "
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
}
