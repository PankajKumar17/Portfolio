import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const [isLoading, setisloading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.", { position: "bottom-right" });
    } else {
      setisloading(true);
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            time: formData.email,
            message: formData.message,
          },
          userId
        )
        .then(
          () => {
            setisloading(false);
            toast.success(
              "Thank you for your message! I'll get back to you soon.",
              {
                position: "bottom-right",
                style: {
                  background: "#fefefe",
                  color: "#000000",
                  fontWeight: "bold",
                },
              }
            );
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.", {
              position: "bottom-right",
            });
          }
        );
    }
  };

  return (
    <section className="bg-[#00000f] text-white pt-8 pb-6 px-28">
      <div className="max-w-[100vw] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Get in Touch - Let's Connect
        </h2>

        <div className="flex items-center justify-between gap-6 mx-26">
          <div className="flex-1 w-[40vw]">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  name="name"
                  label="Your name"
                  placeholder="What's your good name?"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  name="email"
                  label="Your Email"
                  placeholder="What's your email address?"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  label="Your Message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full bg-[#8a47c5] text-black font-semibold py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center gap-3 group hover:bg-gradient-to-r hover:from-[#9650d3] hover:to-[#6d28d9] hover:text-white hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-lg ${
                  isLoading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <span className="transition-all duration-300 flex items-center">
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span className="mr-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-12 group-active:translate-x-6 group-active:opacity-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-80 group-active:translate-x-6 group-active:opacity-0">
                        SEND MESSAGE
                      </span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="right w-[30vw] h-[60vh] flex items-center justify-center ml-[10vw]">
            <iframe
              src="https://lottie.host/embed/ca27e9a3-64b7-4f24-80b4-e2128c6395f6/N6QEd1t2GS.lottie"
              width="100%"
              height="100%"
              style={{
                minWidth: "350px",
                minHeight: "350px",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="line bg-slate-400 w-full h-[2px] rounded-2xl my-4"></div>
          <divp className="text-gray-400 text-sm flex items-center justify-between">
            <p>📞 +91 7027009709</p>
            <div className="icons h-[24px] p-0 m-0 flex gap-4 items-center justify-center">
              <a
                href="https://www.linkedin.com/in/pankaj261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 h-[24px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/PankajKumar17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 h-[24px]"
              >
                <svg
                  height="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="24"
                  data-view-component="true"
                  fill="currentColor"
                >
                  <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                </svg>
              </a>
              <a
                href="https://codeforces.com/profile/pankaj_kumar_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 h-[24px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title>Codeforces icon</title>
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                </svg>
              </a>
            </div>
            <p>📧 pankajkumar230261@gmail.com</p>
          </divp>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
