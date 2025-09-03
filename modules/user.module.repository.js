class UserRepository {
    constructor(db) {
        this.db = db;
    }

    async createUser({ name, email, password }) {
        try {
            // INSERT et récupération de l'id généré
            const result = await this.db.run(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, password]
            );

            console.log("Inserted row id:", result.lastID);

            return { id: result.lastID, name, email };
        } catch (error) {
            throw new Error("Error while creating new user: " + error.message);
        }
    }
}

export default UserRepository;
