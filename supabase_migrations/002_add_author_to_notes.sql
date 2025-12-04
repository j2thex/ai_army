-- Add author_username column to notes table
ALTER TABLE notes ADD COLUMN author_username TEXT;

-- Create index on author_username for faster filtering
CREATE INDEX notes_author_username_idx ON notes(author_username);
