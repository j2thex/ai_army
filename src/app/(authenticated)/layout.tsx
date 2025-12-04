import Sidebar from '@/components/Sidebar'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Box } from '@mui/material'

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /*
const supabase = await createClient()

const {
  data: { user },
} = await supabase.auth.getUser()

if (!user) {
  redirect('/login')
}
*/

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          p: 4,
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
