'use client'

import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4f46e5', // indigo-600
            light: '#6366f1',
            dark: '#4338ca',
        },
        secondary: {
            main: '#64748b', // slate-500
        },
        background: {
            default: '#f9fafb', // gray-50
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        h1: {
            fontSize: '2.25rem',
            fontWeight: 400,
        },
        h2: {
            fontSize: '1.875rem',
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 6,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
    },
})
