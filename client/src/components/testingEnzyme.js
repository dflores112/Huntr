import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
  // it('renders three <Foo /> components', () => {
  //   const wrapper = shallow(<MyComponent />);
  //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
  // });

  it('renders an id`Applied`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Applied')).to.have.lengthOf(1);
  });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
