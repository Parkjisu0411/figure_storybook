import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, IconButton } from '../components/button/Button';

export default {
    title: 'common/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
    label: 'Button'
};

const IconTemplate: ComponentStory<typeof Button> = (args) => <IconButton {...args} />;

export const Icon = IconTemplate.bind({});
Icon.args = {
    label: 'Button'
};
