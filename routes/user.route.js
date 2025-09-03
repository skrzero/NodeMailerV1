import Router from "express";
export function userRoutes(userController) {
    const router = Router();

    router.post("/", (req, res) => userController.createUser(req, res));
    return router;
}