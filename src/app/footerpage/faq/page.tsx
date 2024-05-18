// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState } from "react";
import { Box, styled } from "@mui/material";
import "./faq.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";

const MainBox = styled(Box)`
  padding-top: 0px;
  width: 100%;
  height: auto;
  background: rgb(8, 8, 16);
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 550px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // border: 2px solid red;
    padding-top: 1px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const faqData = [
  { question: "Event cancellation by Artist", answer: 'This is not a common occurrence since we only connect you to the trusted artists, who are reviewed by our clients and team members. However, in case of any contingency, you get advantage of making the booking via StarClinch. In case of any cancellation, our team will try their best to help you find an equivalent replacement.' },
  { question: 'Quotation Price Negotiation', answer: 'Anything is negotiable based on the discretion of the artist/management.' },
  { question: "How does StarClinch Works ?", answer: 'Just choose the category & occasion you’re interested in and voila! Behold the pool of talent for you to glance at. View their profile, watch their photos & videos, read through their info and shortlist your favorites. Click “Get Quick Quote” to connect with the desired ones. Once you are happy with the quote received, simply pay the advance online and you’re done! It’s absolutely easy, ultra-secure and super-fast. We don’t exclusively represent artists. StarClinch is a booking platform. That said, you will not have to deal with an artist’s manager or agency for the price and booking. We will execute that for you. Also, we don’t charge you extra for that. Our fee is given by the artist because we give them bookings in volume. So, in general, we get you a price which is lower than what they directly quote!' },
  { question: 'Who all can book from StarClinch For Client?', answer: 'Our clients include party organizers, event planners, corporates, individuals, owners of restaurants-pubs-bars and anybody who is looking to add a tinge of entertainment to their party.' },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <Fragment>
      <NavbarOne/>
      <MainBox>
      

        <div className="FaqOne">

          <div className="faq-container">
            <h1 style={{ color: 'white', fontWeight: '600', fontSize: '32px', textAlign: 'left' }}>Payments</h1>
            {faqData.slice(0, 2).map((faq, index) => (
              <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`}>
                <h3 className="faq-title">{faq.question}</h3>
                <p className="faq-text">{faq.answer}</p>
                <button className="faq-toggle" onClick={() => handleToggleClick(index)}>
                  <ExpandMoreIcon className={`fas fa-chevron-down ${activeIndex === index ? 'hidden' : ''}`}></ExpandMoreIcon>
                  <CloseIcon className={`fas fa-times ${activeIndex === index ? '' : 'hidden'}`}></CloseIcon>
                </button>
              </div>
            ))}
            <h1 style={{ color: 'white', fontWeight: '600', fontSize: '32px', textAlign: 'left' }}>Recommendations</h1>

            {faqData.slice(2, 3).map((faq, index) => (
              <div key={index} className={`faq ${activeIndex === index + 2 ? 'active' : ''}`}>
                <h3 className="faq-title">{faq.question}</h3>
                <p className="faq-text">{faq.answer}</p>
                <button className="faq-toggle" onClick={() => handleToggleClick(index + 2)}>
                  <ExpandMoreIcon className={`fas fa-chevron-down ${activeIndex === index + 2 ? 'hidden' : ''}`}></ExpandMoreIcon>
                  <CloseIcon className={`fas fa-times ${activeIndex === index + 2 ? '' : 'hidden'}`}></CloseIcon>
                </button>
              </div>
            ))}

            <h1 style={{ color: 'white', fontWeight: '600', fontSize: '32px', textAlign: 'left' }}>Backing</h1>

            {faqData.slice(3, 4).map((faq, index) => (
              <div key={index} className={`faq ${activeIndex === index + 2 ? 'active' : ''}`}>
                <h3 className="faq-title">{faq.question}</h3>
                <p className="faq-text">{faq.answer}</p>
                <button className="faq-toggle" onClick={() => handleToggleClick(index + 2)}>
                  <ExpandMoreIcon className={`fas fa-chevron-down ${activeIndex === index + 2 ? 'hidden' : ''}`}></ExpandMoreIcon>
                  <CloseIcon className={`fas fa-times ${activeIndex === index + 2 ? '' : 'hidden'}`}></CloseIcon>
                </button>
              </div>
            ))}
          </div>

        </div>



      </MainBox>
      <Footer/>
    </Fragment>
  );
};

export default Faq;
