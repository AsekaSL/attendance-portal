import Image from 'next/image'
import logo from '@/public/brand/university logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="faculty-footer">
        <div className="container">
            <div className="col brand-col">
                <Image src={logo} alt='University logo' />
                <div className='brand-text'>
                    <h3>Faculty of Computing</h3>
                    <p>University of Sri Jayewardenepura — Attendance Tracking Portal</p>
                </div>
            </div>

            <div className='col links-col'>
                <h4>
                    Qick Links
                </h4>
                <ul>
                    <li> <Link href={'/'}>Home</Link> </li>
                    <li> <Link href={'/about'}>About</Link> </li>
                    <li> <Link href={'/contact'}>Contact</Link> </li>
                </ul>
            </div>
            <div className="col contact-col">
            <h4>Contact</h4>
                <address>
                    Faculty of Computing<br />
                    University of Sri Jayewardenepura<br />
                    Nugegoda, Sri Lanka<br />
                    <a href="mailto:info@foc.sjp.ac.lk">info@foc.sjp.ac.lk</a>
                </address>
            </div>
        </div>

        <div className='lagal'>
            <div>© {new Date().getFullYear()} Faculty of Computing - University of Sri Jayewardenepura</div>
            <div className='socials'>
                <span>All rights reserved.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer