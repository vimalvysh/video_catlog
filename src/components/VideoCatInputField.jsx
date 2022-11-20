import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const VideoCatInputField = ({ handleSerachValuehange }) => {
  const [searchValue, setSerachValue] = useState('american');

  return (
    <>
      <div className='d-flex'>
        <Form.Control onChange={e => setSerachValue(e.target.value)} defaultValue='american' size='small' placeholder='Search....' />
        <Button onClick={() => handleSerachValuehange(searchValue)}>Search</Button>
      </div>
    </>
  );
};

export default VideoCatInputField;
