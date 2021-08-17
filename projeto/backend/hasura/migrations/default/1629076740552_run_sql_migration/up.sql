UPDATE role
SET path = text2ltree('owner') || path;
