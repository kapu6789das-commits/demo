/*
  # Travel Website Schema

  1. New Tables
    - `destinations`
      - `id` (uuid, primary key)
      - `name` (text) - Destination name (e.g., "Bali, Indonesia")
      - `country` (text) - Country name
      - `image_url` (text) - Image URL
      - `price_from` (numeric) - Starting price
      - `created_at` (timestamptz)
    
    - `deals`
      - `id` (uuid, primary key)
      - `title` (text) - Deal title
      - `description` (text) - Deal description
      - `duration_days` (integer) - Number of days
      - `duration_nights` (integer) - Number of nights
      - `original_price` (numeric) - Original price
      - `discounted_price` (numeric) - Discounted price
      - `discount_percentage` (integer) - Discount percentage
      - `image_url` (text) - Image URL
      - `created_at` (timestamptz)
    
    - `news`
      - `id` (uuid, primary key)
      - `title` (text) - News title
      - `description` (text) - News description
      - `created_at` (timestamptz)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `author_name` (text) - Customer name
      - `author_role` (text) - Customer role/occupation
      - `content` (text) - Review content
      - `rating` (integer) - Rating out of 5
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (since this is a public website)
*/

CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  image_url text NOT NULL,
  price_from numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS deals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  duration_days integer NOT NULL,
  duration_nights integer NOT NULL,
  original_price numeric NOT NULL,
  discounted_price numeric NOT NULL,
  discount_percentage integer NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  author_role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view destinations"
  ON destinations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view deals"
  ON deals FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view news"
  ON news FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);