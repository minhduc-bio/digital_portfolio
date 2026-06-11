CREATE TABLE user_profile (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name text NOT NULL,
  course_code text,
  class_name text,
  portrait_path text,
  tagline text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_user_profile" ON user_profile FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_user_profile" ON user_profile FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_user_profile" ON user_profile FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_user_profile" ON user_profile FOR DELETE
  TO authenticated USING (true);
