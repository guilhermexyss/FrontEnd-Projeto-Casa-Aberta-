import React, { useEffect, useState } from 'react';import "./PageMain.css"
export const PageMain = () => {
  const fullText = `Você foi atacado! Tem apenas 30 minutos para resolver uma série de enigmas. Seja mais rapido que as outras equipes para resolver os enigmas.`;

    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 60);
        return () => clearInterval(interval);
    }, []);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos em segundos

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Função para formatar o tempo MM:SS
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };



  return (
    <div className='pageMainteste'>
      <div className='mainContainer'>
      <div className='messageContainer'>
      <div className="areatext">
            <h1 id='message'>{displayedText}<span className="caret"></span></h1>
            <h1 id='timer'>Tempo restante: {formatTime(timeLeft)}</h1>
        </div>
      
      </div>

      <div className='forms'>
        <form className='formularios'>
        
          <input type="text" placeholder='Digite a senha' className='inputs'/>
          <button className='botoes'>Confirmar</button>
          
        </form>

        <form className='formularios'>
        
        <input type="text" placeholder='Digite a senha' className='inputs'/>
        <button className='botoes'>Confirmar</button>
        
      </form>



      </div>
      </div>

    </div>
  )
}
