import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
border-style: solid;
border-color: purple;
height: 80%;
width: 30%;
border-radius: 20px;

`
const AddButton = styled.button`
height: 20px;
width:90%;
`


function Interview(props) {
  return (
  <Wrap>Interview
    <AddButton> + </AddButton>
  </Wrap>

    );
}

export default Interview