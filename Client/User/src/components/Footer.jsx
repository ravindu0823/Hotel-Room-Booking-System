import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gradient-to-r from-slate-800 via-black/90 to-slate-800 ... text-gray-300 py-2 px-2 backdrop-brightness-0">
      {/* <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2 font-orbitron hover:text-[cyan]">
            Features
          </h6>
          <ul>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Camaraderie">
                Camaraderie
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Alive">
                Alive
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Monetary">
                Monetary
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Integrity">
                Integrity
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 font-orbitron hover:text-[cyan]">
            Solidarity
          </h6>
          <ul>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Omnipresent">
                Omnipresent
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Bravery">
                Bravery
              </a>
            </li>
            <li className="py-1 font-inter">
              <a href="/" title="Tenacity">
                Tenacity
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Honour">
                Honour
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 font-orbitron hover:text-[cyan]">
            Establishment
          </h6>
          <ul>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Knowledge">
                Knowledge
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Blog">
                Blog
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Opportunities">
                Opportunities
              </a>
            </li>
            <li className="py-1 font-inter hover:opacity-50">
              <a href="/" title="Journalism">
                Journalism
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase font-orbitron hover:text-[cyan]">
            Our&nbsp;Newsletter&nbsp;.
          </p>
          <p className="py-4 font-inter hover:opacity-50">
            Only the latest&nbsp;&amp;&nbsp;stimulating
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-2xl mb-4"
              type="email"
              placeholder="Enter email&nbsp;..."
              required
            />
            <button className="p-2 mb-4 rounded-2xl font-inter hover:text-[cyan]/70 ease-in duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div> */}

      <div className="flex flex-col max-w-[1400px] px-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 font-inter text-[beige]">
          &copy;&nbsp;2023&nbsp;&middot;&nbsp;
          <span className="hover:text-[cyan]/70 ease-in duration-200">
            <a
              href="https://example.com/"
              target="_blank"
              rel="noreferrer"
              title="The Glang"
            >
             Group 25 @ NSBM 
            </a>
          </span>
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 pb-3 lg:pb-1 sm:pb-2 text-2xl">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FaFacebook
              color="beige"
              className="icon hover:scale-105 ease-in duration-300 hover:opacity-50"
            />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FaInstagram
              color="beige"
              className="icon hover:scale-110 ease-in duration-300"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <FaTwitter
              color="beige"
              className="icon hover:scale-105 ease-in duration-300 hover:opacity-50"
            />
          </a>
          <a
            href="mailto:someone@example.com"
            target="_blank"
            rel="noreferrer"
            title="email"
          >
            <FaEnvelope
              color="beige"
              className="icon hover:scale-105 ease-in duration-300 hover:opacity-50"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
