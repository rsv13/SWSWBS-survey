import { Footer } from 'flowbite-react';
import React from 'react';
import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HealthCareLogo from '../assets/icons/HealthCareWales.png';
import PrimeCentre from '../assets/icons/PrimeCentreWales.png';
import USWLogo from '../assets/icons/USW.png';
import WSSPRLogo from '../assets/icons/WSSPR.png';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-red-700 rounded-lg text-white' style={{ backgroundColor: 'rgba(202, 5, 57, 255)' }}>USW</span>Survey
            </Link>
          </div>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className='flex justify-between w-full gap-2 mb-4 flex-wrap'>
                  <a href="https://www.southwales.ac.uk/" target="_blank" rel="noopener noreferrer">
                    <img src={USWLogo} alt="University of South Wales" className='h-20 w-auto mx-2' />
                  </a>
                  <a href="https://www.primecentre.wales/" target="_blank" rel="noopener noreferrer">
                    <img src={PrimeCentre} alt="Prime Centre Wales" className='h-16 w-auto mx-2' />
                  </a>
                  <a href="https://www.wsspr.wales/" target="_blank" rel="noopener noreferrer">
                    <img src={WSSPRLogo} alt="WSSPR" className='h-20 w-auto mx-2' />
                  </a>
                  <a href="https://healthandcareresearchwales.org/" target="_blank" rel="noopener noreferrer">
                    <img src={HealthCareLogo} alt="Health Care Wales" className='h-16 w-auto mx-2' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="https://www.southwales.ac.uk/" by="University of South Wales" year={new Date().getFullYear()} />
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
              <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
              <Footer.Icon href="https://www.instagram.com" icon={BsInstagram} />
              <Footer.Icon href="https://x.com" icon={BsTwitter} />
              <Footer.Icon href="https://discord.com/" icon={BsDiscord} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
