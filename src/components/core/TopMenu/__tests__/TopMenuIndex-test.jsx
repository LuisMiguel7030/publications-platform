import React from 'react';
import { mount } from 'enzyme';
import 'jest';
import TopMenu from '../TopMenu';

describe('Sign in page form', () => {
    let result;

    it('renders correctly', () => {
        result = mount(<TopMenu />)

        expect(result).toMatchSnapshot();
    });

    it('should render with the correct porp', () => {
        result = mount(<TopMenu title="TEST"/>)

        expect(result.prop('title')).toBe('TEST');
    });
});