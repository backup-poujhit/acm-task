import React from 'react';
import { TextField } from '@material-ui/core';
type CustomTextFieldProps = any;

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <TextField
      variant='outlined'
      multiline
      rowsMax={4}
      InputProps={{
        style: {
          borderRadius: '16px',
          height: '100px',
        },
      }}
      {...props}
      style={{
        marginTop: '20px',
        paddingBottom: '20px',

        width: '75%',
      }}
    />
  );
};
export default CustomTextField;
