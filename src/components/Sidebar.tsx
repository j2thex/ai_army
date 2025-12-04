'use client'

import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Sidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    const isActive = (path: string) => pathname === path

    return (
        <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-center border-b border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-800">Menu</h1>
            </div>

            <nav className="flex-1 space-y-1 px-2 py-4">
                <Link
                    href="/account"
                    className={`group flex items-center rounded-md px-2 py-2 text-lg font-medium ${isActive('/account')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                >
                    Account
                </Link>
                <Link
                    href="/notes"
                    className={`group flex items-center rounded-md px-2 py-2 text-lg font-medium ${isActive('/notes')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                >
                    Notes
                </Link>
            </nav>

            <div className="border-t border-gray-200 p-4">
                <button
                    onClick={handleLogout}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
