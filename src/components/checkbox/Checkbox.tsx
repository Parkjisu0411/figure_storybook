import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps, FormGroup, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: createColor('#D96846'),
        secondary: createColor('#696969')
    },
});

type CheckboxProps = Omit<MuiCheckboxProps, 'label'> 
    & {
        label: string
    };

export const Checkbox = ({ label, ...props}: CheckboxProps) => {
    if(label) {
        return (
            <ThemeProvider theme={theme}>
                <FormGroup>
                    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
                </FormGroup>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <MuiCheckbox {...props }>
            </MuiCheckbox>
        </ThemeProvider>
    );
};
