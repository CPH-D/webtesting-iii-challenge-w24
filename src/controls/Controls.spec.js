// Test away!
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
    it('render w/o crash', () => {
        render(<Controls />);
    });

    it('open & unlocked test', () => {
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

    it('closed & unlocked test', () => {
        const closeCheck = jest.fn();
        const lockCheck = jest.fn();
        const { getByText } = render(<Controls closed={true}
                                                locked={false}
                                                toggleClosed={closeCheck}
                                                toggleLocked={lockCheck}
                                                />);
        const closeButton = getByText(/open gate/i);
        const lockButton = getByText(/lock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeFalsy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeCheck).toBeCalled();

        fireEvent.click(lockButton);
        expect(lockCheck).toBeCalled();
    });


    it('closed & locked test', () => {
        const closeCheck = jest.fn();
        const lockCheck = jest.fn();
        const { getByText } = render(<Controls closed={true}
                                                locked={true}
                                                toggleClosed={closeCheck}
                                                toggleLocked={lockCheck}
                                                />);
        const closeButton = getByText(/open gate/i);
        const lockButton = getByText(/unlock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeTruthy();
        expect(lockButton.disabled).toBeFalsy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeCheck).not.toBeCalled();

        fireEvent.click(lockButton);
        expect(lockCheck).toBeCalled();
    });
});

