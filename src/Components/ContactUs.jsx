import { BiSolidRightArrow } from "react-icons/bi";
import Button from "./Button";
import { PiPhoneCallThin } from "react-icons/pi";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
// import { CiMail } from "react-icons/ci";

export default function ContactUs() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters ")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
  });

  const handleSubmit = (formdata, { resetForm }) => {
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_ID,"public");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formdata.name,
          email: formdata.email,
          message: formdata.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          toast.success(
            "Email sent successfully! The service team will reply to you as soon as possible."
          );
          resetForm();
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="md:flex mt-40 md:space-x-10 items-start bg-white rounded-md p-10">
        <div data-aos="fade-down" className="md:w-5/12 relative ">
          <h1 className="text-6xl">Contact</h1>
        </div>

        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">HOW CAN WE HELP?</h1>
          </div>

          <h1 className="text-2xl text-black font-mono">
            Near Ragam Club , Kollanoor
            <br />
            Kumaranellur - 679 552
            <br />
            <br />
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:919746061660">9746061660</a>
            </div>
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:918606548795">8606548795</a>
            </div>
            <div className="flex gap-4">
              <PiPhoneCallThin />
              <a href="tel:919072735020">9072735020</a>
            </div>
            {/* <br />
            <div className="flex gap-4">
            <CiMail />
              <a href="mailto:camviewsolutions5020@gmail.com">
                camviewsolutions5020@gmail.com
              </a>
            </div> */}
          </h1>
        </div>
      </div>

      <div className="md:flex mt-40 md:space-x-10 items-start">
        <img
          className="relative rounded-lg z-40 sm:w-3/6 floating pt-8"
          src="/assets/contact.webp"
          alt=""
        />
        <div
          data-aos="fade-down"
          className="md:w-7/12 mt-20 md:mt-0 text-gray-500"
        >
          <div className="flex">
            <BiSolidRightArrow className="text-black text-md" />
            <h1 className="pl-4 pb-5">CONTACT US</h1>
          </div>

          <h1 className="text-4xl font-mono">
            Tell us about your next project
          </h1>
          <br />
          <hr />
          <br />
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="p-4">
                <p>FULL NAME *</p>

                <Field
                  name="name"
                  type="text"
                  className="w-full  border-none bg-gray-50"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-600 "
                />

                <p className="mt-5">EMAIL *</p>
                <Field
                  name="email"
                  type="email"
                  className="w-full  border-none bg-gray-50"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-600 "
                />
                <p className="mt-5">MESSAGE *</p>
                <Field
                  as="textarea"
                  name="message"
                  id=""
                  rows="4"
                  className="w-full  border-none bg-gray-50"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-sm text-red-600 "
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full h-12 font-mono text-2xl hover:bg-white hover:text-black transition-colors duration-700"
                >
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Button name="See our projects" link="/projects" />
    </>
  );
}
