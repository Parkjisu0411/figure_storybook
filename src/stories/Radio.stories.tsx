import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from '../components/radio/Radio';

export default {
    title: 'common/Radio',
    component: Radio
} as ComponentMeta<typeof Radio>;

const RadioTemplate: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
export const Default = RadioTemplate.bind({});
Default.args = {

};

const GroupTemplate: ComponentStory<typeof RadioGroup> = (args) =>
    <RadioGroup {...args} >
        <Radio></Radio>
        <Radio></Radio>
    </RadioGroup>;
export const Group = GroupTemplate.bind({});
Group.args = {
    label: 'Group Label'
};
