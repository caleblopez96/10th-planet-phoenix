import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactMethod: "email",
    email: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    contactMethod: false,
    email: false,
    phone: false,
    comments: false,
  });

  const handleChange = (e) => {
    const { id, name, value, type } = e.target;

    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: !formData.fullName.includes(" "),
      contactMethod: !formData.contactMethod,
      comments: !formData.comments,
      email:
        formData.contactMethod === "email" &&
        (!formData.email || !formData.email.includes("@")),
      phone:
        formData.contactMethod === "phone" &&
        (!formData.phone || formData.phone.length < 10),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        contactMethod: "email",
        email: "",
        phone: "",
        comments: "",
      });
    }
  };

  return (
    <section id="contact" className="py-8 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col bg-black/5 dark:bg-white/5 dark:border dark:border-white/10 rounded-lg shadow-lg p-6 min-h-[850px]">
          <h2 className="text-2xl font-bold text-red-500 m-0">Contact Us</h2>
          <p className="font-sans">Reach out to us by filling out the form</p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Find us on social media
          </h3>
          <ul className="list-none p-0 mb-3">
            <li className="flex items-center gap-3 mb-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="flex-shrink-0"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
              <a
                href="#"
                className="no-underline text-gray-800  font-medium transition-colors hover:text-red-500 dark:hover:text-red-500"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3 mb-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="flex-shrink-0"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
              <a
                href="#"
                className="no-underline font-medium transition-colors hover:text-red-500 dark:hover:text-red-500"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-3 mb-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="flex-shrink-0"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
              <a
                href="#"
                className="no-underline font-medium transition-colors hover:text-red-500 dark:hover:text-red-500"
              >
                Youtube
              </a>
            </li>
          </ul>

          <img
            src="Assets/contact/johnstudent.jpg"
            alt="Coach John Botello with student"
            className="w-full max-w-md h-64 object-cover object-top rounded-lg my-6 shadow-md"
          />
        </div>

        <form
          id="contactForm"
          className="flex-1 bg-black/5 dark:bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-lg min-h-[850px]"
          onSubmit={handleSubmit}
        >
          <h3 className="mt-0 mb-6 text-xl text-red-500 text-center font-semibold">
            Send us a message
          </h3>

          <label htmlFor="fullName" className="block mt-6 mb-2 font-semibold">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full py-3 px-3 my-2 rounded-md border-2 ${
              errors.fullName
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-white/90 dark:bg-black/20 dark:text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200/20`}
          />
          <p
            className={`text-red-500 text-sm mb-3 ${
              !errors.fullName ? "hidden" : "block"
            }`}
          >
            First name and last name are required
          </p>

          <label className="block mt-6 mb-2 font-semibold ">
            Preferred Method of Contact *
          </label>

          <div className="flex gap-6 mt-3">
            <label className="inline-flex items-center font-normal">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === "email"}
                onChange={handleChange}
                className="mr-3 accent-red-500"
              />
              Email
            </label>
            <label className="inline-flex items-center font-normal">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={handleChange}
                className="mr-3 accent-red-500"
              />
              Phone
            </label>
          </div>
          <p
            className={`text-red-500 text-sm mb-3 ${
              !errors.contactMethod ? "hidden" : "block"
            }`}
          >
            Please select a contact method.
          </p>

          <label htmlFor="email" className="block mt-6 mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-3 my-2 rounded-md border-2 ${
              errors.email
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-white/90 dark:bg-black/20 dark:text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200/20`}
          />
          <p
            className={`text-red-500 text-sm mb-3 ${
              !errors.email ? "hidden" : "block"
            }`}
          >
            Please enter a valid email address.
          </p>

          <label htmlFor="phone" className="block mt-6 mb-2 font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full py-3 px-3 my-2 rounded-md border-2 ${
              errors.phone
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-white/90 dark:bg-black/20 dark:text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200/20`}
          />
          <p
            className={`text-red-500 text-sm mb-3 ${
              !errors.phone ? "hidden" : "block"
            }`}
          >
            Please enter a valid phone number.
          </p>

          <label htmlFor="comments" className="block mt-6 mb-2 font-semibold">
            Comments *
          </label>
          <textarea
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            className={`w-full py-3 px-3 my-2 rounded-md border-2 ${
              errors.comments
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-white/90 dark:bg-black/20 dark:text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200/20 resize-y min-h-32`}
          ></textarea>
          <p
            className={`text-red-500 text-sm mb-3 ${
              !errors.comments ? "hidden" : "block"
            }`}
          >
            Comments are required.
          </p>

          <button
            className="w-full my-6 py-3 px-6 bg-red-500 text-white font-semibold rounded-md border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
