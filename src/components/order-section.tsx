import { Box, Button, Stack, Typography, Tooltip } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const OrderSection = ({language, price, colors, selectedColor, setSelectedColor, setFormOpen} : {currentIndex : number, setCurrentIndex : (index : number) => void, language : 'en' | 'si' | 'ta', price : number, colors : {[key : string] : {en : string, si : string, ta : string}}, selectedColor : string, setSelectedColor : (value : string) => void, setFormOpen : (value : boolean) => void}) =>{
    // useEffect(() =>{
    //     setCurrentIndex(Object.keys(colors).indexOf(selectedColor))
    // },[selectedColor])

    // useEffect(() =>{
    //     setSelectedColor(Object.keys(colors)[currentIndex])
    // }, [currentIndex])
    return(
        <Stack alignItems={'center'} sx = {{padding : '1rem'}} spacing={2}>
            <Typography fontSize={'2rem'} fontWeight={600} fontStyle={'uppercase'}>{{ en: "BLUE WATER SEAT CUSHION", si: "බ්ලූ වෝටර් සීට් කුෂන්", ta: "ப்ளூ வாட்டர் சீட் குஷன்" }[language]
                  
            
            }</Typography>
            <Typography sx = {{color : '#424242', paddingX : '3rem'}}>
                {
                    {
                        en: "Experience unmatched comfort and support with the Blue Water Seat Cushion, thoughtfully designed to enhance your well-being and everyday relaxation.",
                        si: "ඔබේ යහපැවැත්ම සහ දිනපතා විවේකය වැඩිදියුණු කිරීම සඳහා විශේෂයෙන් නිර්මාණය කළ බ්ලූ වෝටර් සීට් කුෂන් සමඟ අසමසම සන්සුන්භාවය සහ සුවපහසුව අත්විඳින්න.",
                        ta: "உங்கள் நலன் மற்றும் தினசரி ஓய்வை மேம்படுத்த சிறப்பாக வடிவமைக்கப்பட்ட ப்ளூ வாட்டர் சீட் குஷன் குஷனுடன் மறுக்கமுடியாத நிம்மதியையும் ஆதரவையும் அனுபவிக்கவும்."
                      }[language]
                      
                }
                
            </Typography>
            <Stack alignItems={'center'}>
            <Stack direction={'row'} height={'2rem'} spacing={1} alignItems={'center'}>
                {Object.entries(colors).slice(0,10).map(([hex, _]) => <Tooltip title={colors[hex][language]} arrow><Box onClick = {() => setSelectedColor(hex)} sx = {{ borderRadius : '0.2rem', cursor : 'pointer', width : (selectedColor === hex) ? '1.8rem' : '1.3rem', height :(selectedColor === hex) ? '1.8rem' : '1.3rem', backgroundColor : hex, transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',}}></Box></Tooltip>)}
            </Stack>
            <Stack direction={'row'} height={'2rem'} spacing={1} alignItems={'center'}>
                {Object.entries(colors).slice(10).map(([hex, _]) => <Tooltip title={colors[hex][language]} arrow><Box onClick = {() => setSelectedColor(hex)} sx = {{ borderRadius : '0.2rem', cursor : 'pointer', width : (selectedColor === hex) ? '1.8rem' : '1.3rem', height :(selectedColor === hex) ? '1.8rem' : '1.3rem', backgroundColor : hex, transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',}}></Box></Tooltip>)}
            </Stack>
            </Stack>

            <Stack direction={'row'} spacing={1}>
            <Typography sx = {{color : '#424242'}} fontSize={'2.5rem'} fontWeight={400}>
                {
                    {
                        en: "LKR",
                        si: "රුපියල්",
                        ta: "ரூபாய்"
                      }[language]
                      
                }
            </Typography>
            <Typography fontSize={'2.5rem'} fontWeight={400} fontStyle={'uppercase'}>{new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(price)}</Typography>
            </Stack>
            <Button variant="contained" endIcon = {<ShoppingBagIcon sx = {{marginLeft : '0.5rem'}} />} sx = {{paddingX : '3rem', paddingY : '0.6rem', borderRadius : '2rem', textTransform : 'none', color : 'white', backgroundColor : 'black'}} onClick={() => setFormOpen(true)}>
            {
                {
                    en: "Buy Now",
                    si: "දැන් ගන්න",
                    ta: "இப்போது வாங்கவும்"
                  }[language]
                  
            }
            </Button>
        </Stack>
    )
}

export default OrderSection;