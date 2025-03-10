import React from "react";
import { CiMail } from "react-icons/ci";
import { SiGooglemeet } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="h-screen py-16 px-6 md:px-12 text-center bg-backgroundcolor">
      <h2 className="text-4xl font-semibold text-gray-900 mb-10">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white hover:shadow-[rgba(179,184,214,0.41)] p-6 rounded-2xl h-[180px] shadow-md text-left shadow-[rgba(179,_184,_214,_0.7)_-12px_12px_50px_0px] flex flex-col items-start justify-between">
          <div>
            <div className="text-4xl mb-4">
              <FaInstagram className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">
              Directly Message us on Instagram
            </h3>
          </div>
          <a
            href="https://www.instagram.com/faltales/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 bg-primarybg hover:cursor-pointer transition ease-in delay-50"
          >
            Directly Message Us
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white hover:shadow-[rgba(179,184,214,0.41)] p-6 rounded-2xl h-[180px] shadow-md text-left shadow-[rgba(179,_184,_214,_0.7)_-12px_12px_50px_0px] flex flex-col items-start justify-between">
          <div>
            <div className="text-4xl mb-4">
              <CiMail className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">
              You can reach out to us via Email
            </h3>
          </div>
          <a
            href="mailto:kakadeavishkar84@gmail.com"
            className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 bg-primarybg hover:cursor-pointer transition ease-in delay-50"
          >
            Mail Us
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white hover:shadow-[rgba(179,184,214,0.41)] p-6 rounded-2xl h-[180px] shadow-md text-left shadow-[rgba(179,_184,_214,_0.7)_-12px_12px_50px_0px] flex flex-col items-start justify-between">
          <div>
            <div className="text-4xl mb-4">
              <SiGooglemeet className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">
              Schedule an online meeting with us
            </h3>
          </div>
          <a
            href="https://calendly.com/kakadeavishkar84/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 bg-primarybg hover:cursor-pointer transition ease-in delay-50"
          >
            Schedule a Meet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
