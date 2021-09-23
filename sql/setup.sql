DROP TABLE IF EXISTS characters,
stands CASCADE;
CREATE TABLE characters (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NULL,
  japanese_name TEXT NOT NULL,
  image TEXT NOT NULL,
  abilities TEXT NOT NULL,
  nationality TEXT NOT NULL,
  catchphrase TEXT NOT NULL,
  family TEXT NOT NULL,
  chapter TEXT NOT NULL,
  living BOOLEAN NOT NULL,
  is_human BOOLEAN NOT NULL
);
CREATE TABLE stands (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  alternate_name TEXT NOT NULL,
  japanese_name TEXT NOT NULL,
  image TEXT NOT NULL,
  stand_user BIGINT REFERENCES characters(id),
  chapter TEXT NOT NULL,
  abilities TEXT NOT NULL,
  battlecry TEXT NOT NULL
);
