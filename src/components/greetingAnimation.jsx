"use client";
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";

const GreetingAnimation = ({ delay = 0 }) => {
    const greetings = [
        "Hallo",                    // Afrikaans
        "Përshëndetje",             // Albanian
        "Marhaba",                  // Arabic (مرحبًا)
        "Barev",                    // Armenian
        "Kamisaki",                 // Aymara
        "Salam",                    // Azerbaijani
        "Kaixo",                    // Basque
        "Vitaju",                   // Belarusian (Вітаю)
        "Hyālō",                    // Bengali (হ্যালো)
        "Zdravo",                   // Bosnian
        "Zdraveĭte",                // Bulgarian (Здравейте)
        "Haallo",                   // Burmese (ဟယ်လို)
        "Nǐ hǎo",                  // Cantonese (你好)
        "Hola",                     // Catalan
        "Kamusta",                  // Cebuano
        "Moni",                     // Chichewa
        "Bonghjornu",               // Corsican
        "Zdravo",                   // Croatian
        "Ahoj",                     // Czech
        "Hej",                      // Danish
        "Hallo",                    // Dutch
        "Hello",                    // English
        "Tere",                     // Estonian
        "Hello",                    // Ewe
        "Salām",                    // Farsi (Persian) (سلام)
        "Bula",                     // Fijian
        "Kumusta",                  // Filipino
        "Hei",                      // Finnish
        "Bonjour",                  // French
        "Dia dhuit",                // Gaelic (Irish)
        "Ola",                      // Galician
        "Gamarjoba",                // Georgian (გამარჯობა)
        "Guten tag",                // German
        "Geia",                     // Greek (γεια)
        "Mba'éichapa",              // Guarani
        "Bonjou",                   // Haitian Creole
        "Aloha",                    // Hawaiian
        "Shalom",                   // Hebrew (שלום)
        "Namaste",                  // Hindi (नमस्ते)
        "Nyob zoo",                 // Hmong
        "Szia",                     // Hungarian
        "Halló",                    // Icelandic
        "Ndewo",                    // Igbo
        "Hello",                    // Ilocano
        "Halo",                     // Indonesian
        "Ciao",                     // Italian
        "Konichiwa",                // Japanese (こんにちは)
        "Suostei",                  // Khmer (សួស្តី)
        "Mwaramutse",               // Kinyarwanda
        "Anyeong haseyo",           // Korean (안녕하세요)
        "Slav",                     // Kurdish
        "Sabaidi",                  // Lao (ສະບາຍດີ)
        "Salve",                    // Latin
        "Sveika",                   // Latvian
        "Sveiki",                   // Lithuanian
        "Moien",                    // Luxembourgish
        "Salama",                   // Malagasy
        "Selamat pagi",             // Malay
        "Bongu",                    // Maltese
        "Nǐ hǎo",                  // Mandarin (你好)
        "Kia ora",                  // Maori
        "Namaskāra",                // Marathi (नमस्कार)
        "Sain uu",                  // Mongolian (сайн уу)
        "Ya’at’eeh",                // Navajo
        "Namaskāra",                // Nepali (नमस्कार)
        "Hei",                      // Norwegian
        "Salam",                    // Pashto (سلام)
        "Cześć",                    // Polish
        "Olá",                      // Portuguese
        "Sata srī akāla",           // Punjabi (ਸਤ ਸ੍ਰੀ ਅਕਾਲ)
        "Akkam",                    // Oromo
        "Allianchu",                // Quechua
        "Bunâ",                     // Romanian
        "Privet",                   // Russian (Привет)
        "Talofa",                   // Samoan
        "Thobela",                  // Sepedi
        "Zdravo",                   // Serbian
        "Dumela",                   // Sesotho
        "Ahoj",                     // Slovak
        "Zdravo",                   // Slovenian
        "Hello",                    // Somali
        "Hola",                     // Spanish
        "Jambo",                    // Swahili
        "Hallå",                    // Swedish
        "Kamusta",                  // Tagalog
        "Ia Orana",                 // Tahitian
        "Li-hó",                    // Taiwanese
        "Vanakkam",                 // Tamil (வணக்கம்)
        "S̄wạs̄dī",                  // Thai (สวัสดี)
        "Tashi delek",              // Tibetan
        "Mālō e lelei",             // Tongan
        "Avuxeni",                  // Tsonga
        "Merhaba",                  // Turkish
        "Privit",                   // Ukrainian (привіт)
        "Assalāmu Alaykum",         // Urdu (السلام عليكم)
        "Salom",                    // Uzbek
        "Xin chào",                 // Vietnamese
        "Helo",                     // Welsh
        "Molo"                      // Xhosa
    ];

    
    const getRandomGreeting = () => {
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    const [greeting, setGreeting] = useState("Hello");
    const [position,] = useState(0);
    const intervalRef = useRef();
    
    useEffect(() => {
        const updateGreeting = () => {
            setGreeting(getRandomGreeting());
        };

        updateGreeting();
        intervalRef.current = setInterval(updateGreeting, delay * 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            className="h-1/2 lg:h-full lg:w-1/2 text-4xl text-[#9cb9ec] relative my-custom-class"
            style={{ textAlign: 'center' }}
        >
            <div
                className=""
                style={{
                    position: 'absolute',
                    top: `${position}%`,
                }}
            >
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    transition={{
                        duration: delay, // Adjust the animation duration to match the delay
                        repeat: Infinity,
                    }}
                >
                    {greeting}
                </motion.div>
            </div>
        </div>
    );
};

export default GreetingAnimation;