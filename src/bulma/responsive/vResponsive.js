import { debounce } from 'lodash';
import { ResizeSensor } from 'css-element-queries';
import ResponsiveTable from './ResponsiveTable';

let table = null;
let sensor = null;

export default {
    inserted: (el, binding, { context }) => {
        if (binding.value) {
            table = new ResponsiveTable(el, context);
            sensor = new ResizeSensor(el, debounce(() => table && table.fit(), 16));
        }
    },

    unbind: () => {
        table = null;
        sensor = null;
    },
};
