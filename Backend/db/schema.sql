DROP DATABASE IF EXISTS communityRecipes_database;
CREATE DATABASE communityRecipes_database;
\c communityRecipes_database

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS tags CASCADE;

CREATE TABLE users
(
  id VARCHAR UNIQUE,
  full_name VARCHAR,
  email VARCHAR UNIQUE,
  username VARCHAR UNIQUE,
  profile_pic VARCHAR
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
  picture VARCHAR,
  content VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES Posts(id) ON DELETE CASCADE,
    poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

 CREATE TABLE likes
  (
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR REFERENCES Users(id) ON DELETE CASCADE,
    post_id INT REFERENCES Posts(id) ON DELETE CASCADE,
    CONSTRAINT UC_like UNIQUE (liker_id, post_id)
  );

 INSERT INTO users
    (id, full_name, email, username, profile_pic)
  VALUES
    (1, 'Sihame Bazi', 'sihamebazi@gmail.com', 'bsihame', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'),
    (2, 'Pamela Benis', 'pam@gmail.com', 'crazy', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'),
    (3, 'David Kimble', 'kimbel@yahoo.com', 'gravity', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png');

  INSERT INTO posts
    (poster_id, content, picture, created_at)
  VALUES
    (2, 'Hi', 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'May 29, 2020 2:39:58 AM'),
    (1, 'Thank you 4 sharing your  experiance', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE7D0W-VZtz5s-z_kpunYe8Z7iARwaqgLwJQ&usqp=CAU', 'Dec 2, 2020 2:39:58 AM');

  INSERT INTO comments
    (post_id, poster_id, content, created_at)
  VALUES
    (1, 2, 'Nice', 'May 29, 2020 2:39:58 AM' ),
    (2, 1, 'Beautifull', 'Dec 2, 2020 2:39:58 AM' );

  INSERT INTO likes
    (liker_id, post_id)
  VALUES
    (1, 1),
    (1, 2),
    (2, 2);