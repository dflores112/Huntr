import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';


const Wrap = styled.div`
border-style: solid;
border-color: red;
height: 80%;
width: 30%;
border-radius: 20px;
`;
const AddButton = styled.button`
height: 20px;
width:99%;
background-color: #fff;
border-radius: 5px;
border:4px solid transparent;
box-shadow: 0px 0px 7px rgba(25,4,69,0.1);
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class Applied extends React.Component {
constructor(props){
  super(props)
this.state = {visible: false}

this.showModal = this.showModal.bind(this);
}

showModal() {
  this.setState({ visible: true });
}

hideModal() {
  this.setState({ visible: false });
}


  render() {
    const appliedCompanies = this.props.companies.map((company) => (
      <div>
        {' '}
        {company.company}
      </div>
    ));
    return (
      <Wrap>
        Applied
        <Modal isOpen={this.state.visible} style={customStyles}>
          <div>helllo</div>
        </Modal>
        <AddButton onClick={this.showModal}> + </AddButton>
        {appliedCompanies}
      </Wrap>
    );
  }
}

export default Applied;
