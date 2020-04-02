import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const Alerts=(props)=>{
const classes = useStyles();

const alertMessage=(props)=>{
    switch(props.ErrorType){
    case 'error':return(<Alert severity="error">{props.Message}</Alert>);
        break;
    case 'warning':return(<Alert severity="warning">{props.Message}</Alert>);
        break;
    case 'info':return(<Alert severity="info">{props.Message}</Alert>);
        break;
    case 'success':return(<Alert severity="success">{props.Message}</Alert>);
        break;
        default :return
        }
}

return(
    <div className={classes.root}>
        {alertMessage(props)}
    </div>
  
)
}
export default Alerts