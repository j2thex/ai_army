'use client'

import { useEffect, useState, useCallback } from 'react'
import { ReactFlow, Background, Controls, Node, Edge, useNodesState, useEdgesState, addEdge, Connection } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Box, Typography } from '@mui/material'

type Note = {
    id: string
    content: string
    author_username?: string
    categories: string[]
    created_at: string
}

const initialNodes: Node[] = []
const initialEdges: Edge[] = []

export default function MindmapPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    )

    useEffect(() => {
        fetch('/api/notes')
            .then((res) => res.json())
            .then((data: Note[]) => {
                // Transform notes into nodes
                // Simple layout: grid
                const newNodes = data.map((note, index) => {
                    const col = index % 3
                    const row = Math.floor(index / 3)
                    return {
                        id: note.id,
                        position: { x: col * 300, y: row * 200 },
                        data: {
                            label: (
                                <Box sx={{ p: 1, maxWidth: 200 }}>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        {note.author_username || 'Unknown'}
                                    </Typography>
                                    <Typography variant="body2" noWrap>
                                        {note.content}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {(note.categories || []).join(', ')}
                                    </Typography>
                                </Box>
                            )
                        },
                        style: {
                            border: '1px solid #777',
                            padding: 10,
                            borderRadius: 5,
                            background: 'white',
                            width: 250
                        },
                    }
                })
                setNodes(newNodes)
            })
            .catch((error) => console.error('Error fetching notes:', error))
    }, [setNodes])

    return (
        <Box sx={{ height: 'calc(100vh - 100px)', width: '100%' }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight={400}>
                Mindmap
            </Typography>
            <Box sx={{ height: '100%', border: '1px solid #ddd', borderRadius: 1 }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </Box>
        </Box>
    )
}
