import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';

const Wrap = styled.div`
// border-style: solid;
// border-color: red;
height: 80%;
width: 300px;
border-radius: 20px;
`;
const AddButton = styled.button`
height: 20px;
width:99%;
background-color: #fff;
border-radius: 5px;
border:4px solid transparent;
box-shadow: 0px 0px 7px rgba(25,4,69,0.1);
outline: 0;

`;

const FormWrap = styled.form`
display:grid;
grid-template-columns: 100%;
grid-template-rows: 100%;
`;

const ApplicationTiles = styled.div`
width: 271px;
color: white;
height: 96px;
background-color: rgba(84, 148, 244, 0.85);
border-radius: 5%;
padding: 2px 2px 2px 7px;
border: 4px solid transparent;
margin: 5px;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '300px',
  },
};

class Applied extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false, company: '', description: '', position: '', location: '',
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCompany = this.addCompany.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false });
  }

  addCompany() {
    const {
      company, description, position, location,
    } = this.state;

    const application = {
      company, location, position, description, applied: true, interview: false, wishlist: false,
    };

    axios.post('/applied', {
      application,
    })
      .then(() => this.props.getCompanies())
      .then(event.preventDefault);
  }

  render() {
    const appliedCompanies = this.props.companies.map((company) => (
      <ApplicationTiles>
        {' '}
        {company.name}
      </ApplicationTiles>
    ));

    const {
      company, description, position, location, visible,
    } = this.state;
    return (
      <Wrap>
        Applied
        <Modal isOpen={visible} style={customStyles}>
          <button type="submit" onClick={this.hideModal}>X</button>
          <FormWrap onSubmit={this.addCompany}>
            <label>
              Company Name:
              <input type="text" name="company" value={company} onChange={this.handleChange} required />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={description} onChange={this.handleChange} required />
            </label>
            <label>
              Position:
              <input type="text" name="position" value={position} onChange={this.handleChange} required />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={location} onChange={this.handleChange} required />
            </label>
            <input type="submit" value="Submit" />
          </FormWrap>

        </Modal>
        <AddButton onClick={this.showModal}> + </AddButton>
        {appliedCompanies}
      </Wrap>
    );
  }
}

export default Applied;
