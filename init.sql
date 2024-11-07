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

INSERT INTO Pet (ownerId, animal, breed, age, pictureUrl, description)
VALUES
(1, 'dog', 'Labrador', 3, 'https://example.com/dog.jpg', 'Friendly and loves people'),
(1, 'cat', 'Siamese', 2, 'https://example.com/cat.jpg', 'Curious and playful'),
(2, 'rabbit', 'Dutch', 1, 'https://example.com/rabbit.jpg', 'Small, calm, and great for kids');

INSERT INTO AdoptionApplication (petId, adopterId, ownerId, message, status, submittedAt)
VALUES
(1, 1, 1, 'I would love to adopt this Labrador!', 'pending', '2024-11-01 12:00:00'),
(2, 2, 1, 'Very interested in adopting this Siamese cat.', 'pending', '2024-11-02 15:30:00');
