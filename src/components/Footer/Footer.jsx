import Image from 'next/image';
import Styles from './footer.module.sass'
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className={`${Styles['custom-footer']} gradient pt-40 pb-40`}>
        <div className="container">
            <div className={Styles['space-between']}>
                <Image 
                    src="/logo.png" 
                    alt="Picture of the author"
                    height="40"
                    width="188"
                />
                <div className={Styles['contact-info']}>
                    <GoMail className="mr-5"/>
                    <p className={Styles['contact-text']}>example@example.com</p>
                </div>
            </div>
            <hr className={`${Styles['line']} mt-40 mb-40`}/>
            <div className="row text-center">
                <div className="col">
                    &copy; Financially Fresh {(new Date().getFullYear())}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer