import Select from "./Select"

export default {
    name: 'Select',
    component: Select
}

export const Enabled = (args) => <Select {...args}/>
Enabled.args = {
    label: 'Currency',
}