import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';
import links from '../links.ts';

const DiscordLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.524 13.524 0 0 0-.62 1.25A19.74 19.74 0 0 0 9.246 4.14a13.52 13.52 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.665 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const faqs: FaqItem[] = [
  {
    id: '1',
    question: 'How do I add ADORE to my Discord server?',
    answer: 'You can add ADORE to your Discord server by clicking the Add to Discord button or visiting our Discord server for support. Make sure you have the Manage Server permission in your Discord server.'
  },
  {
    id: '2',
    question: 'What features does ADORE offer?',
    answer: 'ADORE offers a complete suite of tools including advanced moderation, leveling systems, anti-nuke protection, welcome/goodbye messages, giveaways, and over 750+ distinct commands.'
  },
  {
    id: '3',
    question: 'Is ADORE free to use?',
    answer: 'Yes! The majority of ADORE\'s features are completely free. We do offer a Premium subscription for larger servers needing higher limits, advanced analytics, and specialized customization options.'
  },
  {
    id: '4',
    question: 'How does ADORE\'s anti-nuke protection work?',
    answer: 'Our anti-nuke system monitors server audit logs in real-time. If it detects suspicious activity (like mass banning or channel deletion) that exceeds your configured thresholds, it instantly revokes the perpetrator\'s permissions.'
  },
  {
    id: '5',
    question: 'Can I customize ADORE\'s moderation settings?',
    answer: 'Absolutely. You can configure automod filters, punishment durations, ignored roles/channels, and custom responses for almost every moderation action via the dashboard.'
  },
  {
    id: '6',
    question: 'What should I do if ADORE goes offline or stops working?',
    answer: 'Check our Status page first. If all systems are operational, try kicking and re-inviting the bot. If issues persist, join our support server for immediate assistance.'
  },
  {
    id: '7',
    question: 'Where can I get help or report bugs?',
    answer: 'The best place for support is our official Discord community. We have a dedicated support team and channels for bug reporting and feature suggestions.'
  }
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; toggle: () => void }> = ({ item, isOpen, toggle }) => {
  return (
    <div 
      className={`mb-6 group bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'shadow-xl shadow-black/40 border-white/20' 
          : 'hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40'
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-8 text-left bg-transparent"
      >
        <span className="text-xl font-bold text-white pr-4">{item.question}</span>
        <ChevronDown className={`text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex-shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`} />
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
            <div className="px-8 pb-8 pt-0">
                <div className={`h-px w-full bg-white/10 mb-6 transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}></div>
                <p className={`text-gray-400 leading-relaxed text-sm font-medium transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-4'}`}>
                    {item.answer}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center w-full animate-fade-in pb-20">
      <div className="text-center mb-16 mt-8">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Frequently Asked Questions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Find answers to common questions about ADORE and server management.
        </p>
      </div>

      <div className="w-full max-w-3xl">
        {faqs.map((item) => (
          <AccordionItem 
            key={item.id} 
            item={item} 
            isOpen={openId === item.id} 
            toggle={() => toggle(item.id)} 
          />
        ))}
      </div>

      {/* CTA Box */}
      <div className="w-full max-w-3xl mt-12 p-12 bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl shadow-black/40 hover:border-white/20 transition-colors duration-300">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
         <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Still have questions?</h3>
         <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">
           Join our Discord community for additional support and to connect with other ADORE users.
         </p>
         
         <a 
            href={links.discordInvite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 relative z-10"
         >
           <DiscordLogo size={22} />
           <span>Join Discord</span>
         </a>
      </div>
    </div>
  );
};

export default FAQ;