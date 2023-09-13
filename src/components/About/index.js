import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faUserPlus, faCode, faAnchor } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t']}
                    idx={15}
                    />
                </h1>
                <p>
            I'm a very ambitious developer constantly seeking opportunities 
            to work with the latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quite confident, naturally curious, and perpetually working on
            improving my entropy based learning one design problem at a time.
          </p>
          <p>
            If I need to define a summary of myself it would be, a family
            person, thechnically driven, exercise junkie and 
            aviation enthusiast.
          </p>
            
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHouse} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faUser} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faEnvelope} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faUserPlus} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCode} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAnchor} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About