import { CheckBox } from "../components/CheckBox";
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: "Checkbox",
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox>  = args => <CheckBox {...args} />

export const Primary = Template.bind({})

Primary.args ={
    index:1,
    label: `option`,
    handleClick: (e: any): void=>{console.log(e.currentTarget.value)},
    bgcolor: "primary"
}

export const Secondary = Template.bind({});
Secondary.args ={
    index:1,
    label: `option`,
    handleClick: (e: any): void=>{console.log(e.currentTarget.value)},
    bgcolor: "secondary"
}
export const Danger = Template.bind({});
Danger.args ={
    index:1,
    label: `option`,
    handleClick: (e: any): void=>{console.log(e.currentTarget.value)},
    bgcolor: "danger"
}