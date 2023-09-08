-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- CREATE TABLE users (
--     user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
-- 	email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     first_name VARCHAR(255),
--     last_name VARCHAR(255),
--     acc_type SMALLINT  CHECK (acc_type IN (0, 1)),
--     profile_photo VARCHAR(255),
-- 	created_at TIMESTAMP DEFAULT now()
-- );

-- CREATE TABLE posts (
--     post_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     type VARCHAR(255) CHECK (type IN ('text', 'image', 'video')) NOT NULL,
--     user_id UUID REFERENCES users(user_id) NOT NULL,
--     title VARCHAR NOT NULL,
--     body TEXT,
--     like_count INT DEFAULT 0,
--     share_count INT DEFAULT 0,
--     created_at TIMESTAMP DEFAULT now()
-- );


-- CREATE TABLE comments (
--     Comment_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
-- 	post_id UUID REFERENCES posts(post_id),
--     user_id UUID REFERENCES users(user_id) NOT NULL,
--     content VARCHAR NOT NULL,
--     like_count INT DEFAULT 0,
--     created_at TIMESTAMP DEFAULT now()
-- );

-- CREATE TABLE likes (
--     like_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     post_id UUID REFERENCES posts(post_id),
--     comment_id UUID REFERENCES comments(comment_id),
--     user_id UUID REFERENCES users(user_id),
--     created_at TIMESTAMP DEFAULT now(),
-- 	CHECK (post_id IS NOT NULL OR comment_id IS NOT NULL)
-- );

-- CREATE TABLE UserRelations
-- (
--     Relationship_ID  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     SenderUser_ID  uuid NOT NULL,
--     ReceiverUser_ID  uuid NOT NULL,
--     Relationship_Type  character varying(20) NOT NULL,
--     created_at TIMESTAMP DEFAULT now(),
--     Status  boolean NOT NULL,
--     FOREIGN KEY (SenderUser_ID) REFERENCES users (user_id),
--     FOREIGN KEY (ReceiverUser_ID) REFERENCES users (user_id)
-- );

-- CREATE TABLE Conversations (
--     Conversation_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     User1ID uuid NOT NULL,
--     User2ID uuid NOT NULL,
--    	created_at TIMESTAMP DEFAULT now(),
--     UNIQUE (User1ID, User2ID),
--     FOREIGN KEY (User1ID) REFERENCES users (User_id),
--     FOREIGN KEY (User2ID) REFERENCES users (User_id)
-- );

-- CREATE TABLE Messages (
--     Message_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     Conversation_ID uuid NOT NULL,
--     SenderUser_ID uuid NOT NULL,
--     ReceiverUser_ID uuid NOT NULL,
--     Content TEXT,
--     CreatedAt DATE,
--     FOREIGN KEY (Conversation_ID) REFERENCES Conversations (Conversation_ID),
--     FOREIGN KEY (SenderUser_ID) REFERENCES users (User_id),
--     FOREIGN KEY (ReceiverUser_ID) REFERENCES users (User_id)
-- );

-- CREATE TABLE files (
--     file_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     post_id UUID,
--     user_id UUID,
--     size INTEGER NOT NULL,
--     extension VARCHAR(50) NOT NULL,
--     type VARCHAR(50) NOT NULL,
--     created_at TIMESTAMP DEFAULT now() NOT NULL,
--     FOREIGN KEY (post_id) REFERENCES posts (post_id),
--     FOREIGN KEY (user_id) REFERENCES users (user_id),
--     CHECK (post_id IS NOT NULL OR user_id IS NOT NULL)
-- );

-- UPDATE users SET acc_type = 1;



select * from users;
select * from posts;
select * from userrelations;
select * from messages;
select * from likes;
select * from conversations;
select * from comments;
select * from files;

