import { Box, Stack } from '@mui/material'
import './App.css'
import Header from './components/header'
import ActionSection from './sections/action-section'
import DescriptionSection from './sections/description-section'
import UseCasesSection from './sections/use-cases-section'
import ImportanceSection from './sections/importance-section'
import FeedbackSection from './sections/feedback-section'
import { useState } from 'react'
import OrderForm from './components/order-form'
import ContactUs from './sections/contact-section'
import SpeedDial from '@mui/material/SpeedDial';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function App() {
  const langParam = new URLSearchParams(window.location.search).get("lang")
  const lang: 'en' | 'si' | 'ta' = (['en', 'si', 'ta'] as const).includes(langParam as 'en' | 'si' | 'ta') ? langParam as 'en' | 'si' | 'ta' : 'en';
  const [formOpen, setFormOpen] = useState<boolean>(false)
  const [language, setLanguage] = useState<'en' | 'si' | 'ta'>(lang)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const colors = {
    "#000000": { en: "Black", ta: "கருப்பு", si: "කළු" },
    "#0000FF": { en: "Blue", ta: "நீலம்", si: "නිල" },
    "#00008B": { en: "Dark Blue", ta: "கரும நீலம்", si: "ගැඹුරු නිල" },
    "#000080": { en: "Navy Blue", ta: "டோப்பு நீலம்", si: "නාවික නිල" },
    "#007FFF": { en: "Wira Blue", ta: "விரா நீலம்", si: "විර නිල" },
    "#4169E1": { en: "River Blue", ta: "ஆறு நீலம்", si: "ගංගා නිල්" },
    "#FF0000": { en: "Red", ta: "சிகப்பு", si: "රතු" },
    "#8B0000": { en: "Dark Red", ta: "கரும சிகப்பு", si: "ගැඹුරු රතු" },
    "#db343b": { en: "Poppy Red", ta: "பாப்பி சிகப்பு", si: "පොපි රතු" },
    "#B22222": { en: "Brick Red", ta: "சிறு செங்கல் சிகப்பு", si: "ගඩොල් රතු" },
    "#FFC0CB": { en: "Pink", ta: "இளஞ்சிவப்பு", si: "රෝස" },
    "#F0E68C": { en: "Golden Tan", ta: "தங்க நிறம்", si: "රන් පියුම" },
    "#A52A2A": { en: "Brown", ta: "பழுப்பு", si: "දුඹුරු" },
    "#D2691E": { en: "Chocolate Brown", ta: "சாக்லேட் பழுப்பு", si: "චොකොලට් දුඹුරු" },
    "#B87333": { en: "Spice Brown", ta: "மசாலா பழுப்பு", si: "මුසු දුඹුරු" },
    "#800000": { en: "Meroon", ta: "மரூன்", si: "මැරෝන්" },
    "#008000": { en: "Green", ta: "பச்சை", si: "කොළ" },
    "#006400": { en: "Dark Green", ta: "கரும பச்சை", si: "ගැඹුරු කොළ" },
    "#808080": { en: "Gray", ta: "சாம்பல்", si: "අළු" },
    "#B0C4DE": { en: "Ash", ta: "சாம்பல் பூ", si: "අළු අැල්ම" },
    "#F5F5DC": { en: "Bage", ta: "பேஜ்", si: "බේජ්" }
};


  const [selectedColor, setSelectedColor] = useState<string>(Object.keys(colors)[0])
  const price = 5750

  return (
    <Stack>
      <OrderForm language = {language} price = {price} selectedColor={selectedColor} setSelectedColor={setSelectedColor} colors={colors} formOpen = {formOpen} setFormOpen={setFormOpen} />
      <Header language={language} setLanguage={setLanguage} />
      <Box sx = {{height : '5rem'}}></Box>
      <ActionSection currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} language={language} price={price} colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} setFormOpen = {setFormOpen} />
      <DescriptionSection language={language} />
      

      <UseCasesSection language = {language} />
      {/* <ProductPreviewSection_Var_2 position='center' text = {"1 Year Manufacture Warranty"} textSx={{top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
}} image= {'2.png'} />

<ProductPreviewSection_Var_2 position='center' text = {"1 Year Manufacture Warranty"} textSx={{top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
}} image= {'2.png'} /> */}
      
      <ImportanceSection language = {language} />
      {/* <ProductPreviewSection_Var_1 position='center' text = {"Comes With Carrying Bag"} textSx={{textAlign : 'start', color : 'white', top: '5vw',
      left: '5vw',
}} image= {'1.png'} /> */}
      <FeedbackSection language = {language} />
      <ContactUs language = {language} />

      <SpeedDial
  ariaLabel="SpeedDial basic example"
  onClick={() => setFormOpen(true)}
  sx={{
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    "& .MuiSpeedDial-fab": {
      backgroundColor: "black", // Initial background color
      "&:hover": {
        backgroundColor: "#0f0f0f", // Hover background color
      },
    },
  }}
  icon={<ShoppingBagIcon />}
/>
    </Stack>
  )
}

export default App
