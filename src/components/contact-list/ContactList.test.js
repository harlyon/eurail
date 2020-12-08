import React from 'react';
import renderer from 'react-test-renderer';
import {ContactList} from "./ContactList";

const { act } = renderer;


test('ContactCard should match snapshot', () => {

    let element;
    act(() => {
        element = renderer.create(
            <ContactList/>,
        );
    });

    let tree = element.toJSON();
    expect(tree).toMatchSnapshot();

});
