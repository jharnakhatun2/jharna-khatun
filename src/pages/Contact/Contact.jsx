import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'; 
import SocialIcon from "../../components/HomeContent/SocialIcon";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2f62r5a", "template_vqmwm0f", form.current, {
        publicKey: "D5XjNpYCYdq7jHIaM",
      })
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED");
        }
      );
  };

  return (
    <>
      {/*---------------- Contact page --------------------*/}
      <div>
        {/* Contact info */}
        <div className="sm:flex items-center mx-auto text-[#333]">
          <div className="sm:w-2/4">
            <h1 className="text-3xl font-extrabold">Let's Talk</h1>
            <p className="w-full sm:w-3/4 text-sm text-gray-500 mt-3">
              Have some big idea or brand to develop and need help? Then reach
              out! I'd love to hear about your project and provide help.
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#000"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:jharnakhatun203@gmail.com"
                    className="text-primary text-sm ml-3"
                  >
                    <span>jharnakhatun203@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Icons Start */}
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Socials</h2>
              <div className="flex">
                <SocialIcon />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="sm:w-1/2 my-12">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <div>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md p-4 border border-zinc-400 text-sm outline-white bg-white bg-opacity-0"
                  required
                />
                <small />
              </div>
              <div>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md p-4 border border-zinc-400 text-sm outline-white bg-white bg-opacity-0"
                  required
                />
                <small />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md px-4 border border-zinc-400 text-sm pt-2.5 outline-white bg-white bg-opacity-0"
                  defaultValue={""}
                  required
                />
                <small />
              </div>

              {/* Show status message */}
              {status && (
                <div
                  className={`mt-4 text-sm text-center ${
                    status === "SUCCESS" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status === "SUCCESS"
                    ? "Message Sent Successfully!"
                    : "Failed to Send Message. Please Try Again."}
                </div>
              )}

              <button
                type="submit"
                className="bg-zinc-500 hover:bg-white font-semibold rounded-md text-sm p-4 w-full uppercase  transition-all text-white hover:text-zinc-500 hover:shadow"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
