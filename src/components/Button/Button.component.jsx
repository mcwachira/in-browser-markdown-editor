import React from 'react'
import { BaseButton, GoogleButton } from './Button.styles'


//object that specifies the styles of a button based on the type
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-button'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
} [buttonType])


const Button = ({children, buttonType, ...otherProps}) => {

    const CustomButton = getButton(buttonType)
    return (
        <>
            <CustomButton  {...otherProps}>
                {children}
            </CustomButton>
        </>
      
    )
}

export default Button