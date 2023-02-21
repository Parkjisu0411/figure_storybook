import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, IconButton } from '../components/button/Button';
import HomeIcon from '@mui/icons-material/Home';

export default {
    title: 'common/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Text = Template.bind({});
Text.args = {
    label: 'Button'
};

const IconTemplate: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} ><HomeIcon></HomeIcon></IconButton>;
export const Icon = IconTemplate.bind({});
Icon.args = {
    
};
