class UserRepository {
    constructor(pool) {
        this.pool = pool;
    }

async createUser ({ name, email, password }) {
    try {
        const result = await this.pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        console.log("result: " result);
        return { id: result.id, name, email };
    } catch (error) {
        throw new Error("Error while creating new user : " + error.message);
    }
}

}

export default UserRepository