import { makeStyles, MenuItem, TextField, withStyles } from '@material-ui/core';
import React from 'react';

type CustomDropDownProps = any;

const useStyles = makeStyles(() => ({
  selectStyle: {
    borderRadius: '16px',
    marginTop: '20px',
    marginBottom: '20px',
    width: '75%',
  },
  menuStyle: {
    borderRadius: '16px',
  },
}));

const roundedSelectOnFocusStyle = () => ({
  '@global': {
    '.MuiSelect-select:focus': {
      borderRadius: '16px',
    },
    '.MuiPaper-rounded': {
      borderRadius: '16px',
    },
  },
});

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        select
        defaultValue=''
        {...props}
        variant='outlined'
        InputProps={{
          style: {
            borderRadius: '16px',
          },
        }}
        className={classes.selectStyle}
      >
        {props.items.map((item: string, index: number) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default withStyles(roundedSelectOnFocusStyle)(CustomDropDown);
