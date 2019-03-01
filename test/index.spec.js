import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import index from '../src/index.vue';

const mockData = {};

const createWrapper = mockProps => shallowMount(index, {
	mockProps,
});

let data;
let wrapper;

describe('<index/>', () => {
	beforeEach(() => {
		data = Object.assign({}, mockData);
		wrapper = createWrapper(data);
	});

	it.only('has valid mock data', () => {
		expect(wrapper).to.not.be.an(new Error());
	});

	describe('el', () => {

	});
});
