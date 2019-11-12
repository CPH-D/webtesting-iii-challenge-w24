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