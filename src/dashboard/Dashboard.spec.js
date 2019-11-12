// Test away
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react/pure';
import Dashboard from './Dashboard';

describe('<Dashboard', () => {
    beforeEach(cleanup);
    it('render w/o crash', () => {
        render(<Dashboard />);
    });
});


describe('<Dashboard /> state transitions', () => {
    const { getByText } = render (<Dashboard />);
    it('default state open & unlocked', () => {
        
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    });

    
});