import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useEffect, useState } from 'react'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


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
                    Anyar Inc = [Engineer, Machine Learning Engineer] <br/>
                    Date = June 23 - Present <br/><br/>
                    USAA = [Data Engineer, Software Developer] <br/>
                    Date = June 2019 - June 2023 <br/><br/>
                    UTSA = [Research Engineer, Software Engineer] <br/>
                    Date = August 2018 - June 2019 <br/>

                </p>

                <a href="Resume_2023.pdf" target="_blnak" className="flat-button">RESUME</a>

            </div>
            <div className='port-contain'>
               <iframe
                  title="External Website"
                  src="https://emiliano-rodriguez.github.io/projects.html"
                  width="800"
                  height="600"
               ></iframe>
            </div>
        </div>
    )
}

export default Portfolio