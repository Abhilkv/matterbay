import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from './index';

describe('Header component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render the header with the correct title', () => {
    const title = wrapper.find('.title');
    expect(title.text()).toEqual('MatterBay');
  });

  it('should render the header with the correct class name', () => {
    const header = wrapper.find('.header');
    expect(header.hasClass('header')).toBe(true);
  });
});