-- Add categories column to notes table
ALTER TABLE notes ADD COLUMN categories TEXT[] DEFAULT '{}';

-- Create index on categories for faster filtering (GIN index for array)
CREATE INDEX notes_categories_idx ON notes USING GIN (categories);
