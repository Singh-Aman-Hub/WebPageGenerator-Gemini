import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Import the CSS
import Loading from './Loading';


const Frontend = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:4020',
  });

  const [prompt, setPrompt] = useState('');
  const [resText, setResText] = useState('');
  const [showPage, setShowPage] = useState(false);
  const[isLoading,setIsLoading]=useState(false);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleBack = () => {
    setShowPage(false);
    setResText('');
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      alert('Please enter a topic before submitting.');
      return;
    }
    setShowPage(false);
    setIsLoading(true);
    try {
      const res = await instance.post('/api', {
        query:
          "give me the code for a webpage, do not include the html tag and head tag, give me direct html + css inline codes give the inner context of body do not include any text in the response pure codes no greeting also (no enclosing of codes in any quotes) and make it colourful Aesthetic with not much big fonts make it accessible for phones as well, the topic for the webpage is " +
          prompt,
      });
      setResText(res.data);
      setShowPage(true);
    } catch (err) {
      console.error("Error during API call", err);
      setResText("⚠️ Oops! Something went wrong: " + err.message);
    }finally{
      setIsLoading(false);
    }
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="frontend-container">
      {showPage ? (
        <div className="generated-page">
          <button onClick={handleBack} className="back-button">
            ⬅ Back
          </button>
          <div
            className="rendered-html"
            dangerouslySetInnerHTML={{ __html: resText }}
          ></div>
        </div>
      ) : (
        <div className="input-section">
          <h1> illustrative Context Generator </h1>
          <p>Enter a topic and get a fully styled webpage preview instantly!</p>

          <input
            type="text"
            placeholder="e.g., Portfolio Website, Coffee Shop Landing Page..."
            value={prompt}
            onChange={handleChange}
            className="prompt-input"
          />
          <button onClick={handleSubmit} className="submit-button">
             Generate Webpage
          </button>
        </div>
      )}
    </div>
  );
};

export default Frontend;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Frontend = () => {
//   const instance = axios.create({
//     baseURL: 'http://localhost:4020',
//   });

//   const [prompt, setPrompt] = useState('');
//   const [resText, setResText] = useState('');
//   const [showPage, setShowPage] = useState(false);

//   const handleChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handleBack = () => {
//     setShowPage(false);
//     setResText('');
//   };

//   const handleSubmit = async () => {
//     setShowPage(true);
//     try {
//       const res = await instance.post('/api', { query: "give me the code for a webpage, do not include the html tag and head tag, give me direct html + css inline codes give give the inner context of body do not include any text in the response pure codes no greeting also (no enclosing of codes in any quotes) the topic for the webpage is "+prompt });
//       setResText(res.data);
//       console.log(res.data);
//     } catch (err) {
//       console.error("Error during making the API call", err);
//       setResText("Something went wrong buddy: " + err);
//     }
//     setTimeout(()=>{
//       console.log("Awaitng response from API")
//     },4000);
//   };

//   return (
//     <>
//       {showPage ? (
//         <>
//           <button onClick={handleBack} style={{ margin: "10px" ,height:"5vh" , width:"10vw"}}>⬅ Back</button>
//           <div
//             dangerouslySetInnerHTML={{ __html: resText }}
//             style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}
//             className='response-box'
//           ></div>
//         </>
//       ) : (
//         <div className="container">
//           <h2>Welcome to the illustrative context generator, Enter your topic </h2>
//           <input
//             type="text"
//             placeholder="Enter the Topic of the webpage u want to check out:"
//             style={{ marginTop: "10px", padding: "5px", width: "80%" }}
//             onChange={handleChange}
//             value={prompt}
//           />
//           <br />
//           <button
//             id="submit"
//             onClick={handleSubmit}
//             style={{ marginTop: "10px", padding: "8px 12px" }}
//           >
//             Submit your query here!
//           </button>

//           {resText && (
//             <div
//               className="response-box"
//               style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}
//             >
//               <h4>Preview of Gemini Response:</h4>
//               <div
//                 dangerouslySetInnerHTML={{ __html: resText }}
//                 style={{ border: "1px solid #eee", padding: "10px", marginTop: "10px" }}
//               ></div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Frontend;