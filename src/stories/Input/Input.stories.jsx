import Input from "./Input";

export default {
    name: 'Input',
    component: Input
}

export const Enabled = (args) => <Input {...args}/>
Enabled.args = {
    value: '',
    label: 'Label',
    placeholder: 'Placeholder',
    currencyIcon: '$'
}

export const Error = (args) => <Input {...args}/>
Error.args = {
    label: 'Value',
    value: 'DSADd',
    placeholder: 'Placeholder',
    error: 'Please use only numbers',
    currencyIcon: '$',
}