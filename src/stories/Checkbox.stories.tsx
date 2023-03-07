import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../components/checkbox/Checkbox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default {
    title: 'common/Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const ButtonTemplate: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;
export const Default = ButtonTemplate.bind({});
Default.args = {

};

export const Label = ButtonTemplate.bind({});
Label.args = {
    label: 'Label'
};

export const Icon = ButtonTemplate.bind({});
Icon.args = {
    icon: <BookmarkBorderIcon />,
    checkedIcon: <BookmarkIcon />
};