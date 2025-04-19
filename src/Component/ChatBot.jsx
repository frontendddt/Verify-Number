
import { useEffect } from 'react';
const Chatbot = () =>
{
    useEffect(() =>
    {

        const script = document.createElement('script');
        script.src = 'https://joyz.ai/lib/chatbot.bundle.js';
        script.setAttribute('eid', '6776617021dd4068e46fd0cf');
        script.setAttribute('chatbotId', '642f6832-a22e-5c1a-b65e-0ea9556511f7');

        document.head.appendChild(script);

        return () =>
        {
            document.head.removeChild(script);
        };
    }, []);

    return;
};

export default Chatbot;
