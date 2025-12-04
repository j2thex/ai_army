-- Create notes table
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since auth is bypassed)
CREATE POLICY "Allow all operations" ON notes FOR ALL USING (true);

-- Create index on created_at for faster sorting
CREATE INDEX notes_created_at_idx ON notes(created_at DESC);
