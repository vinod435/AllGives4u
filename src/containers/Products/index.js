import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EnhancedTable from '../../components/Table';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function FormPropsTextFields(props) {
    const classes = useStyles();
    console.log(props.productadd,'vinod')
  return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="filled-required"
          label="Product Name"
        />
    </form>
    <EnhancedTable/>
    </>
  );
}
const mapStateToProps=(state)=>{
return{todoList:state.productadd}
}

export default connect(mapStateToProps)(FormPropsTextFields)