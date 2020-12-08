import React from 'react';
import renderer from 'react-test-renderer';
import {Avatar} from "./Avatar";
import {contactMock} from '../../../__mocks__/contact'

test('Avatar should match snapshot', () => {
    const component = renderer.create(
        <Avatar contact={contactMock} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
