import { Stack} from "@mui/material";
import {FadeUpTypography} from "../components/fadeupTypography";

const DescriptionSection = ({language} : {language : 'en' | 'si' | 'ta'}) =>{
    return (
        <Stack spacing={2} sx = {{paddingX : '15vw', marginY : '5rem'}}>
             <FadeUpTypography sx = {{fontSize : "1.8rem", fontWeight : 600}} text={
                {
                    en: "About Product",
                    si: "නිෂ්පාදනය පිළිබඳ",
                    ta: "உற்பத்தி பற்றி"
                  }[language]
                  
             } />
             <FadeUpTypography sx = {{fontSize : "1rem", color : '#424242'}} text={
                {
                    en: "The Blue Water Seat Cushion is a unique, gel-infused seating solution designed to enhance comfort and support. Its patented water-based technology conforms to your body’s natural contours, providing optimal posture support and relieving pressure on joints and the spine. Ideal for meditation, long sitting sessions, and travel, this cushion also features a cooling effect for added comfort. Lightweight, portable, and durable, the Blue Water Cushion is perfect for anyone seeking improved comfort and relaxation.",
                    si: "බ්ලූ වෝටර් සීට් කුෂන් යනු සුවපහසුව සහ සහාය වැඩිදියුණු කිරීම සඳහා නිර්මාණය කරන ලද අද්විතීය ජෙල් ඇතුළත් ආසන විසඳුමකි. මෙහි පේටන්ට් ලබාගත් ජල-මූලික තාක්ෂණය ඔබේ ශරීරයේ ස්වභාවික ආකෘති සඳහා අනුකූල වන අතර, නිවැරදි ඉරියව් ආධාරකයක් ලබා දීම සහ සන්ධි සහ කොඳු ඇට මත ඇති පීඩනය අඩු කිරීම සඳහා උපකාරී වේ. භාවනාව, දිගු කාලයක් වාඩිව සිටීම සහ සංචාරය සඳහා විශේෂයෙන්ම සුදුසු මෙම කුෂන්, අමතර සන්සුන්බවක් ලබා දීම සඳහා සිසිලන ආරක්ෂාවක්ද සපයයි. සැහැල්ලු, ගෙන යා හැකි, සහ කල් පවතින බ්ලූ වෝටර් සීට් කුෂන් වැඩි සුවපහසුවක් සහ විවේකයක් අපේක්ෂා කරන ඕනෑම අයෙකුට පරිපූර්ණ විසඳුමක් වේ.",
                    ta: "ப்ளூ வாட்டர் குஷன் உங்கள் நிம்மதியையும் ஆதரவையும் மேம்படுத்த உருவாக்கப்பட்ட தனித்துவமான ஜெல் கலந்த அமர்வு தீர்வாகும். இதன் பக்குவமான நீர் அடிப்படையிலான தொழில்நுட்பம் உங்கள் உடலின் இயல்பான வடிவங்களை பின்பற்றி, சரியான உட்காரும் நிலையை ஆதரிக்கிறது மற்றும் மூட்டுகளுக்கும் முதுகெலும்பிற்கும் ஏற்படும் அழுத்தத்தை குறைக்கிறது. தியானம், நீண்ட நேர அமர்வு மற்றும் பயணங்களுக்கு உகந்த இந்த குஷன், கூடுதலாக குளிர்ச்சியான அனுபவத்தையும் வழங்குகிறது. எளிதாக எடுத்துச் செல்லக்கூடியதும் நீடித்தும் இருக்கும் ப்ளூ வாட்டர் குஷன் நிம்மதியும் ஓய்வும் நாடும் அனைவருக்கும் சிறந்த தேர்வாகும்."
                  }
                  [language]                  
             } />
        </Stack>
    )
}

export default DescriptionSection;