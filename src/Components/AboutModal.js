import React from "react";
import { FaGithubSquare, FaGlobe, FaLinkedin } from "react-icons/fa";
import Avatar from "../img/rakib.jpeg";

const AboutModal = () => {
  return (
    <div>
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="avatar online">
            <div className="w-24 mask mask-squircle">
              <img src={Avatar} alt="Rakibul Hasan" />
            </div>
          </div>
          <h3 className="text-lg font-bold">About me</h3>
          <p className="py-4">
            This project is powered by Chat GPT (text davinci 003) API. It's
            just a fun project, developed by Rakibul Hasan. If you want to know
            more about developer Rakibul Hasan, Feel free to check the links
            below.
          </p>
          <div class="divider">||</div>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/Web-Developer-Rakib"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://www.linkedin.com/in/rakibul-hasan-65425a1b9/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://webdeveloperrakib.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGlobe></FaGlobe>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
