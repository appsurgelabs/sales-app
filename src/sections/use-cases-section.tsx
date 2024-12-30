import { Stack} from "@mui/material";
import UseCaseCard from "../components/use-case-card";
import { useRef, useEffect } from "react";
import { FadeUpTypography } from "../components/fadeupTypography";
const UseCasesSection = ({language} : {language : 'si' | 'ta' | 'en'}) =>{
    const useCases = [
        { 
            heading: {
                en: "Meditation Sessions",
                si: "භාවනාව සඳහා",
                ta: "தியானவிற்காக"
            },
            image: '1.jpg'
        },
        { 
            heading: {
                en: "Long Duration Sittings",
                si: "දිගු කාලීන වාඩිවීම්",
                ta: "நீண்ட கால உட்காருதல்"
            },
            image: '17.jpg'
        },
        { 
            heading: {
                en: "Long Duration Driving",
                si: "දිගු කාලීන රිය පැදවීම",
                ta: "நீண்ட கால ஓட்டம்"
            },
            image: '3.jpg'
        },
        { 
            heading: {
                en: "For Pregnant Women",
                si: "ගැබිණි කාන්තාවන් සඳහා",
                ta: "கர்ப்பிணி பெண்களுக்கு"
            },
            image: '10.jpg'
        },
        { 
            heading: {
                en: "Parenting and Childcare",
                si: "මාපිය සහ ළමා රැකවරණය",
                ta: "பெற்றோர் மற்றும் குழந்தை பராமரிப்பு"
            },
            image: '9.jpg'
        },
        { 
            heading: {
                en: "For patients who are suffering from various diseases.",
                si: "විවිධ රෝගවලින් පෙළෙන රෝගීන් සඳහා.",
                ta: "பல்வேறு நோய்களால் பாதிக்கப்பட்ட நோயாளிகளுக்கு."
            },
            image: '6.jpg'
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
        <Stack alignItems={'center'} spacing={4} paddingY = {'2rem'} >
            <Stack spacing={1} direction={'row'}>
                <FadeUpTypography sx = {{fontSize : '1.5rem', paddingX : '1rem'}} text={
                    {
                        en: "Optimal Scenarios to Use Blue Water Seat Cushion",
                        si: "බ්ලූ වෝටර් සීට් කුෂන් භාවිතා කිරීමට අතිශය සුදුසු අවස්ථා",
                        ta: "ப்ளூ வாட்டர் சீட் குஷன் பயன்படுத்துவதற்கான சிறந்த பரிந்துரைகள்"
                      }[language]
                      
                } />
            </Stack>
           
    <Stack ref={scrollRef} sx = {{overflowX : 'scroll', width : '100%', paddingY : '2rem'}} direction={'row'}  justifyContent={'flex-start'}>
        {[...useCases, ...useCases].map(item =><UseCaseCard language = {language} {...item}  />)}
        
        
    </Stack>
    </Stack>)
}

export default UseCasesSection;