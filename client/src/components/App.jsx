import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Applied from './Applied.jsx';
import Interview from './Interview.jsx';
import Wishlist from './Wishlist.jsx';

const ApplicationWrap = styled.div`
display: flex;
justify-content: space-between;
height:80%;
width:80%;
font-family: 'Lato', sans-serif;
font-weight: 400;
letter-spacing: 0.3px;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
`;

const Wrap = styled.div`
display: flex;
justify-content: center;
height: 100%;
background-color: rgb(250, 249, 255);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
    this.getCompanies = this.getCompanies.bind(this);
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies() {
    axios.get('/companies')
      .then((res) => {
        this.setState({ companies: res.data });
      });
  }

  render() {
    return (
      <Wrap>
        <ApplicationWrap>
          <Applied companies={this.state.companies} getCompanies={this.getCompanies} />
          <Interview />
          <Wishlist />
        </ApplicationWrap>
      </Wrap>
    );
  }
}
export default App;
