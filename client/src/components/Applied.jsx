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
outline: 0;

`;

const FormWrap = styled.form`
display:grid;
grid-template-columns: 100%;
grid-template-rows: 100%;
`;

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
      visible: false, company: '', date: '', position: '',
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false });
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  render() {
    const appliedCompanies = this.props.companies.map((company) => (
      <div>
        {' '}
        {company.company}
      </div>
    ));

    const {company, date, position} = this.state;
    return (
      <Wrap>
        Applied
        <Modal isOpen={this.state.visible} style={customStyles}>
          <button onClick={this.hideModal}>X</button>
          <FormWrap onSubmit={this.handleSubmit}>
            <label>
              Company Name:
              <input type="text" name="company" value={company} onChange={this.handleChange} />
            </label>
            <label>
              Date applied:
              <input type="text" name="date" value={date} onChange={this.handleChange} />
            </label>
            <label>
              Position:
              <input type="text" name="position" value={position} onChange={this.handleChange} />
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
