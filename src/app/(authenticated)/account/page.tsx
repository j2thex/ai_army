import { createClient } from '@/utils/supabase/server'

export default async function AccountPage() {
    /*
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const email = user?.email
  const avatarUrl = user?.user_metadata?.avatar_url
  */
    const email = 'mock@example.com'
    const avatarUrl = null

    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-normal text-gray-900">Account settings</h1>

            <div className="flex items-center space-x-12">
                {/* Google Icon / Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-400 p-1">
                    {avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={avatarUrl}
                            alt="User Avatar"
                            className="h-full w-full rounded-full object-cover"
                        />
                    ) : (
                        <div className="text-center text-xs text-gray-500">
                            google<br />icon
                        </div>
                    )}
                </div>

                {/* Email Box */}
                <div className="flex h-16 w-96 items-center justify-center rounded-md border-2 border-gray-400 bg-white px-4">
                    <span className="text-lg text-gray-800">
                        email: {email || 'No email found'}
                    </span>
                </div>
            </div>
        </div>
    )
}
