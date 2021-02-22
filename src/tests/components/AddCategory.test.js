import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target : {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('no debe de enviar la información con onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        // Simular inputChange
        input.simulate('change', {target : {value}});
        // Simular submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        //setCategories debe llamarse
        expect(setCategories).toHaveBeenCalled();
        //caja de texto limpia
        expect(input.prop('value')).toBe('');


    })
    
    
    
    
})
