// Test away!
import React from 'react';
import Display from './Display.js';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    it('render w/o crash', () => {
        render(<Display />);
    })
})