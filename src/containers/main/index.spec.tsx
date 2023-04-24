import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';
import { Card, Loader } from '../../components';

describe('Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Loader when loading is true', () => {
    wrapper.setState({ loading: true });
    expect(wrapper.find(Loader).length).toBe(1);
  });

  it('renders Card when loading is false and listData has length greater than 0', () => {
    const data = { nodes: [{ title: 'Test', ImageStyle_thumbnail: 'url', last_update: 123 }] };
    wrapper.setState({ loading: false, listData: [data] });
    expect(wrapper.find(Card).length).toBe(1);
  });

  it('sets page state when handleScroll is called', () => {
    const spy = jest.spyOn(Main.prototype, 'handleScroll');
    wrapper.instance().forceUpdate();
    wrapper.instance().handleScroll();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('fetches data when fetchData is called', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    await wrapper.instance().fetchData();
    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});