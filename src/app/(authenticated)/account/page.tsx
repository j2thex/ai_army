'use client'

import { Box, Typography, Avatar, Paper, Stack } from '@mui/material'

export default function AccountPage() {
    // Mock data since auth is bypassed
    const email = 'mock@example.com'
    const avatarUrl = null

    return (
        <Box>
            <Typography variant="h3" component="h1" gutterBottom fontWeight={400}>
                Account settings
            </Typography>

            <Stack direction="row" spacing={6} sx={{ mt: 4 }}>
                {/* Avatar */}
                <Avatar
                    src={avatarUrl || undefined}
                    sx={{
                        width: 96,
                        height: 96,
                        border: 2,
                        borderColor: 'divider',
                    }}
                >
                    {!avatarUrl && (
                        <Typography variant="caption" color="text.secondary">
                            google
                            <br />
                            icon
                        </Typography>
                    )}
                </Avatar>

                {/* Email Display */}
                <Paper
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 4,
                        py: 2,
                        minWidth: 384,
                    }}
                >
                    <Typography variant="h6">email: {email || 'No email found'}</Typography>
                </Paper>
            </Stack>
        </Box>
    )
}
