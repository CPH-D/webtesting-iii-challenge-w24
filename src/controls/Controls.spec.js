// Test away!
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
    it('render w/o crash', () => {
        render(<Controls />);
    });

    it('open and unlocked', () => {
        const closeCheck = jest.fn();
        const lockCheck = jest.fn();
        const { getByText } = render(<Controls closed={false}
                                                locked={false}
                                                toggleClosed={closeCheck}
                                                toggleLocked={lockCheck}
                                                />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeTruthy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeCheck).toBeCalled();

        fireEvent.click(lockButton);
        expect(lockCheck).not.toBeCalled();
    });
});

