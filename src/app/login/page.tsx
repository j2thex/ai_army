'use client'

import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation' // Added for router.push

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const supabase = createClient()
    const router = useRouter() // Initialized useRouter

    const handleLogin = async () => {
        setLoading(true)
        // Temporary bypass
        router.push('/account')
        // Original login logic commented out or removed for bypass
        // try {
        //     const { error } = await supabase.auth.signInWithOAuth({
        //         provider: 'google',
        //         options: {
        //             redirectTo: `${location.origin}/auth/callback`,
        //         },
        //     })
        //     if (error) throw error
        // } catch (error) {
        //     console.error('Error logging in:', error)
        //     alert('Error logging in')
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to your account to continue
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Google Icon SVG */}
                            <svg
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}
