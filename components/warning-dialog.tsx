"use client"

import toast from 'react-hot-toast';

interface WarningDialogProps {
    text: string;
}


const WarningDialog = () => {
//   return (
    // <div className='absolute z-100'>
    
    const text = "Этот сайт находится в разработке и не предназначен для использования. Функции сайта не работают, а он используется лишь для проверки и подтверждения авторизации и лицензий." 

    const showToast = () => {
        toast.error(text, {duration: 10000})
    }
    
    // toast.error(text, {duration: 4000});

    setTimeout(showToast, 1000)

    return(
    <h1 className='absolute'>
    </h1>
    )
    // setTimeout(showToast, 2000)
    {/* </div> */}
  {/* ) */}
}

export default WarningDialog