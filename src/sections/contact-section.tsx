import { Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactUs = ({language} : {language : 'si' | 'ta' | 'en'}) =>{
    return (
        <Stack justifyContent={'center'} alignContent={'center'} spacing={1} sx = {{marginY : '2rem', paddingX : '10vw'}}>
            <Typography textAlign={'center'} sx = {{fontSize : "1.8rem", fontWeight : 600}}>{
                {
                    en: "Blue Water Mattress Pvt. Ltd.",
                    si: "බ්ලු වෝටර් මැට්ටරාස් පෞද්ගලික සමාගම.",
                    ta: "ப்ளூ வாட்டர் மெட்ரஸ் பி.வி.டி. லிமிடெட்."
                  }[language]
                  }
            </Typography>
            <Typography textAlign={'center'}  sx = {{fontSize : "1rem", color : '#424242'}}>{{
  en: "No 98, Don Saiman Road, Kawdupitiya, Gampola.",
  si: "අංක 98, දොන් සයිමන් මාවත, කවුඩුපිටිය, ගම්පොල.",
  ta: "எண் 98, டான் சைமன் வீதி, கவுடுபிடிய, கம்போலா."
}[language]
}</Typography>
<Typography sx = {{fontSize : "1rem", color : '#424242', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><EmailIcon sx = {{marginRight : '1rem'}} /> Bluewatermattress@gmail.com</Typography>
            <Stack justifyContent={'center'} spacing={{'xs' : 1, 'sm' : 2}} alignItems={'center'} direction={{'xs' : 'column', 'sm' : 'row'}}>
                <Typography sx = {{fontSize : "1rem", color : '#424242', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><LocalPhoneIcon sx = {{marginRight : '1rem'}} />071-732 8000</Typography>
                <Typography sx = {{fontSize : "1rem", color : '#424242', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><LocalPhoneIcon sx = {{marginRight : '1rem'}} />076-542 1800</Typography>
            </Stack>
            <Stack justifyContent={'center'} spacing={{'xs' : 1, 'sm' : 2}} alignItems={'center'} direction={{'xs' : 'column', 'sm' : 'row'}}>
                <Typography sx = {{fontSize : "1rem", color : '#424242', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><LocalPhoneIcon sx = {{marginRight : '1rem'}} />071-682 1000</Typography>
                <Typography sx = {{fontSize : "1rem", color : '#424242', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><LocalPhoneIcon sx = {{marginRight : '1rem'}} />077-721 1800</Typography>
            </Stack>
            
        </Stack>
    )
}

export default ContactUs;