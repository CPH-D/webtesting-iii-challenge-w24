// Test away!
import React from 'react';
import Display from './Display.js';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

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

    it('green-led test', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);
        // verifying correct colors (css classes)
        expect(unlock).toHaveClass('green-led');
        expect(open).toHaveClass('green-led');
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

    it('red-led test', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        const locked = getByText(/^locked$/i);
        const closed = getByText(/closed/i);
        // verifying correct colors (css classes)
        expect(locked).toHaveClass('red-led');
        expect(closed).toHaveClass('red-led');
    });
});
