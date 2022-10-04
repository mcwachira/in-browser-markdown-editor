import React from 'react'
import { FormInputLabel, Input, Group } from './FormInput.styled'


const FormInput = ({label, ...otherProps}) => {
  return (

<Group>
          {/* ..otherProps is for adding other values to my input element */}
          <Input {...otherProps} />
          {
              label && (
                  <FormInputLabel shrink={otherProps.value.length}>
                      {label}
                  </FormInputLabel>
              )}
</Group>
  )
}

export default FormInput