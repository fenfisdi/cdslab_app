import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useFixedParametersStyles } from './styles'
import { useFixedParametersState } from './state'
import ParametersForm from './children/ParametersForm'
import LoaderComponent from '../../ui/Loader'


const FixedParameters = ({predefinedModel,handleClickFixedParameters,loading}) => {
  const classes = useFixedParametersStyles()
  const {updateStep,step}= useFixedParametersState()
  const {name,indetifier}=predefinedModel

  return (
    <Grid 
      xs={12}
      container      
      direction="column" 
      justify="center" 
      alignItems="center" 
      spacing={1}   
    >
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" className={classes.title}>
      Fixed Paramaters
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
          {name} Model 
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
      Configure parameters values    
        </Typography>
      </Grid>
      {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
      {!loading && <ParametersForm modelIndetifier={indetifier} formParametersSave={handleClickFixedParameters}/>}
      
    </Grid>
  )
}

export default FixedParameters
