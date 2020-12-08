import React from 'react';
import renderer from 'react-test-renderer';
import {ContactItem, toggleNextContact} from "./ContactItem";
import {contactMock, contactMock2} from "../../../__mocks__/contact";
import {ExpandedContactContext} from "../../services/providers";

const { act } = renderer;

describe('ContactItem',() => {
    test('should should match snapshot', () => {
        let element;
        const mockStateFn = jest.fn();

        act(() => {
            element = renderer.create(
                <ExpandedContactContext.Provider value={[contactMock, mockStateFn]}>
                    <ContactItem contact={contactMock} />,
                </ExpandedContactContext.Provider>
            );
        });
        let tree = element.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('if expanded contact is not the same as contactMock should not expand', () => {
        let element;
        const mockStateFn = jest.fn();

        act(() => {
            element = renderer.create(
                <ExpandedContactContext.Provider value={[undefined, mockStateFn]}>
                    <ContactItem contact={contactMock} />,
                </ExpandedContactContext.Provider>
            );
        });
        let tree = element.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            element = renderer.create(
                <ExpandedContactContext.Provider value={[contactMock2, mockStateFn]}>
                    <ContactItem contact={contactMock} />,
                </ExpandedContactContext.Provider>
            );
        });
        tree = element.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('should set contact if not the same as expandedContact', () => {
        const contact = contactMock;
        const expandedContact = contactMock2;

        const result = toggleNextContact(contact,expandedContact);

        expect(result).toBe(contact);
    })

    test('should unset contact if is the same as expandedContact', () => {
        const contact = contactMock;

        const result = toggleNextContact(contact,contact);

        expect(result).toBe(undefined);
    })
})