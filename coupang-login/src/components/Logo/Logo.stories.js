/* eslint-disable import/no-anonymous-default-export */
import Logo from "./Logo";

const Template = args => <Logo {...args}/>

export const colorful = Template.bind({});
export const black = Template.bind({});
export const mono = Template.bind({});

colorful.args = {
  type: 'colorful'
};
black.args = {
  type: 'black'
};
mono.args = {
  type: 'mono'
};

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['mono', 'black', 'colorful']
      }
    }
  },
};