import { checkMinLength } from '../../../../Forms/validators/validatorsCheks'

export const MAX_LENGTH_MESSAGE = 'The maximum value allowed is ?.'
export const MIN_LENGTH_MESSAGE = 'The minimum value allowed is ?.'
export const REQUIRED_MESSAGE = 'This field is requiered.'

export const extraParametersValidators =({minValue, maxValue})=>{  
  const validators=[
    
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', maxValue),
      check: (value,maxValue)=>{
        return !(value>maxValue ) 
      },
      valueToCheck: maxValue
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', minValue),
      check: (value,minValue)=>{
        return !(minValue>value) 
      },
      valueToCheck: minValue
    }
  ]
  
  return validators
}

export const checkErrorsExtraParametersForm = ({extraParameters,handleShowError})=>{
  
  if(extraParameters.length > 1){        
    const {value:valueFirst,errors} = extraParameters[0]
    const {value:valueSecond } = extraParameters[1]         
    const setErrors = extraParameters[0]['custom-actions']['setErrors']
    if(errors.length == 1 && valueFirst!='' && valueSecond!='' && parseInt(valueFirst)<parseInt(valueSecond)){ 
      setErrors([])
    }      
  }

  extraParameters.every(fieldExtraParameters => {
    const {errors} = fieldExtraParameters
    if(errors.length>0){              
      handleShowError(errors.map(e => e.message)?.join('\n'))
      return false
    }      
    handleShowError('')
    return true
  })

  if(extraParameters.length>1){ 
    const {value:valueFirst,errors} = extraParameters[0]
    const {value:valueSecond } = extraParameters[1] 
    const setErrors = extraParameters[0]['custom-actions']['setErrors']
    if(errors.length ==0 && valueFirst!='' && valueSecond!='' && parseInt(valueFirst)>=parseInt(valueSecond)){           
      setErrors([...errors,{message:'The minimum value must be less than maximum value'}])
    }
  }
}