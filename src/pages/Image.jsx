import React, { useState } from 'react';
import './imageG.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ImageGenerator = () => {
  const APIKEY = 'c6bf46f933msh7f39f169e7ff387p11ac2fjsnfa059fa3ae96';

  const [inputValue, setInputValue] = useState('');
  const [resultImage, setResultImage] = useState('');

  const generatImage = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '294981d94bmshd99d696a49bf564p149a58jsna86ea1831056',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      body: JSON.stringify({ text: inputValue }),
      responseType: 'blob',
    };

    try {
      const response = await fetch(
        'https://open-ai21.p.rapidapi.com/texttoimage2',
        options
      );
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = function () {
        const dataUrl = reader.result;
        console.log(dataUrl);

        setResultImage(dataUrl);
      };
      reader.readAsDataURL(blob);

      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const clearResult = () => {
    setResultImage('');
  };

  return (
    <>
    <Header/>
    <div className="app1">
      
      <section className="main1">
        <h1 id="chatTitle"> Image Generator AI tool </h1>
        
        <section className="imagesection">
          {resultImage && (
            <img src={resultImage} alt="Generated Image" />
          )}
        </section>
        <section className="bottom">
          <section className="inputcont">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div id="submit" onClick={generatImage}>
              ➢
            </div>
            <div id="delete" onClick={clearResult}>
              Clear
            </div>
          </section>
          <p className="info">
            A GPT models can that generate image depending on the your text
           
          </p>
        </section>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ImageGenerator;
