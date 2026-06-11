CREATE TABLE projects (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  icon_name text NOT NULL,
  title text NOT NULL,
  category text NOT NULL,
  subtitle text,
  summary text NOT NULL,
  extended_summary text,
  tags text[] DEFAULT '{}',
  goal text,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_projects" ON projects FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_projects" ON projects FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_projects" ON projects FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_projects" ON projects FOR DELETE
  TO authenticated USING (true);

CREATE TABLE project_details (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  project_id bigint NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  detail_type text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_details ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_project_details" ON project_details FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_project_details" ON project_details FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_project_details" ON project_details FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_project_details" ON project_details FOR DELETE
  TO authenticated USING (true);
