// Test away!
import React from 'react';
import Display from './Display.js';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    it('render w/o crash', () => {
        render(<Display />);
    });

    it('open & unlocked test', () => {
        // testing to see if it is true that closed/locked is false
        const { getByText } = render(<Display closed={false} locked={false}/>);
        getByText(/unlocked/i);
        getByText(/open/i);
    });

    it('closed & unlocked test', () => {
        const { getByText } = render(<Display closed={true} locked={false} />);
        getByText(/unlocked/i);
        getByText(/closed/i);
    });
    
    it('closed & locked test', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        // adding '^' and '$' expressions to /locked/i to target EXACTLY the word locked, because locked can be mixed with unlocked
        getByText(/^locked$/i);
        getByText(/closed/i);
    });
});