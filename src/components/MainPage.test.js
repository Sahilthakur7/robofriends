import React from 'react';
import { shallow }  from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
	const mockProps = {
		onRequestRobot: jest.fn(),
		robots: ['sahil', 'KV', 'KV2'],
		searchField: '',
		isPending: false,
	};

	wrapper = shallow(<MainPage {...mockProps} />);
});

it('Expects to render the main page component', () => {
	expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
	console.log("wrapper----", wrapper);
	const searchBox = wrapper.find('search-box');
	console.log("searchBox", searchBox)
})