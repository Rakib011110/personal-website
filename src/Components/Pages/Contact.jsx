import React from "react";

const ContactWithMe = () => {
  return (
    <div className="">
      <div className="text-white text-3xl text-center mt-10 uppercase border-b w-80 mx-auto ">
        <h1> Contact With Me</h1>
      </div>
      <div className=" text-gray-200  flex items-center justify-center p-6">
        <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="bg-[#040113ee] rounded-xl shadow-lg p-6">
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png" // Replace with the correct image URL
                alt="Profile"
                className="w-full rounded-lg mb-6 shadow-lg"
              />
              {/* Name and Designation */}
              <h2 className="text-xl font-semibold">Rakibul Islam</h2>
              <p className="text-gray-400 text-sm mb-4">Web developer</p>
              {/* About */}
              <p className="text-center text-gray-300 mb-4">
                I am available for freelance work. Connect with me via email or
                phone.
              </p>
              {/* Contact Information */}
              <p className="text-gray-300 text-center mb-2">
                <span className="font-semibold">Phone:</span> +880 1754836031
              </p>
              <p className="text-gray-300 text-center mb-6">
                <span className="font-semibold">Email:</span>{" "}
                rakib088880@example.com
              </p>
              {/* Social Media Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-gray-600 p-3 rounded-full shadow-md">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-gray-600 p-3 rounded-full shadow-md">
                  <i className="fab fa-facebook text-white"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-gray-600 p-3 rounded-full shadow-md">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#040113ee]  rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact With Me</h2>
            <form>
              {/* Two-column Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Subject */}
              <div className="mb-4">
                <label className="block text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMe;
