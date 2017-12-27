import Vue from 'vue'
import Main from '../../src/components/Main'

describe('Main', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Main.data).toBe('function');
        const defaultData = Main.data();
        expect(defaultData.more).toBe(false);
    });
    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
        const vm = new Vue(Main).$mount();
        expect(vm.more).toBe(false);
    })
});
