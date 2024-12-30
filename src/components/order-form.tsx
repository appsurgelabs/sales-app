import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Box, TextField,IconButton, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const OrderForm = ({language, price, formOpen, setFormOpen, selectedColor, colors, setSelectedColor }: {language : 'si' | 'ta' | 'en', price : number, selectedColor: string, setSelectedColor: (color: string) => void, colors: {[key : string] :{si : string, en : string, ta : string}}, formOpen: boolean, setFormOpen: (state: boolean) => void }) => {

    const colorOptions = Object.keys(colors).map(color  => ({ value: color, label: colors[color][language] }))
    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [quantity, setQuantity] = useState<number | string>(1)

    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [quantityError, setQuantityError] = useState('');

    const [success, setSuccess] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() =>{
        if(formOpen == true){
        setName('')
        setPhoneNumber('')
        setEmail('')
        setQuantity(1)

        setNameError('')
        setEmailError('')
        setPhoneNumberError('')

        setSuccess(false)
        setLoading(false)
        }
    },[formOpen])

    function validateEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }
    
    function validateSriLankanPhoneNumber(phoneNumber: string): boolean {
        const phoneRegex = /^0(7[1-9]|1[0-9]|2[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9])\d{7}$/;
        return phoneRegex.test(phoneNumber);
      }

    const handleClose = () => {
        setFormOpen(false);
    };

    const handleSubmit = async () => {
        let headers = new Headers();

        fetch("https://script.google.com/macros/s/AKfycbx6qLTpENqrTnqBga9Zv-vDc0sSvlgY2q5xAN2uXsPvp_MBPzvNdG01b0Xo0N0M4Shzzg/exec", {
            method: "POST",
            redirect: "follow",
            mode: 'cors',
            headers : headers,
            body: JSON.stringify({name: name, email : email, phonenumber : phoneNumber, color : colors[selectedColor]['en'], quantity : quantity}), // Replace with actual data
          })
            .then(() => {setLoading(false); setSuccess(true);})
            .catch((error) => console.error("Error:", error));
        // try {
        //   const response = await fetch('', { // Replace with your Web App URL
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({name: name, email : email, phonenumber : phoneNumber, color : selectedColor, quantity : quantity}),
        //   });
    
        //   await response.json();
        //   setSuccess(true)
        // } catch (error) {
        //   console.error('Error:', error);
        //   alert('Failed to add record');
        // }
      };

    const submitForm = () =>{
        let successState = true;
        if(name.trim() == ''){
            setNameError({ en: "Enter Your Name", si: "ඔබේ නම ඇතුලත් කරන්න", ta: "உங்கள் பெயரை உள்ளிடவும்" }[language])
            successState = false;
        }
        else{
            setNameError('')
        }

        if(!validateEmail(email)){
            setEmailError({ en: "Invalid Email", si: "අවලංගු විද්‍යුත් තැපැල් ලිපිනය", ta: "தவறான மின்னஞ்சல்" }[language])
            successState = false;
        }
        else{
            setEmailError('')
        }

        if(!validateSriLankanPhoneNumber(phoneNumber)){
            setPhoneNumberError({ en: "Invalid Sri Lankan Phone Number", si: "අවලංගු ශ්‍රී ලංකා දුරකථන අංකය", ta: "தவறான இலங்கை தொலைபேசி எண்" }[language])
            successState = false;
        }
        else{
            setPhoneNumberError('')
        }

        if(!quantity){
            setQuantityError({ en: "Invalid Quantity", si: "අවලංගු ප්‍රමාණය", ta: "தவறான அளவு" }[language])
            successState = false;
        }
        else{
            if(Number(quantity) < 1){
                setQuantityError({ en: "Invalid Quantity", si: "අවලංගු ප්‍රමාණය", ta: "தவறான அளவு" }[language])
                successState = false;
            }
            else{
                setQuantityError('')
            }
        }

        if(successState){
            setLoading(true)
           handleSubmit()
        }


    }


    return (
        <Dialog
            open={formOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
            
            <DialogContent sx={{ paddingY: '1rem', marginTop : '2rem'}}>

                {!success && <Stack sx={{ paddingY: '1rem' }} spacing={2}>
                    <TextField error={nameError != ''} helperText={nameError} onChange={(e) => setName(e.target.value)} value={name} label={{ en: 'Name', si: 'නම', ta: 'பெயர்'}[language]} variant="outlined" />
                    <TextField error={emailError != ''} helperText={emailError} onChange={(e) => setEmail(e.target.value)} value={email} label={{en: 'Email', si: 'ඊ-මේල්', ta: 'மின்னஞ்சல்'}[language]} type='email' variant="outlined" />
                    <TextField error={phoneNumberError != ''} helperText={phoneNumberError} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} label={{ en: 'Contact Number', si: 'සම්බන්ධතා අංකය', ta: 'தொலைபேசி எண்'}[language]} variant="outlined" />

                    <Stack direction={'row'} spacing={2}>
                    <FormControl sx = {{width : '100%'}}>
                        <InputLabel id="color-select-label">{{ en: 'Product Color', si: 'නිෂ්පාදන වර්ණය', ta: 'தயாரிப்பு வண்ணம்'}[language]}</InputLabel>

                        <Select
                            labelId="color-select-label"
                            value={selectedColor}
                            onChange={(event) => { setSelectedColor(event.target.value) }}
                            label={{ en: 'Product Color', si: 'නිෂ්පාදන වර්ණය', ta: 'தயாரிப்பு வண்ணம்'}[language]}
                            renderValue={(selected) => {
                                return (
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                backgroundColor: selected,
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '4px',
                                                marginRight : '1rem'
                                            }}
                                        />
                                        <span>{colors[selected][language]}</span>
                                    </Box>
                                );
                            }}
                        >
                            {colorOptions.map((color, index) => (
                                <MenuItem sx={{ display: 'flex' }} key={index} value={color.value}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            backgroundColor: color.value,
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '4px',
                                            marginRight : '1rem'
                                        }}
                                    />
                                    {color.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField error = {Boolean(quantityError)} helperText = {quantityError}  sx = {{width : '100%'}} value={quantity} onChange={(e) => setQuantity(e.target.value)} label={{ en: 'Quantity', si: 'ප්‍රමාණය', ta: 'பொதுவான அளவு' }[language]} type='number' variant="outlined" />
                    </Stack>
                </Stack>}

                {success && <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ paddingY: '1rem', height : '40vh'}}>
                    <ShoppingBagIcon sx ={{fontSize : '6rem'}} />
                    <Stack alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={500}>{
                        { en: 'Your Order Has Been Placed!', 
                            si: 'ඔබගේ ඇණවුම තබා ඇත!', 
                            ta: 'உங்கள் ஆர்டர் வெற்றிகரமாக செய்யப்பட்டுள்ளது!' }[language]
                        }</Typography>
                    <Typography>{
                        { en: "We'll Contact You Soon", 
                            si: 'අපි शीග්‍රයෙන් ඔබව සම්බන්ධවනු ඇත', 
                            ta: 'நாம் விரைவில் உங்களுடன் தொடர்பு கொள்வோம்' }[language]
                        }</Typography>
                    
                    </Stack>
                    <Button endIcon = {<CheckIcon />} variant='contained' sx = {{textTransform : 'none', color : 'white', backgroundColor : 'black'}} onClick={handleClose} autoFocus>
                    {{ en: "Back to Page", si: 'පිටුවට ආපසු', ta: 'பக்கத்திற்கு திரும்பவும்' }[language]}
                </Button>
                </Stack>}

            </DialogContent>
            <DialogActions sx = {{padding : '1rem', display : 'flex', justifyContent : 'flex-end'}}>
            <IconButton onClick={handleClose}  sx = {{position : 'absolute', top : '10px', right : '10px'}}>
  <CloseIcon/>
</IconButton>
                        <Stack alignItems={'flex-end'}>
                {!success && <Typography sx = {{padding : '0.5rem 1rem', borderRadius : '1rem'}} fontWeight={500}>{{ en: "LKR", si: 'රු.', ta: 'ரூ.' }[language]} {quantity ? new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(quantity as number * price) : '0.00'}</Typography>}
                {!success && <Button endIcon = {<ShoppingBagIcon />} variant='contained' sx = {{textTransform : 'none', color : 'white', backgroundColor : 'black'}} onClick={submitForm} autoFocus>
                    {{ en: "Place Order", si: 'ඇණවුම දක්වන්න', ta: 'ஆர்டர் இடுக' }[language]}
                </Button>
                }
                </Stack>
            </DialogActions>
        </Dialog>
    );
}

export default OrderForm;