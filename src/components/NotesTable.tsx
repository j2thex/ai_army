'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Note = {
    id: string
    content: string
    created_at: string
    updated_at: string
}

export default function NotesTable({ initialNotes }: { initialNotes: Note[] }) {
    const [notes, setNotes] = useState<Note[]>(initialNotes)
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [content, setContent] = useState('')
    const [openMenuId, setOpenMenuId] = useState<string | null>(null)
    const router = useRouter()

    const handleCreate = async () => {
        if (!content.trim()) return

        try {
            const res = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            })

            if (res.ok) {
                const newNote = await res.json()
                setNotes([newNote, ...notes])
                setContent('')
                setIsCreating(false)
                router.refresh()
            }
        } catch (error) {
            console.error('Error creating note:', error)
        }
    }

    const handleUpdate = async (id: string) => {
        if (!content.trim()) return

        try {
            const res = await fetch(`/api/notes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            })

            if (res.ok) {
                const updatedNote = await res.json()
                setNotes(notes.map((n) => (n.id === id ? updatedNote : n)))
                setEditingId(null)
                setContent('')
                router.refresh()
            }
        } catch (error) {
            console.error('Error updating note:', error)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this note?')) return

        try {
            const res = await fetch(`/api/notes/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setNotes(notes.filter((n) => n.id !== id))
                setOpenMenuId(null)
                router.refresh()
            }
        } catch (error) {
            console.error('Error deleting note:', error)
        }
    }

    const startEdit = (note: Note) => {
        setEditingId(note.id)
        setContent(note.content)
        setOpenMenuId(null)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setContent('')
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-normal text-gray-900">Notes</h1>

            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-300 bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                Content
                            </th>
                            <th className="w-16 px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note) => (
                            <tr key={note.id} className="border-b border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {formatDate(note.created_at)}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {editingId === note.id ? (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                className="flex-1 rounded border border-gray-300 px-3 py-1"
                                                autoFocus
                                            />
                                            <button
                                                onClick={() => handleUpdate(note.id)}
                                                className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        note.content
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="relative">
                                        <button
                                            onClick={() =>
                                                setOpenMenuId(openMenuId === note.id ? null : note.id)
                                            }
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                            </svg>
                                        </button>
                                        {openMenuId === note.id && (
                                            <div className="absolute right-0 z-10 mt-2 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
                                                <button
                                                    onClick={() => startEdit(note)}
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(note.id)}
                                                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {isCreating && (
                            <tr className="border-b border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-500">New</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Enter note content..."
                                            className="flex-1 rounded border border-gray-300 px-3 py-1"
                                            autoFocus
                                        />
                                        <button
                                            onClick={handleCreate}
                                            className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsCreating(false)
                                                setContent('')
                                            }}
                                            className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="border-t border-gray-300 p-4">
                    <button
                        onClick={() => setIsCreating(true)}
                        disabled={isCreating}
                        className="w-full rounded-md border-2 border-dashed border-gray-300 py-3 text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 disabled:opacity-50"
                    >
                        + New note
                    </button>
                </div>
            </div>
        </div>
    )
}
