CREATE TABLE contact_links (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  icon_name text NOT NULL,
  label text NOT NULL,
  href text NOT NULL,
  value text NOT NULL,
  is_download boolean DEFAULT false,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_contact_links" ON contact_links FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_contact_links" ON contact_links FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_contact_links" ON contact_links FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_contact_links" ON contact_links FOR DELETE
  TO authenticated USING (true);

CREATE TABLE research_areas (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE research_areas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_research_areas" ON research_areas FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_research_areas" ON research_areas FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_research_areas" ON research_areas FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_research_areas" ON research_areas FOR DELETE
  TO authenticated USING (true);

CREATE TABLE reflections (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  position text NOT NULL,
  text_content text[] NOT NULL,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_reflections" ON reflections FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_reflections" ON reflections FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_reflections" ON reflections FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_reflections" ON reflections FOR DELETE
  TO authenticated USING (true);

CREATE TABLE skills (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category text NOT NULL,
  name text NOT NULL,
  level text,
  description text,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_skills" ON skills FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_skills" ON skills FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_skills" ON skills FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_skills" ON skills FOR DELETE
  TO authenticated USING (true);

CREATE TABLE footer_content (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_name text NOT NULL,
  quote_text text NOT NULL,
  quote_author text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE footer_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_footer_content" ON footer_content FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_footer_content" ON footer_content FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_footer_content" ON footer_content FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_footer_content" ON footer_content FOR DELETE
  TO authenticated USING (true);
