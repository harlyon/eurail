import React from 'react';
import renderer from 'react-test-renderer';
import {ContactCard} from "./ContactCard";
import {contactMock} from '../../../__mocks__/contact'
import {ExpandedContactContext} from "../../services/providers";

test('ContactCard should match snapshot', () => {
    const mockStateFn = jest.fn();
    const element = renderer.create(
        <ExpandedContactContext.Provider value={[null, mockStateFn]}>
            <ContactCard contact={contactMock} />
        </ExpandedContactContext.Provider>
    );
    let tree = element.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockStateFn).not.toBeCalled();
    //click on the close button and expect state to change
    element.root.findByType('button').props.onClick();
    expect(mockStateFn).toBeCalled();
    expect(tree).toMatchSnapshot();
});
