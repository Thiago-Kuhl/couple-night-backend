import {Router} from 'express';
import UsersController from './controllers/usersController'; 

const routes = Router();

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);

export default routes ;