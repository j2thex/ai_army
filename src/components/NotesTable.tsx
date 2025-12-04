'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Button,
    Stack,
} from '@mui/material'
import {
    MoreVert as MoreVertIcon,
    Add as AddIcon,
    Close as CloseIcon,
} from '@mui/icons-material'
import { Chip } from '@mui/material'

type Note = {
    id: string
    content: string
    author_username?: string
    categories: string[]
    created_at: string
    updated_at: string
}

export default function NotesTable({ initialNotes }: { initialNotes: Note[] }) {
    const [notes, setNotes] = useState<Note[]>(initialNotes)
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [content, setContent] = useState('')
    const [categories, setCategories] = useState<string[]>([])
    const [newCategory, setNewCategory] = useState('')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
    const router = useRouter()

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, noteId: string) => {
        setAnchorEl(event.currentTarget)
        setSelectedNoteId(noteId)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        setSelectedNoteId(null)
    }

    const handleCreate = async () => {
        if (!content.trim()) return

        try {
            const res = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, categories }),
            })

            if (res.ok) {
                const newNote = await res.json()
                setNotes([newNote, ...notes])
                setContent('')
                setCategories([])
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
                body: JSON.stringify({ content, categories }),
            })

            if (res.ok) {
                const updatedNote = await res.json()
                setNotes(notes.map((n) => (n.id === id ? updatedNote : n)))
                setEditingId(null)
                setContent('')
                setCategories([])
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
                handleMenuClose()
                router.refresh()
            }
        } catch (error) {
            console.error('Error deleting note:', error)
        }
    }

    const startEdit = (note: Note) => {
        setEditingId(note.id)
        setContent(note.content)
        setCategories(note.categories || [])
        handleMenuClose()
    }

    const cancelEdit = () => {
        setEditingId(null)
        setContent('')
        setCategories([])
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    return (
        <Box>
            <Typography variant="h3" component="h1" gutterBottom fontWeight={400}>
                Notes
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, width: '15%' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Content</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: '25%' }}>Categories</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: '15%' }}>Author</TableCell>
                            <TableCell sx={{ width: 64 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes.map((note) => (
                            <TableRow key={note.id} hover>
                                <TableCell>{formatDate(note.created_at)}</TableCell>
                                <TableCell>
                                    {editingId === note.id ? (
                                        <Stack direction="row" spacing={1}>
                                            <TextField
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                size="small"
                                                fullWidth
                                                autoFocus
                                            />
                                            <Button
                                                variant="contained"
                                                size="small"
                                                onClick={() => handleUpdate(note.id)}
                                            >
                                                Save
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                onClick={cancelEdit}
                                            >
                                                Cancel
                                            </Button>
                                        </Stack>
                                    ) : (
                                        note.content
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingId === note.id ? (
                                        <Stack spacing={1}>
                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                {categories.map((cat) => (
                                                    <Chip
                                                        key={cat}
                                                        label={cat}
                                                        onDelete={() => setCategories(categories.filter((c) => c !== cat))}
                                                        size="small"
                                                    />
                                                ))}
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <TextField
                                                    value={newCategory}
                                                    onChange={(e) => setNewCategory(e.target.value)}
                                                    placeholder="Add category"
                                                    size="small"
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' && newCategory.trim()) {
                                                            e.preventDefault()
                                                            if (!categories.includes(newCategory.trim())) {
                                                                setCategories([...categories, newCategory.trim()])
                                                            }
                                                            setNewCategory('')
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() => {
                                                        if (newCategory.trim()) {
                                                            if (!categories.includes(newCategory.trim())) {
                                                                setCategories([...categories, newCategory.trim()])
                                                            }
                                                            setNewCategory('')
                                                        }
                                                    }}
                                                >
                                                    Add
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    ) : (
                                        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                                            {(note.categories || []).map((cat) => (
                                                <Chip key={cat} label={cat} size="small" variant="outlined" />
                                            ))}
                                        </Stack>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" color="text.secondary">
                                        {note.author_username || 'Unknown'}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        size="small"
                                        onClick={(e) => handleMenuOpen(e, note.id)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                        {isCreating && (
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2" color="text.secondary">
                                        New
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <TextField
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Enter note content..."
                                            size="small"
                                            fullWidth
                                            autoFocus
                                        />
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={handleCreate}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => {
                                                setIsCreating(false)
                                                setContent('')
                                                setCategories([])
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={1}>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                            {categories.map((cat) => (
                                                <Chip
                                                    key={cat}
                                                    label={cat}
                                                    onDelete={() => setCategories(categories.filter((c) => c !== cat))}
                                                    size="small"
                                                />
                                            ))}
                                        </Stack>
                                        <Stack direction="row" spacing={1}>
                                            <TextField
                                                value={newCategory}
                                                onChange={(e) => setNewCategory(e.target.value)}
                                                placeholder="Add category"
                                                size="small"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && newCategory.trim()) {
                                                        e.preventDefault()
                                                        if (!categories.includes(newCategory.trim())) {
                                                            setCategories([...categories, newCategory.trim()])
                                                        }
                                                        setNewCategory('')
                                                    }
                                                }}
                                            />
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                onClick={() => {
                                                    if (newCategory.trim()) {
                                                        if (!categories.includes(newCategory.trim())) {
                                                            setCategories([...categories, newCategory.trim()])
                                                        }
                                                        setNewCategory('')
                                                    }
                                                }}
                                            >
                                                Add
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<AddIcon />}
                        onClick={() => setIsCreating(true)}
                        disabled={isCreating}
                        sx={{
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            py: 1.5,
                            textTransform: 'none',
                        }}
                    >
                        New note
                    </Button>
                </Box>
            </TableContainer>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem
                    onClick={() => {
                        const note = notes.find((n) => n.id === selectedNoteId)
                        if (note) startEdit(note)
                    }}
                >
                    Update
                </MenuItem>
                <MenuItem
                    onClick={() => selectedNoteId && handleDelete(selectedNoteId)}
                    sx={{ color: 'error.main' }}
                >
                    Delete
                </MenuItem>
            </Menu>
        </Box>
    )
}
