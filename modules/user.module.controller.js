class UserController {
    constructor(userRepository) {
    console.log("controller instanced from User Repository");
    this.userRepository = userRepository;    
    }

    async createUser(req, res) {
        const { name, email, password } = req.body;
        try { 
            const newUser = await this.userRepository.createUser({
                name,
                email,
                password
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default UserController;