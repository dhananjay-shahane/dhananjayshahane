import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contactus() {
  // Function to send email using EmailJS
  const sendEmail = (values, actions) => {
    emailjs
      .send(
        "service_o3ctp3f",
        "template_9qp9767",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "bLDTBxPTjMhRKS9T6" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        actions.resetForm(); // Reset the form after successful submission
        toast.success("Your message has been sent successfully!"); // Success toast
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send your message, please try again."); // Error toast
      })
      .finally(() => {
        actions.setSubmitting(false); // Stop the submitting state
      });
  };

  return (
    <main className="overflow-x-hidden p-4">
      <Helmet>
        <title>Contact us | Dhananjay Shahane</title>
      </Helmet>
      <div className="receptacle mt-5 size-full max-w-7xl mx-auto overflow-hidden md:mt-10 md:w-2/3 md:py-0 xl:w-2/5">
        <h1 className="mb-5 text-center font-epilogue text-4xl font-bold md:mb-10 md:text-6xl">
          Contact
        </h1>

        <h2 className="mb-2 text-start font-epilogue text-lg font-semibold text-neutral-900 md:mb-5 md:text-2xl">
          Book a quick call?
        </h2>

        <a
          className="flex w-full cursor-pointer flex-col space-y-5 rounded-xl border border-neutral-300 bg-white bg-gradient-to-tr px-6 py-5 transition-all duration-300 hover:scale-[101%] hover:shadow-sm"
          href="https://cal.com/dhananjayshahane/30min"
          target="_blank"
        >
          <div className="flex items-start justify-between gap-5">
            <div className="space-y-0.5">
              <h3 className="text-start font-epilogue font-bold text-neutral-900 md:text-xl">
                1 on 1 Chit-chat Session
              </h3>
              <p className="text-sm md:text-base">
                Let's find some time to chat! Whether it's about a project, a
                query, or just for a casual conversation, It's just one click
                away!
              </p>
            </div>
            <div className="rounded-full border-2 border-neutral-400 p-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                className="size-5 text-neutral-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 md:justify-normal">
            <div className="flex items-center gap-1.5">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                className="size-5 text-neutral-800"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 10"></polyline>
              </svg>
              <p className="text-base">30 Minutes</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="size-5 text-neutral-800"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"></path>
              </svg>
              <p className="text-base">Google Meet</p>
            </div>
          </div>
        </a>
        <h2 className="mt-5 text-start font-epilogue text-lg font-semibold text-neutral-900 md:mb-5 md:text-2xl">
          Drop a message!
        </h2>

        {/* Form Section */}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div className="space-y-1.5">
                <Field
                  className="w-full rounded-xl border-0 bg-white p-3 text-base text-neutral-900 outline-none placeholder:text-base placeholder:text-neutral-600 md:p-3.5 md:text-xl md:placeholder:text-lg"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Field
                  className="w-full rounded-xl border-0 bg-white p-3 text-base text-neutral-900 outline-none placeholder:text-base placeholder:text-neutral-600 md:p-3.5 md:text-xl md:placeholder:text-lg"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Field
                  as="textarea"
                  className="min-h-full w-full rounded-xl border-0 bg-white p-3 text-base text-neutral-900 outline-none placeholder:text-base placeholder:text-neutral-600 md:p-3.5 md:text-xl md:placeholder:text-lg"
                  name="message"
                  rows="4"
                  placeholder="What's on your mind?"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2.5 w-full rounded-md border-2 border-neutral-900 bg-white px-10 py-2.5 font-semibold uppercase text-neutral-900 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-neo active:translate-x-0 active:translate-y-0 active:rounded-md active:shadow-none disabled:pointer-events-none disabled:bg-neutral-800 disabled:text-white"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Add toast container to render toast messages */}
        <ToastContainer />
      </div>
    </main>
  );
}
