import React from 'react'

const Modal = ({isVisible, onClose, children}) => {
    if(!isVisible) return null;


    const handleClose =(e) => {
        if(e.target.id ==='wrapper') onClose();
    }

    return (
        <div id="wrapper" className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm'
            onClick={(handleClose)}>
            <div className='md:w-[600px] w-[90%] mx-auto flex flex-col'>
                <button onClick={() => onClose()} className='text-xl text-white place-self-end'
               
                >X</button>
                <div className='p-2 bg-white rounded'>
                {children}
                </div>
            </div>
        </div>
    )
}

export default Modal