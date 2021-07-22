import React from 'react';
import { Box, Card, Typography, makeStyles, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import CustomTextField from '../widgets/CustomTextField';
import CustomDropDown from '../widgets/CustomDropDown';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

interface FormProps {}

const useStyles = makeStyles(() => ({
  cardStyle: {
    borderRadius: '16px',
    marginTop: '20px',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center',
    flexDirection: 'column',

    transition: 'box-shadow 0.2s ease 0s',
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 8px',
    },
  },
}));

const ODForm: React.FC<FormProps> = (props) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        odType: '',
        odDate: '',
        toDate: '',
        odLeaveType: '',
        reason: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form>
          <Box
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h4'
              style={{
                marginTop: '10px',
              }}
            >
              Online OD Form
            </Typography>
            <Card className={classes.cardStyle}>
              <Field
                name='odType'
                label='Enter the OD Type'
                items={['Normal OD', 'Special OD']}
                error={!!errors.odType}
                helperText={errors.odType}
                as={CustomDropDown}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field
                  component={DatePicker}
                  label='Enter OD Date'
                  format='dd/MM/yyyy'
                  style={{
                    width: '75%',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                  variant='inline'
                  name='odDate'
                />
              </MuiPickersUtilsProvider>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field
                  component={DatePicker}
                  label='To Date'
                  format='dd/MM/yyyy'
                  style={{
                    width: '75%',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                  variant='inline'
                  name='toDate'
                />
              </MuiPickersUtilsProvider>

              <Field
                name='odLeaveType'
                label='OD Leave Type'
                items={[
                  'Visit for NIT Campus',
                  'Sports Week',
                  'Medical leave',
                  'Placement',
                  'Other',
                ]}
                error={!!errors.odLeaveType}
                helperText={errors.odLeaveType}
                as={CustomDropDown}
              />
              <Field
                name='reason'
                label='Enter reason'
                error={!!errors.reason}
                helperText={errors.reason}
                as={CustomTextField}
              />
              <Button>Submit</Button>
            </Card>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default ODForm;
