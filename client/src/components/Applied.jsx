import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
border-style: solid;
border-color: red;
height: 80%;
width: 30%;
border-radius: 20px;
`
const AddButton = styled.button`
height: 20px;
width:99%;
background-color: #fff;
border-radius: 5px;
border:4px solid transparent;
box-shadow: 0px 0px 7px rgba(25,4,69,0.1);
`



function Applied(props) {
  return (
  <Wrap>Applied

  <AddButton> + </AddButton>

  </Wrap>
    );
}

export default Applied