import { Box, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const FeedbackCard = ({author, feedback, language}: {language : 'si' | 'ta' | 'en', author : {
    name: {
        en: string;
        si: string;
        ta: string;
    };
    title: {
        en: string;
        si: string;
        ta: string;
    };
}, feedback : {
    en: string;
    si: string;
    ta: string;
}}) =>{
    return(
        <Box
            sx = {{
                position: "relative",
                width : '20rem !important',
                borderRadius: "10px",
                backgroundColor : '#F7F7F7',
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginX : '1rem',
                padding : '2rem 1rem',
                flexShrink: 0,
                display: 'flex',
                justifyContent : 'start',
                alignItems : 'center',
                flexDirection : 'column'
            }}>
            <AccountCircleIcon sx = {{fontSize : '4rem'}}/>                

            <Typography sx ={{fontSize : '0.9rem', marginTop : '1rem', paddingX : '1rem', textAlign : 'center'}}>
                {feedback[language]}
            </Typography>
            <Typography fontWeight={600} sx ={{marginTop : '0.3rem', paddingX : '1rem', textAlign : 'center', fontSize : '0.8rem'}}>
                {author.name[language]}
            </Typography>
            <Typography sx ={{marginTop : '0.3rem', paddingX : '1rem', textAlign : 'center', fontSize : '0.8rem'}}>
                {author.title[language]}
            </Typography>

        </Box>
    )
}

export default FeedbackCard;