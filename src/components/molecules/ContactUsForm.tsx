import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import MainBtn from "../atoms/Buttoms";

export default function ContactUsForm() {
  return (
    <form className="grid gap-y-5 pb-15">
      <div className="first-row grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <Label htmlFor="firstName" className="pb-3 text-gray-700">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            className="rounded-none border-gray-500"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="pb-3 text-gray-700">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            className="rounded-none border-gray-500"
          />
        </div>
        <div>
          <Label htmlFor="email" className="pb-3 text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="rounded-none border-gray-500"
          />
        </div>
      </div>

      <div className="second-row grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <Label htmlFor="phone" className="pb-3 text-gray-700">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            className="rounded-none border-gray-500"
          />
        </div>
        <div>
          <Label htmlFor="inquiry" className="pb-3 text-gray-700">
            Inquiry Type
          </Label>
          <Input
            id="inquiry"
            type="text"
            className="rounded-none border-gray-500"
          />
        </div>
        <div>
          <Label htmlFor="hear" className="pb-3 text-gray-700">
            How Did You Hear About Us?
          </Label>
          <Input
            id="hear"
            type="text"
            className="rounded-none border-gray-500"
          />
        </div>
      </div>

      <div className="message">
        <Label htmlFor="message" className="pb-3 text-gray-700">
          Message
        </Label>
        <Textarea
          id="message"
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

      <div className="send-message flex justify-end">
        <MainBtn title="Send Your Message" link="#" color="red" />
      </div>
    </form>
  );
}
