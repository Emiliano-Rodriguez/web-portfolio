import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useEffect, useState } from 'react'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const [iframeVisible, setIframeVisible] = useState(false);

    const toggleIframe = () => { 
      setIframeVisible(!iframeVisible);
    };
    
    
    const closeIframe = () => {
      setIframeVisible(false);
    };
  
  









    const [iframeVisibleML, setIframeVisibleML] = useState(false);

    const toggleIframeML = () => { 
      setIframeVisibleML(!iframeVisibleML);
    };
    
    
    const closeIframeML = () => {
      setIframeVisibleML(false);
    };




    const [iframeVisibleAnalytics, setIframeVisibleAnalytics] = useState(false);

    const toggleIframeAnalytics = () => { 
      setIframeVisibleAnalytics(!iframeVisibleAnalytics);
    };
    
    
    const closeIframeAnalytics = () => {
      setIframeVisibleAnalytics(false);
    };







    






    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


    return (
        <div className='container portfolio-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['P','o','r','t','f','o','l','i','o']}
                    idx={15}
                    />
                </h1>
                <p>
                Welcome to my portfolio page, showcasing a selection of my professional and personal work.
                For a more comprehensive overview of my undergraduate portfolio, please explore the link located at 
                the bottom left corner. Thank you for visiting and taking the time to review my achievements and expertise.
                </p>

                <h2>
                    Professional Roles        
                </h2>
                <p>
                    Anyar Inc = [Staff Engineer, Machine Learning Engineer] <br/>
                    Date = June 23 - Present <br/><br/>
                    USAA = [Data Engineer, Software Developer] <br/>
                    Date = June 2019 - June 2023 <br/><br/>
                    UTSA = [Research Engineer, Software Engineer] <br/>
                    Date = August 2018 - June 2019 <br/>

                </p>

                <a href="Resume_2024.pdf" target="_blnak" className="flat-button">RESUME</a>

            </div>


            <div>
      <button className="button_ug_projects" onClick={toggleIframe}>undergraduate projects</button>
      {iframeVisible && (
        <div className='port-contain' style={{ textAlign: 'left' }}>
            <div className="close-button" onClick={closeIframe}>
              Close [X]
            </div>

          <iframe
            title="External Website"
            src="https://emiliano-rodriguez.github.io/projects.html"
            width="800"
            height="600"
          ></iframe>
        </div>
      )}

<button className="button_x_bot" onClick={toggleIframeML}>Twitter Tale Bot</button>
      {iframeVisibleML && (
        <div className='port-contain' style={{ textAlign: 'left' }}>
            <div className="close-button" onClick={closeIframeML}>
              Close [X]
            </div>

          <iframe
            title="External Website"
            src="https://livedashboard.pages.dev/twitterbot"
            width="800"
            height="600"
          ></iframe>
        </div>
      )}



<button className="button_analytics" onClick={toggleIframeAnalytics}>Analytical Dashboard</button>
      {iframeVisibleAnalytics && (
        <div className='port-contain' style={{ textAlign: 'left' }}>
            <div className="close-button" onClick={closeIframeAnalytics}>
              Close [X]
            </div>

          <iframe
            title="External Website"
            src="https://livedashboard.pages.dev/mobile"
            width="800"
            height="600"
          ></iframe>
        </div>
      )}









    </div>
  );

       
       
       
       
       
        </div>
    )
}

export default Portfolio
