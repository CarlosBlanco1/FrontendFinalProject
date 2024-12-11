CREATE TABLE Owner (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    address VARCHAR(255)
);

CREATE TABLE Adopter (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15)
);

CREATE TABLE Pet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    ownerId INT NOT NULL,
    animal VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    age INT,
    pictureUrl VARCHAR(255),
    description TEXT,
    FOREIGN KEY (ownerId) REFERENCES Owner(id) ON DELETE CASCADE
);

CREATE TABLE AdoptionApplication (
    applicationId SERIAL PRIMARY KEY,
    petId INT NOT NULL,
    adopterId INT NOT NULL,
    ownerId INT NOT NULL,
    message TEXT,
    status VARCHAR(10) CHECK (status IN ('pending', 'approved', 'rejected')),
    submittedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (petId) REFERENCES Pet(id) ON DELETE CASCADE,
    FOREIGN KEY (adopterId) REFERENCES Adopter(id) ON DELETE CASCADE,
    FOREIGN KEY (ownerId) REFERENCES Owner(id) ON DELETE CASCADE
);

INSERT INTO Owner (firstName, lastName, email, phone, address)
VALUES
('Alice', 'Johnson', 'alice@example.com', '123-456-7890', '123 Elm St, Springfield'),
('Bob', 'Smith', 'bob@example.com', '987-654-3210', '456 Oak St, Metropolis');

INSERT INTO Adopter (firstName, lastName, email, phone)
VALUES
('Charlie', 'Brown', 'charlie@example.com', '111-222-3333'),
('Dana', 'White', 'dana@example.com', '444-555-6666');

INSERT INTO Pet (ownerId, animal, name, breed, age, pictureUrl, description)
VALUES
(1, 'dog', 'Princess', 'Labrador', 3, 'https://cdn.britannica.com/82/232782-050-8062ACFA/Black-labrador-retriever-dog.jpg', 'Friendly and loves people'),
(1, 'cat', 'Tao', 'Siamese', 2, 'https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/the-siamese-cat-min.webp', 'Curious and playful'),
(2, 'rabbit', 'Bugs', 'Dutch', 1, 'https://cdn.shopify.com/s/files/1/0779/5136/9553/files/D188EFAF-137B-48AD-8E73-097BB23EC40D-1024x778-1.jpg?v=1714913448', 'Small, calm, and great for kids');

INSERT INTO AdoptionApplication (petId, adopterId, ownerId, message, status, submittedAt)
VALUES
(1, 1, 1, 'I would love to adopt this Labrador!', 'pending', '2024-11-01 12:00:00'),
(2, 2, 1, 'Very interested in adopting Tao, he looks very cute', 'pending', '2024-11-02 15:30:00');
