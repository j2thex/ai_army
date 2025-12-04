import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = await createClient()

    const { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(notes)
}

export async function POST(request: Request) {
    const supabase = await createClient()
    const { content } = await request.json()

    if (!content) {
        return NextResponse.json({ error: 'Content is required' }, { status: 400 })
    }

    const { data: note, error } = await supabase
        .from('notes')
        .insert({ content })
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(note, { status: 201 })
}
