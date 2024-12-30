import { Box, Typography } from "@mui/material"
import AnimatedStack from "../components/animatedStack"
export const ProductPreviewSection_Var_1 = ({text, image, position, textSx} : {position : string, text : string, image : string, textSx : {[key : string] : string}}) =>{
    return <AnimatedStack sx = {{width : '100%'}} alignItems={'center'} justifyContent={'center'}><Box
    sx={{
      position: "relative",
      width : '70vw',
      height : {xs : '80vw', sm : '40vw'},
      borderRadius: "10px",
      backgroundImage : `url(images/banners/${image})`,
      backgroundSize: "cover",
      backgroundPosition: position,
      marginY : '3rem'
    }}
  >
    <Typography sx = {{...textSx, fontSize : {xs : '1rem', sm : '1.5rem', md :'2rem'}, width : '80%', lineHeight : '2rem', position : "absolute", color : 'white', textShadow: '10px 10px 100px rgba(0, 0, 0, 0.3)'}}>{text}</Typography>
  </Box>
  </AnimatedStack>
}


export const ProductPreviewSection_Var_2 = ({text, image, textSx, position} : {position : string, text : string, image : string, textSx : {[key : string] : string}}) =>{
    return <AnimatedStack alignItems={'center'} justifyContent={'center'}><Box
    sx={{
      position: "relative",
      width : '99vw',
      height : {xs : '70vh', sm : '40vw'},
      backgroundImage : `url(images/banners/${image})`,
      backgroundSize: "cover",
      backgroundPosition: position,
    }}
  >
    <Typography sx = {{...textSx, fontSize : '2rem', width : '80%', position : "absolute", color : 'white', textShadow: '10px 10px 100px rgba(0, 0, 0, 0.3)'}}>{text}</Typography>
  </Box>
  </AnimatedStack>
}