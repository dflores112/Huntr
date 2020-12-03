import React from 'react';
import Applied from './Applied.jsx'
import Interview from './Interview.jsx'
import Wishlist from './Wishlist.jsx'
import styled from 'styled-components'
const ApplicationWrap = styled.div`
display: flex;
justify-content: space-between;
height:80%;
width:80%;
`

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <ApplicationWrap>
    <Applied/>
    <Interview/>
    <Wishlist/>
    </ApplicationWrap>
    )
  }
}
export default App;