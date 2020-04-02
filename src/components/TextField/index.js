import TextField from '@material-ui/core/TextField';
import React from 'react'
  const TextFields=(props)=>{
    return(
        <TextField
        variant={props.variant}
        margin={props.margin}
        id={props.id}
        label={props.label}
        name={props.name}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={(e)=>props.onChange(e,props.name)}
        required={props.required}
        fullWidth={props.fullWidth}
        autoFocus={props.autoFocus}
      />
    )
}
export default TextFields