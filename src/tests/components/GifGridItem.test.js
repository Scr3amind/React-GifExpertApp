import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente <GifGridItem />', () => {

    const testTitle = 'titulo';
    const testUrl = 'https://demo.jpg';
    const wrapper = shallow(<GifGridItem title={testTitle} url={testUrl} />);

    test('debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(testTitle);
        
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        
        expect(img.prop('src')).toBe(testUrl);
        expect(img.prop('alt')).toBe(testTitle);
    })

    test('debe de tener animate___fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect(className.includes('animate__fadeIn')).toBe(true);
        
    })
    
    
    
    
})
