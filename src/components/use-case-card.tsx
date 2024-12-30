import { Box, Typography} from "@mui/material";
const UseCaseCard = ({image, heading, language} : {language : 'si' | 'en' | 'ta' ,image : string, heading : {en : string, si : string, ta : string}}) =>{
    return(
        <Box
            sx = {{
                position: "relative",
                width : '15rem !important',
                height : '60vh !important',
                borderRadius: "10px",
                backgroundImage : `url(/images/usecases/${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginX : '1rem',
                flexShrink: 0
            }}>

            <Typography sx ={{lineHeight : '1.5rem', bottom : 0, position : 'absolute', padding : '1rem', textAlign : 'left', color : 'white', fontSize : '1.5rem', textShadow: '10px 10px 100px rgba(0, 0, 0, 0.3)'}}>
               {heading[language]}
            </Typography>

        </Box>
    )
}

export default UseCaseCard;