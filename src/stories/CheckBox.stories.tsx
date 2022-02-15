import { CheckBox } from "../components/CheckBox";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { SyntheticEvent } from "react";

export default {
    title: "Checkbox",
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox>  = args => <CheckBox {...args} />

export const Blue = Template.bind({})

Blue.args ={
    index:1,
    label: `option`,
    handleClick: (e: SyntheticEvent<HTMLInputElement>): void=>{console.log(e.currentTarget.value)}
}