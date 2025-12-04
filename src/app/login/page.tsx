'use client'

import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { generateNickname } from '@/utils/nickname'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const supabase = createClient()
    const router = useRouter()

    const handleLogin = async () => {
        setLoading(true)
        // Generate a random nickname and set it in a cookie
        const nickname = generateNickname()
        document.cookie = `username=${nickname}; path=/; max-age=31536000` // Valid for 1 year

        router.push('/account')
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card
                elevation={3}
                sx={{
                    width: '100%',
                    maxWidth: 448,
                }}
            >
                <CardContent sx={{ p: 5 }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
                            Welcome Back
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sign in to your account to continue
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<GoogleIcon />}
                        onClick={handleLogin}
                        disabled={loading}
                        sx={{
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: '1rem',
                        }}
                    >
                        Sign in with Google
                    </Button>
                </CardContent>
            </Card>
        </Container>
    )
}
