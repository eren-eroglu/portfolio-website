import { useState, useEffect } from "react";
function Home() {
        const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        <div className="flex flex-col typewriter">
          <h1 className="h1">Merhaba, Ben Eren Eroğlu.</h1>
        </div><div className={isTyping ? 'typewriterr' : 'hidden'}>
          <h1 className="h1 text-sm text-center md:text-center">Ne için bakmıştınız?</h1>
        </div>
      </div>
  )
}
export default Home