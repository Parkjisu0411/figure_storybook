import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, IconButton } from '../components/button/Button';
import HomeIcon from '@mui/icons-material/Home';

export default {
    title: 'common/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Contained = ButtonTemplate.bind({});
Contained.args = {
    label: 'Button'
};

export const Outlined = ButtonTemplate.bind({});
Outlined.args = {
    label: 'Button',
    variant: 'outlined'
};

const IconTemplate: ComponentStory<typeof IconButton> = (args) => <IconButton {...args}></IconButton>;
export const Icon = IconTemplate.bind({});
Icon.args = {
    children: <HomeIcon />
};

export const OutlinedIcon = IconTemplate.bind({});
OutlinedIcon.args = {
    children: <HomeIcon />,
    outlined: true
};
