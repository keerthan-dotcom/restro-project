/*
  # Create Reservations Table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key) - Unique identifier for each reservation
      - `name` (text) - Guest name
      - `email` (text) - Guest email address
      - `phone` (text) - Contact phone number
      - `date` (date) - Reservation date
      - `time` (text) - Reservation time
      - `guests` (integer) - Number of guests
      - `status` (text) - Reservation status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - Timestamp of reservation creation

  2. Security
    - Enable RLS on `reservations` table
    - Add policy for public to insert reservations (form submissions)
    - Add policy for authenticated admins to view all reservations

  3. Important Notes
    - Public can create reservations but cannot view them
    - Only authenticated staff can view and manage reservations
    - Default status is 'pending' for all new reservations
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS reservations_date_idx ON reservations(date);
CREATE INDEX IF NOT EXISTS reservations_created_at_idx ON reservations(created_at DESC);
