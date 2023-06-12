import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaPinterest,
  FaSearchLocation,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const FooterLine = () => {
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="bg-indigo-500 h-1.5"></div>
        <div className="bg-green-500 h-1.5"></div>
        <div className="bg-blue-500 h-1.5"></div>
        <div className="bg-sky-500 h-1.5"></div>
        <div className="bg-violet-500 h-1.5"></div>
        <div className="bg-indigo-500 h-1.5"></div>
        <div className="bg-green-500 h-1.5"></div>
        <div className="bg-blue-500 h-1.5"></div>
        <div className="bg-sky-500 h-1.5"></div>
      </div>
    </>
  );
};

//for col1

const Col1 = () => (
  <div className="col-1">
    <div className="">
      <img src={logo} alt="mindfulmove" className="h-[50%]" />
    </div>
    <div className="text-base px-2">
      <ul>
        <li>
          <span className="text-sky-500">MindfulMove</span> instructors are
          experienced and qualified to help you get the most out of your yoga
          practice.
        </li>
        <li>
          It is a welcoming and supportive community where you can connect with
          other yogis on a shared journey.
        </li>
        <li>
          Yoga can help you cultivate strength, flexibility, and mindfulness.
        </li>
      </ul>
    </div>
  </div>
);
//for col2
const Col2 = () => (
  <div className="col-2">
    <h2 className="underline decoration-wavy underline-offset-[14px] decoration-3 text-2xl font-semibold px-2 text-indigo-500 decoration-indigo-500">
      Instragram
    </h2>
    <div className="grid grid-cols-3 gap-1 mt-5 py-5 px-2">
      <img
        className="object-cover w-28 h-28"
        src="https://source.unsplash.com/random/?Shavasana"
        alt=""
      />
      <img
        className="object-cover  w-28 h-28"
        src="https://source.unsplash.com/random/?Trikonasana"
        alt=""
      />
      <img
        className="object-cover w-28 h-28"
        src="https://source.unsplash.com/random/?Sirsasana"
        alt=""
      />
      <img
        className="object-cover  w-28 h-28"
        src="https://source.unsplash.com/random/?Padmasana"
        alt=""
      />
      <img
        className="object-cover  w-28 h-28"
        src="https://source.unsplash.com/random/?Kursi-Asana"
        alt=""
      />
      <img
        className="object-cover  w-28 h-28"
        src="https://source.unsplash.com/random/?Balasana"
        alt=""
      />
    </div>
  </div>
);
//for col3
const Col3 = () => (
  <div className="col-3">
    <h2 className="underline decoration-wavy underline-offset-[14px] decoration-3 text-2xl font-semibold px-2 text-green-500 decoration-green-500">
      Contact Us
    </h2>
    <div className="py-5 mt-5 text-base">
      <div className="flex items-center gap-2">
        <FaPhone /> <p>Phone: +541 595 8389</p>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope /> <p>kids@email.com</p>
      </div>
      <div className="flex items-center gap-2">
        <FaLocationArrow />
        <p>Address: Clinton Lane Wilkes Barre, PA 18702</p>
      </div>
    </div>
  </div>
);

//col4
const Col4 = () => (
  <div className="col-2">
    <h2 className="underline decoration-wavy underline-offset-[14px] decoration-3 text-2xl font-semibold px-2 text-amber-500 decoration-amber-500">
      Newsletter Signup
    </h2>
    <div className="py-5 mt-5">
      <p className="my-2">Get latest updates, news, surveys & offers</p>
      <div className="relative py-5">
        <input
          type="text"
          placeholder="Email Id"
          className="input input-bordered border-2 border-amber-500 w-full my-5"
        />
        <FaEnvelope
          size={24}
          className="absolute top-[50%] right-5  translate-y-[-50%] cursor-pointer"
        />
      </div>
      <div className="flex gap-3 text-gray-300">
        <FaFacebook className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaPinterest className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
      </div>
    </div>
  </div>
);
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-700 text-gray-500">
      <FooterLine />
      <div className="max-w-[1380px] mx-auto py-8 px-2">
        <div className="grid sm:grid-cols-4 justify-between gap-2">
          <Col1 />
          <Col2 />
          <Col3 />
          <Col4 />
        </div>
      </div>
      <div className="flex items-center justify-center h-16 dark:bg-slate-800  bg-gray-200">
        <p className="text-gray-600 dark:text-white">
          © 2023 MindFulMove. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
