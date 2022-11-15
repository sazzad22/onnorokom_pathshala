import React, { useEffect, useState } from "react";
import footer from "../images/Onnorokom Cover image.jpg";

const Footer = () => {
  const [date, setDate] = useState();
  const getCurrentYear = () => {
    setDate(new Date().getFullYear());
  };
  useEffect(() => {
    getCurrentYear();
  }, []);
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className=" py-16 pl-10 lg:pl-40  "
    >
      <div className="footer text-center">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="mt-10  items-center text-center mr-32">
        <p>Copyright © {date}- All right reserved by Sazzad-ur-Rahman </p>
      </div>
    </footer>
  );
};

export default Footer;