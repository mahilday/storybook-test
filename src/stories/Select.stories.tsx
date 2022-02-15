import SelectForm from "../containers/Form"

import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: "SelectForm",
    component: SelectForm,
} as ComponentMeta<typeof SelectForm>

const Template: ComponentStory<typeof SelectForm>  = args => <SelectForm {...args} />

export const Primary = Template.bind({})

Primary.args = {
    color:"primary"
}
export const Secondary = Template.bind({})

Secondary.args = {
    color:"secondary"
}
export const Danger = Template.bind({})

Danger.args = {
    color:"danger"
}