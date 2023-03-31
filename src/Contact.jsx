import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pp from './assets/ai.png'
import { useContext, useEffect } from 'react';
import { MyContext } from './Context';
function Contact() {
  const {contactText, setContactText,lang, home, setHome} = useContext(MyContext)

  useEffect(() => {
    if(lang == 'en'){
      setContactText('Check out my social media to keep in touch.')
      setHome('Back Home')
    }else if ( lang == 'tr'){
      setContactText('Sosyal medya üzerinden iletişime geçebilirsiniz. ')
      setHome('Geri dön')
    }
  },[lang])
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center w-full bg-opacity-25">
 <img src={pp} alt="Profile Picture" className='bottom-0 border-2 border-purple-400 rounded-full' style={{height:'25%'}}/>
 <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <p className='text-center text-white w-1/2 mb-2 shadow-2xl bg-pink-900 bg-opacity-25 rounded-3xl p-3 drop-shadow-2xl'>
        {contactText}
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-300">
          <FaLinkedin className="text-gray-900 text-2xl" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-300">
          <FaGithub className="text-gray-900 text-2xl" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-300">
          <FaTwitter className="text-gray-900 text-2xl" />
        </a>
      </div><hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Link to='/portfolio-website' className='btn btn-primary'>{home} </Link>
    </div>
  )
}

export default Contact;
