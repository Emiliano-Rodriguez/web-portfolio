import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import {useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_9rvpmj4','template_q1aiv8v',form.current,'tM3sijK7Bea8b6T2w')
        .then(
            () => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder="email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                        </li>
                    </ul>
                    </form>
                </div>

            </div>
            <div className='info-map'>
                Emiliano Rodriguez,
                < br/>
                United States,
                < br/>
                1900 West Ave, 78230 < br/>
                San Antonio, Texas < br/> < br/>
                <span>emirodi.py@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[29.51725635506683, -98.52606371023474]} zoom={13}>
                   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                   <Marker position={[29.51725635506683, -98.52606371023474]}>
                      <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                   </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default Contact