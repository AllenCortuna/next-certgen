CREATE TABLE bonds (
    id VARCHAR(255) PRIMARY KEY,
    num INT,
    contractor_name VARCHAR(255),
    project_no VARCHAR(255),
    project_name VARCHAR(255),
    amount FLOAT,
    date_validated INT,
    effectivity_date INT,
    expiration_date INT,
    validity VARCHAR(255),
    bond_no VARCHAR(255),
    insurance_company VARCHAR(255),
    bond_type VARCHAR(255)
);
