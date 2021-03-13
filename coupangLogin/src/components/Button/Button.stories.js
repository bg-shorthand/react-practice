/* eslint-disable import/no-anonymous-default-export */
import Button from "./Button";

const Template = args => <Button {...args}/>

export const primaryNormal = Template.bind({});

primaryNormal.args = {
  mode: 'primary',
  state: 'normal'
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    }
  },
};