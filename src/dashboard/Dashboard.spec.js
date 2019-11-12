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
        
        // check display text
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    });

    it('open & unlocked to closed & unlocked', () => {        
        const closeButton = getByText(/^close gate$/i);
        fireEvent.click(closeButton);

        // check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^open gate$/i);
    });

    it('closed & unlocked to closed & locked', () => {        
        const lockButton = getByText(/^lock gate$/i);
        fireEvent.click(lockButton);

        // check display text
        getByText(/^closed$/i);
        getByText(/^locked$/i);

        // check button text
        getByText(/^unlock gate$/i);
        getByText(/^open gate$/i);
    });

    it('closed & locked to closed & unlocked', () => {        
        const lockButton = getByText(/^unlock gate$/i);
        fireEvent.click(lockButton);

        // check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^open gate$/i);
    });

    it('closed & unlocked to open & unlocked', () => {        
        const openButton = getByText(/^open gate$/i);
        fireEvent.click(openButton);

        // check display text
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    });
});