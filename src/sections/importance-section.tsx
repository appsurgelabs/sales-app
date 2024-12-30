import { Stack } from "@mui/material";
import {FadeUpTypography} from "../components/fadeupTypography";
import ImportanceCard from "../components/importance-card";
import { useRef, useEffect } from "react";

const ImportanceSection = ({language} : {language : 'si' | 'ta' | 'en'}) =>{
  const importance = [
    {
        heading: {
            en: "Enhanced Comfort and Support",
            si: "වැඩි සුවපහසුකම සහ සහාය",
            ta: "மேம்பட்ட வசதியும் ஆதரவும்"
        },
        description: {
            en: "Reduces pressure on hips, back, and joints for prolonged sitting or meditation.",
            si: "දිගු වේලාවක් වාඩි වී සිටීම හෝ භාවනා කිරීම සඳහා උකුල්, පිටුපස සහ සන්ධිවල පීඩනය අඩු කරයි.",
            ta: "நீண்ட நேரம் உட்கார்ந்து அல்லது தியானம் செய்ய இடுப்பு, முதுகு மற்றும் மூட்டுகளில் அழுத்தத்தை குறைக்கிறது."
        },
        icon: '1.png'
    },
    {
        heading: {
            en: "Improved Posture and Spinal Health",
            si: "ඉරියව්ව සහ කොඳු ඇට පෙළේ සෞඛ්‍යය වැඩි දියුණු කිරීම",
            ta: "மேம்படுத்தப்பட்ட தோரணை மற்றும் முதுகெலும்பு ஆரோக்கியம்"
        },
        description: {
            en: "Promotes proper spinal alignment and reduces stress on the backbone.",
            si: "කොඳු ඇට පෙළ නිසි ලෙස පෙළගැස්වීම ප්‍රවර්ධනය කරන අතර කොඳු ඇට පෙළේ ආතතිය අඩු කරයි.",
            ta: "சரியான முதுகெலும்பு சீரமைப்பை ஊக்குவிக்கிறது மற்றும் முதுகெலும்பில் அழுத்தத்தை குறைக்கிறது."
        },
        icon: '2.png'
    },
    {
        heading: {
            en: "Versatility and Portability",
            si: "බහුකාර්යතාව සහ අතේ ගෙන යා හැකි හැකියාව",
            ta: "பல்துறை மற்றும் பெயர்வுத்திறன்"
        },
        description: {
            en: "Easy to carry for travel, meditation retreats, or home use.",
            si: "සංචාර, භාවනා ස්ථාන හෝ නිවසේ භාවිතය සඳහා රැගෙන යාමට පහසුය.",
            ta: "பயணம், தியானம் செய்யும் இடங்கள் அல்லது வீட்டு உபயோகத்திற்காக எடுத்துச் செல்ல எளிதானது."
        },
        icon: '3.png'
    },
    {
        heading: {
            en: "Alleviates Joint Pain and Muscle Tension",
            si: "සන්ධි වේදනාව සහ මාංශ පේශි ආතතිය සමනය කරයි",
            ta: "மூட்டு வலி மற்றும் தசை பதற்றத்தை போக்குகிறது"
        },
        description: {
            en: "Relieves strain on joints and muscles, ideal for those with arthritis or chronic pain.",
            si: "සන්ධි සහ මාංශ පේශිවල ආතතිය සමනය කරයි, ආතරයිටිස් හෝ නිදන්ගත වේදනාව ඇති අයට වඩාත් සුදුසුය.",
            ta: "மூட்டுகள் மற்றும் தசைகளில் உள்ள அழுத்தத்தை நீக்குகிறது, கீல்வாதம் அல்லது நாள்பட்ட வலி உள்ளவர்களுக்கு ஏற்றது."
        },
        icon: '4.png'
    },
    {
        heading: {
            en: "Cooling Effect for Relaxation",
            si: "ලිහිල් කිරීම සඳහා සිසිලන බලපෑම",
            ta: "தளர்வுக்கான குளிர்ச்சி விளைவு"
        },
        description: {
            en: "Gel-infused designs offer a soothing cooling sensation.",
            si: "ජෙල්-ආශ්රිත නිෂ්පාදනය සිසිලන සංවේදීතාවයක් ලබා දෙයි.",
            ta: "ஜெல் உட்செலுத்தப்பட்ட உற்பத்தி குளிர்ச்சியை அளிக்கிறது."
        },
        icon: '5.png'
    }
];

    const scrollRef = useRef<HTMLDivElement>(null);
    
            useEffect(() => {
                const scrollContainer = scrollRef.current;
                if (!scrollContainer) return;
            
                let scrollSpeed = 1;
                const interval = setInterval(() => {
                  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                  } else {
                    scrollContainer.scrollLeft += scrollSpeed;
                  }
                }, 16);
            
                return () => clearInterval(interval);
            }, []);

    return (
        <Stack paddingY={'3rem'} spacing={5} sx = {{backgroundColor : '#F5F5F7'}}>
        <FadeUpTypography sx = {{fontSize : '1.5rem', paddingX : '1rem'}} text = {
          {
            en: "Why a Water Mattress Cushion is Essential for Your Well-Being?",
            si: "ඔබේ සෞඛ්‍යය සඳහා ජල මට්‍රස් කුෂන් එකක් එතරම් අත්‍යවශ්‍ය ද?",
            ta: "உங்கள் நலனுக்காக ஒரு நீர் மொத்தத்தடி குஷன் ஏன் முக்கியமானது?"
          }[language]
          
        } />
        <Stack ref = {scrollRef} id ="importance" sx = {{overflowX : 'scroll', width : '100%', paddingBottom : '2rem'}} direction={'row'}  justifyContent={'flex-start'}>
            {[...importance, ...importance].map(item => <ImportanceCard language = {language} {...item}/>)}
            
        </Stack>
    </Stack>
    )
}

export default ImportanceSection;