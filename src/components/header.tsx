import {Stack, Typography, Button } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
const Header = ({language, setLanguage} : {language : 'en' | 'si' | 'ta', setLanguage : (state : 'en' | 'si' | 'ta') => void}) =>{
    return(
        <Stack direction={'row'} sx ={{
            position : 'fixed',
            zIndex : 10,
            top : 0,
            padding : '1rem 2rem',
            backgroundColor : 'white',
            width : '100%',
            alignItems : 'center',
            display : 'flex',
            justifyContent : 'space-between'

        }}>
            <Stack direction={'row'} textAlign={'center'} justifyContent={'center'} spacing={0.8}>
            <Typography sx = {{fontSize : '1.2rem', fontWeight : 600, color : '#424242'}}>Aqua Comfort.</Typography>
           
            </Stack>

            
            <Button variant="contained" startIcon = {<TranslateIcon sx = {{height : '1rem'}} />} sx = {{fontSize : '0.7rem', paddingX : '1rem', paddingY : '0.3rem', borderRadius : '1rem', textTransform : 'none', color : 'white', backgroundColor : 'black', marginRight : '3rem'}} onClick={() => {
                setLanguage(language === 'en' ? 'si' : language === 'si' ? 'ta' : 'en')
            }}>{language === 'en' ? 'English' : language === 'si' ? 'සිංහල' : 'தமிழ்'}</Button>
           

        </Stack>
    )
}

export default Header;