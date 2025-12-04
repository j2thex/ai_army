'use client'

import NotesTable from '@/components/NotesTable'
import { useEffect, useState } from 'react'

type Note = {
    id: string
    content: string
    author_username?: string
    created_at: string
    updated_at: string
}

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/notes')
            .then((res) => res.json())
            .then((data) => {
                setNotes(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching notes:', error)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading...</div>

    return <NotesTable initialNotes={notes} />
}
