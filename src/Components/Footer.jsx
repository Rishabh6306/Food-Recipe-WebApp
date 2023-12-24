import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'; 3

const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Flavor<span className="text-green-500 text-xl">Hub</span>
                    </p>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            About
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Services
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Contact
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Chiefs
                        </Link>
                    </div>
                </div>

                <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            License Agreement
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Copyright Information
                        </Link>
                        <Link
                            to='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Cookies Policy
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <Link
                            to='https://www.facebook.com/profile.php?id=100092759361139'
                            target="_blank"
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </Link>

                        <Link
                            to='https://www.instagram.com/rishabhsrivastava723/'
                            target="_blank"
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link
                            to='https://twitter.com/RishabhSriv6306'
                            target="_blank"
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </Link>
                        <Link
                            to='https://www.youtube.com/'
                            target="_blank"
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <span className="text-gray-400 leading-4">Copyright &copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer;