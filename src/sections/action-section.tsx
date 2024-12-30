import { Stack } from "@mui/material";
import ImageSlider from "../components/image-slider";
import OrderSection from "../components/order-section";

const ActionSection = ({language, currentIndex, setCurrentIndex, price, setFormOpen, selectedColor, colors, setSelectedColor} : {currentIndex : number, setCurrentIndex : (index : number) => void, language : 'si' | 'ta' | 'en', price : number, colors : {[key : string] : {en : string, si : string, ta : string}}, selectedColor : string, setFormOpen : (state : boolean) => void, setSelectedColor :  (state : string) => void}) =>{
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx = {{display : 'flex', marginX : '2rem'}} direction={{sm : 'column', md : 'row'}}>
            <ImageSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <OrderSection currentIndex={currentIndex} setCurrentIndex = {setCurrentIndex} language ={language} price={price} colors={colors} setSelectedColor={setSelectedColor} selectedColor={selectedColor} setFormOpen = {setFormOpen} />
        </Stack>
    )
}

export default ActionSection;