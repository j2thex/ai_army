'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter, usePathname } from 'next/navigation'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    Box,
    Typography,
    Divider,
} from '@mui/material'
import {
    AccountCircle as AccountIcon,
    Note as NoteIcon,
} from '@mui/icons-material'

const DRAWER_WIDTH = 256

export default function Sidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    const menuItems = [
        { text: 'Account', path: '/account', icon: <AccountIcon /> },
        { text: 'Notes', path: '/notes', icon: <NoteIcon /> },
    ]

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Typography variant="h5" component="h1" fontWeight={600}>
                        Menu
                    </Typography>
                </Box>

                {/* Navigation */}
                <List sx={{ flex: 1, py: 2 }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.path} disablePadding sx={{ px: 1 }}>
                            <ListItemButton
                                selected={pathname === item.path}
                                onClick={() => router.push(item.path)}
                                sx={{
                                    borderRadius: 1,
                                    '&.Mui-selected': {
                                        backgroundColor: 'action.selected',
                                    },
                                }}
                            >
                                <Box sx={{ mr: 2, display: 'flex', color: 'action.active' }}>
                                    {item.icon}
                                </Box>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '1.125rem',
                                        fontWeight: 500,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {/* Logout Button */}
                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={handleLogout}
                        sx={{ textTransform: 'none' }}
                    >
                        Logout
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}
