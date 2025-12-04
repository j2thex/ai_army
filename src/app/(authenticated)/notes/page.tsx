import { createClient } from '@/utils/supabase/server'
import NotesTable from '@/components/NotesTable'

export default async function NotesPage() {
    const supabase = await createClient()

    const { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching notes:', error)
        return <div>Error loading notes</div>
    }

    return <NotesTable initialNotes={notes || []} />
}
