import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/e_transparent.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['m','i','l','i','a','n','o',' ','R','o','d','r','i','g','u','e','z']
    const jobArray = ['s','o','f','t','w','a','r', 'e', ' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
      }, [])



    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i,</span>
                    <span className={`${letterClass} _11`}> </span>
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>'m</span>
                    <br/>

                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={14} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={28} />
                </h1>
                <h2>Mechanical Engineer / Machine Learning Engineer / Data Engineer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home