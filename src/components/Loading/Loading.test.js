import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading.js';

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Loading />)
            expect(component).toMatchSnapshot()
        });
    });
});
