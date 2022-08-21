import Input from "./Input";

export default {
    name: 'Input',
    component: Input,
}

export const Enabled = (args) => <Input {...args}/>
Enabled.args = {
    value: '',
    label: 'Label',
    focused: true,
    placeholder: 'Placeholder',

}

export const EnabledFilled = (args) => <Input {...args}/>
EnabledFilled.args = {
    value: '22.50',
    label: 'Label',
    placeholder: 'Placeholder',
}