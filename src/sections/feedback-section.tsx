import { Stack} from "@mui/material";
import {FadeUpTypography} from "../components/fadeupTypography";
import FeedbackCard from "../components/feedback-card";
import { useEffect, useRef } from "react";

const FeedbackSection = ({language} : {language : 'si' | 'ta' | 'en'}) =>{
  const feedbacks = [
    {
        author: {
            name: {
                en: 'Haritha Thiwankara',
                si: 'හරිත තිවංකර',
                ta: 'ஹரித திவாங்கர'
            },
            title: {
                en: 'Software Engineer',
                si: 'මෘදුකාංග ඉංජිනේරු',
                ta: 'மென்பொருள் பொறியாளர்'
            }
        },
        feedback: {
            en: "As a software engineer who spends countless hours at the computer, I've struggled with chronic back pain and other sitting-related issues for years. That was until I discovered this innovative water cushion. After two months of daily use, I can confidently say it's been a game-changer for my comfort and well-being.",
            si: 'පරිගණකයේ පැය ගණන් ගත කරන මෘදුකාංග ඉංජිනේරුවෙකු ලෙස, මම වසර ගණනාවක් තිස්සේ නිදන්ගත කොන්දේ වේදනාව සහ වෙනත් වාඩි වීම සම්බන්ධ ගැටළු සමඟ පොරබදමින් සිටිමි. ඒ මම මෙම නව්‍ය ජල කුෂන් සොයා ගන්නා තුරුය. මාස දෙකක දෛනික භාවිතයෙන් පසු, එය මගේ සුවපහසුව සහ යහපැවැත්ම සඳහා ක්‍රීඩාව වෙනස් කරන්නක් වූ බව මට විශ්වාසයෙන් පැවසිය හැකිය.',
            ta: 'கணினியில் எண்ணற்ற மணிநேரங்களைச் செலவழிக்கும் ஒரு மென்பொருள் பொறியியலாளராக, நான் பல ஆண்டுகளாக நாள்பட்ட முதுகுவலி மற்றும் பிற உட்காருதல் தொடர்பான பிரச்சினைகளுடன் போராடினேன். இந்த புதுமையான நீர் மெத்தையை நான் கண்டுபிடிக்கும் வரை இருந்தது. இரண்டு மாத தினசரி பயன்பாட்டிற்குப் பிறகு, எனது ஆறுதல் மற்றும் நல்வாழ்வுக்காக இது ஒரு கேம் சேஞ்சர் என்று என்னால் நம்பிக்கையுடன் சொல்ல முடியும்.'
        }
    },
    {
        author: {
            name: {
                en: 'Milinda Wijayasekara',
                si: 'මිලින්ද විජයසේකර',
                ta: 'மிலிந்த விஜயசேகர'
            },
            title: {
                en: 'Chief Executive Officer',
                si: 'ප්රධාන විධායක නිලධාරි',
                ta: 'தலைமை நிர்வாக அதிகாரி'
            }
        },
        feedback: {
            en: "I'm writing to praise your 'magic mattress' which I purchased four years ago. It's provided exceptional comfort and support, especially for my trainer staff who drive long distances. The mattress's quality remains top-notch, and I appreciate your after-sales service and health advice. I'm eager to try your latest innovations and will continue recommending your products for a healthier life.",
            si: "මම අවුරුදු හතරකට පෙර මිලදී ගත් ඔබේ 'මැජික් මෙට්ටය' අගය කිරීමට ලියන්නෙමි. එය විශේෂයෙන් දිගු දුර ධාවනය කරන මගේ පුහුණු කාර්ය මණ්ඩලය සඳහා සුවිශේෂී සුවපහසුව සහ සහාය ලබා දී ඇත. මෙට්ටයේ ගුණාත්මකභාවය ඉහළම මට්ටමේ පවතින අතර, ඔබේ අලෙවියෙන් පසු සේවාව සහ සෞඛ්‍ය උපදෙස් මම අගය කරමි. මම ඔබේ නවතම නවෝත්පාදන අත්හදා බැලීමට උනන්දු වන අතර සෞඛ්‍ය සම්පන්න ජීවිතයක් සඳහා ඔබේ නිෂ්පාදන දිගටම නිර්දේශ කරමි.",
            ta: "நான்கு வருடங்களுக்கு முன் நான் வாங்கிய உங்கள் 'மந்திர மெத்தை'யை பாராட்டி எழுதுகிறேன். இது விதிவிலக்கான ஆறுதலையும் ஆதரவையும் வழங்குகிறது, குறிப்பாக நீண்ட தூரம் ஓட்டும் எனது பயிற்சியாளர் ஊழியர்களுக்கு. மெத்தையின் தரம் முதலிடத்தில் உள்ளது, மேலும் உங்கள் விற்பனைக்குப் பிந்தைய சேவை மற்றும் சுகாதார ஆலோசனைகளை நான் பாராட்டுகிறேன். உங்களின் சமீபத்திய கண்டுபிடிப்புகளை முயற்சிக்க ஆர்வமாக உள்ளேன் மேலும் ஆரோக்கியமான வாழ்க்கைக்காக உங்கள் தயாரிப்புகளை தொடர்ந்து பரிந்துரைப்பேன்."
        }
    },
    {
        author: {
            name: {
                en: 'Dr.Priyantha Muthunayake',
                si: 'ආචාර්ය ප්‍රියන්ත මුතුනායක',
                ta: 'கலாநிதி பிரியந்த முத்துநாயக்க'
            },
            title: {
                en: 'Managing Director, Prestige Healthcare',
                si: 'කළමනාකාර අධ්යක්ෂක, Prestige Healthcare',
                ta: 'நிர்வாக இயக்குனர், Prestige Healthcare'
            }
        },
        feedback: {
            en: "The Blue Water Mattress Cushion, made by Blue Water Mattress Cushion Manufacturers and Distributors, has been a huge hit since 2009. It's especially popular with people who sit or drive a lot, because it really helps with that fatigue and discomfort. We've gained a great reputation for selling this cushion in Kurunegala, and we wish the company all the best.",
            si: 'බ්ලූ වෝටර් මෙට්ට කුෂන් නිෂ්පාදකයින් සහ බෙදාහරින්නන් විසින් සාදන ලද බ්ලූ වෝටර් මෙට්‍රස් කුෂන් 2009 සිට විශාල ජනප්‍රියත්වයක් ලබා ඇත. එය බොහෝ වාඩි වී හෝ රිය පැදවූ අය අතර විශේෂයෙන් ජනප්‍රියය, මන්ද එය ඇත්තෙන්ම එම තෙහෙට්ටුව සහ අපහසුතාවයට උපකාරී වේ. කුරුණෑගල ප්‍රදේශයේ මෙම කුෂන් අලෙවි කිරීම සම්බන්ධයෙන් අප විශාල කීර්තියක් ලබා ඇති අතර, අපි සමාගමට සුබ පතන්නෙමු.',
            ta: 'ப்ளூ வாட்டர் மெத்தை குஷன் உற்பத்தியாளர்கள் மற்றும் விநியோகஸ்தர்களால் தயாரிக்கப்பட்ட ப்ளூ வாட்டர் மெத்தை குஷன், 2009 ஆம் ஆண்டு முதல் மிகப் பெரிய வெற்றியைப் பெற்றுள்ளது. இது குறிப்பாக உட்கார்ந்து அல்லது வாகனம் ஓட்டுபவர்களிடையே மிகவும் பிரபலமாக உள்ளது, ஏனெனில் இது சோர்வு மற்றும் அசௌகரியத்தை போக்க உதவுகிறது. குருநாகலில் இந்த குஷன் விற்பனையில் பெரும் நற்பெயரைப் பெற்றுள்ளோம், மேலும் நிறுவனத்திற்கு நல்வாழ்த்துக்கள்.'
        }
    },
    {
        author: {
            name: {
                en: 'Dr. A.F.M Marjaan',
                si: 'ආචාර්ය A.F.M Marjaan',
                ta: 'டாக்டர். ஏ.எஃப்.எம் மர்ஜான்'
            },
            title: {
                en: 'The Medical Centre, 65/2, Gogawela Road, Matale.',
                si: 'වෛද්‍ය මධ්‍යස්ථානය, 65/2, ගොගවෙල පාර, මාතලේ.',
                ta: 'மருத்துவ நிலையம், 65/2, கோகவெல வீதி, மாத்தளை.'
            }
        },
        feedback: {
            en: "This product is a total lifesaver for anyone who has to sit for long periods. It's like magic! The water inside makes it super comfortable, especially if you need to avoid rubbing against your chair. I've been using it for over 4 years now and I can't recommend it enough to people in the Matale district who need that extra back support.",
            si: 'මෙම නිෂ්පාදනය දිගු වේලාවක් වාඩි වී සිටින ඕනෑම කෙනෙකුට සම්පූර්ණ ජීවිතාරක්ෂකයකි. ඒක මැජික් වගේ! ඇතුළත ඇති ජලය එය ඉතා සුවපහසු කරයි, විශේෂයෙන් ඔබේ පුටුවට අතුල්ලමින් වැළකී සිටීමට අවශ්‍ය නම්. මම එය දැනට වසර 4කට වැඩි කාලයක් භාවිතා කරන අතර මාතලේ දිස්ත්‍රික්කයේ එම අමතර ආධාරක අවශ්‍ය පුද්ගලයින්ට එය ප්‍රමාණවත් ලෙස නිර්දේශ කිරීමට මට නොහැක.',
            ta: 'நீண்ட நேரம் உட்கார வேண்டிய எவருக்கும் இந்த தயாரிப்பு ஒரு முழுமையான உயிர்காக்கும். இது மந்திரம் போல! உள்ளே இருக்கும் நீர் மிகவும் வசதியாக இருக்கும், குறிப்பாக உங்கள் நாற்காலியில் தேய்ப்பதைத் தவிர்க்க வேண்டும். நான் இப்போது 4 வருடங்களுக்கும் மேலாக இதைப் பயன்படுத்துகிறேன், மேலும் கூடுதல் ஆதரவு தேவைப்படும் மாத்தளை மாவட்டத்தில் உள்ளவர்களுக்கு என்னால் போதுமான அளவு பரிந்துரைக்க முடியாது.'
        }
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
                    }, 32);
                
                    return () => clearInterval(interval);
                }, []);

    return (
    <Stack paddingY = {'3rem'} sx = {{height : '100%'}} spacing={5}>
        <FadeUpTypography sx = {{fontSize :'1.5rem'}} text = {
          {
            en: "Our Valuable Customer Feedback",
            si: "අපගේ වටිනා පාරිභෝගික ප්‍රතිපෝෂණය",
            ta: "எங்கள் மதிப்புமிக்க வாடிக்கையாளர் கருத்து"
          }[language]          
        } />
    <Stack ref = {scrollRef} paddingBottom = {'2rem'} sx = {{overflowX : 'scroll', width : '100%'}} direction={'row'}  justifyContent={'flex-start'}>
       {[...feedbacks, ...feedbacks].map(item => <FeedbackCard language={language} {...item} />)}   
        </Stack>
    </Stack>)
}

export default FeedbackSection;