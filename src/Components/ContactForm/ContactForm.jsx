import React, { useState } from "react";
import johnKeith from "../../assets/HERO SM/IMG_20210703_121346.jpg";

// input field component
const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  errorMessage,
  required = false,
  className = "",
  ...props
}) => (
  <div className={className}>
    <label htmlFor={id} className="block font-medium mb-1">
      {label} {required && <span className="text-red-600">*</span>}{" "}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full py-2 px-3 rounded-md border-2 ${
        error
          ? "border-red-600" // Use theme color for error
          : "dark:border-gray-200" // Neutral border
      }   focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600  transition duration-150 ease-in-out`}
      {...props}
    />
    {error && <p className="text-red-600 text-xs mt-1">{errorMessage}</p>}
  </div>
);

// text field comp
const TextareaField = ({
  id,
  label,
  value,
  onChange,
  error,
  errorMessage,
  required = false,
  rows = 4,
  className = "",
}) => (
  <div className={className}>
    <label htmlFor={id} className="block font-medium mb-1">
      {label} {required && <span className="text-red-600">*</span>}{" "}
    </label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      value={value}
      onChange={onChange}
      className={`w-full py-2 px-3 rounded-md border-2 ${
        error ? "border-red-600" : "border-gray-300 "
      } focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600  transition duration-150 ease-in-out resize-y`}
    ></textarea>
    {error && <p className="text-red-600 text-xs mt-1">{errorMessage}</p>}
  </div>
);

// --- Social Link Component ---
const SocialLink = ({ href, IconComponent, label }) => (
  <li className="flex items-center gap-3 py-2">
    <IconComponent className="flex-shrink-0 w-[30px] h-[30px] fill-current" />{" "}
    {/* Use fill-current */}
    <a
      href={href}
      className="font-medium transition-colors hover:text-red-600 dark:hover:text-red-400" // Adjusted hover for dark
    >
      {label}
    </a>
  </li>
);

// --- SVG Icons (as functional components for cleaner use) ---
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    {" "}
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />{" "}
  </svg>
);
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    {" "}
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />{" "}
  </svg>
);
const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    {" "}
    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />{" "}
  </svg>
);

// --- Modal Component ---
const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  return (
    <div className="modal fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4 bg-white">
      <div className="card p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-600">
          Submission Successful!
        </h2>
        <p className="mb-4">Here's the information you submitted:</p>
        <div className="mb-6 space-y-2">
          <p>
            <strong>Full Name:</strong> {data.fullName}
          </p>
          <p>
            <strong>Contact Method:</strong>{" "}
            <span className="capitalize">{data.contactMethod}</span>
          </p>
          {/* Show submitted email/phone regardless of method, if entered */}
          {data.email && (
            <p>
              <strong>Email:</strong> {data.email}
            </p>
          )}
          {data.phone && (
            <p>
              <strong>Phone:</strong> {data.phone}
            </p>
          )}
          <p>
            <strong>Comments:</strong> {data.comments}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-4 py-2 px-4 bg-red-600 hover:bg-red-600 font-semibold rounded-md transition-colors duration-150 ease-in-out text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// --- Main Contact Form Component ---
const ContactForm = () => {
  const initialFormData = {
    fullName: "",
    contactMethod: "email", // Default contact method
    email: "",
    phone: "",
    comments: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { id, name, value, type } = e.target;
    const fieldName = type === "radio" ? name : id;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    // Clear validation error for the *other* contact field when method changes
    if (fieldName === "contactMethod") {
      const otherField = value === "email" ? "phone" : "email";
      setErrors((prev) => ({ ...prev, [otherField]: null }));
    }
  };

  // Simplified validation logic - checks required fields based on selection
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Always validate name and comments
    if (!formData.fullName || !formData.fullName.includes(" ")) {
      newErrors.fullName = "First and last name required.";
      isValid = false;
    }
    if (!formData.comments) {
      newErrors.comments = "Comments are required.";
      isValid = false;
    }

    // Validate email *if* it's the chosen method OR if it's filled out partially
    if (formData.contactMethod === "email") {
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Valid email required for chosen contact method.";
        isValid = false;
      }
    } else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      // Validate even if not chosen method, but user started typing an invalid email
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate phone *if* it's the chosen method OR if it's filled out partially
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (formData.contactMethod === "phone") {
      if (!formData.phone || phoneDigits.length !== 10) {
        newErrors.phone =
          "10-digit phone number required for chosen contact method.";
        isValid = false;
      }
    } else if (formData.phone && phoneDigits.length !== 10) {
      // Validate even if not chosen method, but user started typing an invalid phone
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmittedData(formData);
      setIsModalOpen(true);
      setFormData(initialFormData);
      setErrors({});
    } else {
      console.log("Validation failed", errors);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmittedData(null);
  };

  // Determine if email/phone fields are *required* based on selection
  const isEmailRequired = formData.contactMethod === "email";
  const isPhoneRequired = formData.contactMethod === "phone";

  return (
    <section id="contact" className="py-2 my-12">
      <div className="mb-16 px-4">
        <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Contact
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Get in <span className="text-red-600">Touch</span>
        </h2>

        <p>
          Have questions about memberships, classes, or events? Reach out to us
          — we'd love to hear from you and help however we can.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 card rounded-lg shadow-lg p-6 md:p-8">
          {/* --- Left Column --- */}
          <div className="md:w-2/5 lg:w-1/3 flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Contact Us</h2>
            <p className="mb-6">
              Reach out to us by filling out the form, or find us on social
              media.
            </p>
            <img
              src={johnKeith}
              alt="Coach John Botello with student"
              className="w-full rounded-lg shadow-md mb-6 aspect-square object-cover"
            />
            <h3 className="font-semibold mb-3 text-red-600">
              Find us on social media
            </h3>
            <ul className="list-none p-0 space-y-1">
              <SocialLink
                href="https://www.facebook.com/10thplanetphx/"
                IconComponent={FacebookIcon}
                label="Facebook"
              />
              <SocialLink
                href="https://www.instagram.com/10thplanetphx/"
                IconComponent={InstagramIcon}
                label="Instagram"
              />
              <SocialLink
                href="https://www.youtube.com/@10thplanetjjphx"
                IconComponent={YoutubeIcon}
                label="Youtube"
              />
            </ul>
          </div>

          {/* --- Right Column (Form) --- */}
          <div className="md:w-3/5 lg:w-2/3">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <h3 className="text-xl font-semibold mb-5 text-center md:text-left ">
                Send us a message
              </h3>
              {/* Grid for Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  id="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  errorMessage={errors.fullName}
                  required // Name is always required
                  className="sm:col-span-2"
                />

                {/* Contact Method Selection */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Preferred Contact Method{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={isEmailRequired}
                        onChange={handleChange}
                        className="mr-2 accent-red-600 focus:ring-red-600"
                      />
                      Email
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={isPhoneRequired}
                        onChange={handleChange}
                        className="mr-2 accent-red-600 focus:ring-red-600"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                {/* Email Input Field (Always Visible) */}
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  errorMessage={errors.email}
                  required={isEmailRequired} // Required only if method is email
                  // Takes one column on sm+ screens
                />

                {/* Phone Input Field (Always Visible) */}
                <InputField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  errorMessage={errors.phone}
                  required={isPhoneRequired} // Required only if method is phone

                  // Takes one column on sm+ screens
                />

                <TextareaField
                  id="comments"
                  label="Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  error={!!errors.comments}
                  errorMessage={errors.comments}
                  required // Comments always required
                  className="sm:col-span-2"
                />
              </div>{" "}
              {/* End Grid */}
              <button
                className="w-full mt-6 py-2.5 px-6 bg-red-600 hover:bg-red-700  font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-white"
                type="submit"
              >
                Submit Message
              </button>
              <p className=" text-center mt-4">
                We appreciate your message! Expect a reply within 3-5 business
                days. For urgent matters, call{" "}
                <a
                  href="tel:480-553-0009"
                  className="font-medium text-red-600 hover:underline dark:text-red-400"
                >
                  480-553-0009
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={submittedData} />
    </section>
  );
};

export default ContactForm;
