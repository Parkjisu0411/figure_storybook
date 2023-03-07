import React from 'react';
import { createTheme, ThemeProvider, RadioProps, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: createColor('#D96846'),
        secondary: createColor('#696969')
    }
});

export const Radio = ({ ...props }: RadioProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiRadio {...props}></MuiRadio>
        </ThemeProvider>
    );
};

type RadioGroupProps = Omit<MuiRadioGroupProps, 'label'>
    & {
        label: string,
        children: React.ReactElement<React.JSXElementConstructor<typeof Radio>> | React.ReactElement<React.JSXElementConstructor<typeof Radio>>[]
    };

export const RadioGroup = ({ row = true, label, ...props }: RadioGroupProps) => {
    return (
        <ThemeProvider theme={theme}>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <MuiRadioGroup row={row} {...props}>
                    {React.Children.map(props.children, children => {
                        return (
                            <FormControlLabel value='' control={<Radio />} label={''} />
                        )
                    })}
                </MuiRadioGroup>
            </FormControl>
        </ThemeProvider>
    );
};
