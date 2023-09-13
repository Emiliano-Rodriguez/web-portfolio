import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSubtitle from '../../assets/images/logo_side.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faUserPlus, faCode, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />        
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blnak" href='https://www.linkedin.com/in/emiliano-rodriguez-264439142'>
                    <FontAwesomeIcon icon={faUserPlus} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blnak" href='https://github.com/Emiliano-Rodriguez'>
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blnak" href='https://emiliano-rodriguez.github.io/'>
                    <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
                </a>
            </li>
        </ul>


    </div>
)

export default Sidebar