import { Stack,Box, Typography} from "@mui/material";

const ImportanceCard = ({language, icon, heading, description} : {language : 'si' | 'ta' | 'en',icon : string, heading : {en : string, ta : string, si : string}, description : {en : string, ta : string, si : string}}) =>{
    return(
        <Stack
            sx = {{
                position: "relative",
                width : '15rem !important',
                minHeight : '15rem !important',
                borderRadius: "10px",
                backgroundColor : 'white',
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginX : '1rem',
                flexShrink: 0,
                padding : '2rem',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
             <Box
            sx = {{
                width : '5rem',
                height : '5rem',
                backgroundImage : `url(icons/${icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
            }}>

            </Box>
            <Typography fontSize={'1.2rem'} fontWeight={600} marginTop={'1rem'} textAlign={'center'}>{heading[language]}</Typography>
            <Typography fontSize={'0.9rem'} marginTop={'0.2rem'} textAlign={'center'}>{description[language]}</Typography>

            

        </Stack>
    )
}

export default ImportanceCard;