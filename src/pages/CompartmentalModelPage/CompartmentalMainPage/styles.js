import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
export const useCompartmentalMainPageStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '10px',
    marginBottom: '20px',
    padding: theme.spacing(2),
    'box-shadow': '1px 3px 9px 5px rgba(0,0,0,0.14)',
    background: '#c4c4c442',
    fontWeight:'500',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  loading: {
    'min-height': ' 500px',
    'align-items': 'center'
  }
}))


export const CompartmentalMainPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CompartmentalMainPageCards = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:30px
`