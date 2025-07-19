import Alert from 'react-bootstrap/Alert';
import React from 'react';
type AlertProps = {
  type: string;
  msg: string;
};
const renderAlert = ({type,msg}:AlertProps) => {
  return (
      <Alert variant={type}>
        <strong>{msg}</strong>
      </Alert>
  );
};

export default renderAlert;
