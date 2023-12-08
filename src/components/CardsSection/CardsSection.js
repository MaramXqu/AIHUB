import './CardsSection.css';
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const accordionData = [
    {
      title: "What is the AI HUB?",
      description:
        "AI HUB is a website that uses artificial intelligence tools to provide advanced and efficient services. AI HUB offers a unique experience where users can take advantage of the latest technologies in the field of artificial intelligence to facilitate tasks and improve performance.",
    },
    {
      title: "How does the AI HUB work?",
      description:
        "AI HUB relies on artificial intelligence techniques to analyze data and generate advanced output. It collects information, and then uses artificial intelligence algorithms to understand the context and generate solutions or guidance. AI HUB users can leverage these tools to better manage tasks, analyze data, and develop effective strategies.",
    },
    {
      title: "Is it free to use AI HUB?",
      description:
        "You can enjoy AI HUB free version, which offers a robust set of features that many users find satisfying without requiring an account or any charges. However, for those seeking additional content, advanced features, AI-powered tools, and an ad-free editing experience, we provide premium and plus options to cater to your specific needs.",
    },
    {
      title: "Does AI HUB have usage limitations?",
      description:
        "You can use almost all our features to a limited capacity during your free trial. Once you’ve tested them, you can raise or remove all usage limits by upgrading your account.",
    },
  ];

  return (
    <>
    <section className="cards" id="services">
      <h2 className="title">COMMON QUESTIONS</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            className={`accordion-content ${
              index === openIndex ? "open" : ""
            }`}
            key={index}
          >
            <header onClick={() => handleItemClick(index)}>
              <span className="title">{item.title}</span>
              <i
                className={`fas ${
                  index === openIndex ? "fa-minus" : "fa-plus"
                }`}
                
              > </i>
            </header>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Accordion;