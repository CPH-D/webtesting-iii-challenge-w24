// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
    it('render w/o crash', () => {
        render(<Controls />);
    });
});
