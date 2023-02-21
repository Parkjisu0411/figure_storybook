import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, IconButtonProps, ButtonProps as MuiButtonProps } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: createColor('#D96846')
    },
});

type ButtonProps = Omit<MuiButtonProps, 'label'> 
    & {
        label: string
    };

export const Button = ({ size = 'medium', color = 'primary', variant='contained', label, ...props }: ButtonProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiButton size={size} color={color} variant={variant} {...props}>
                {label}
            </MuiButton>
        </ThemeProvider>
    );
};

export const IconButton = (props: IconButtonProps) => {
    return (
        <MuiIconButton>
            {props.children}
        </MuiIconButton>
    );
}