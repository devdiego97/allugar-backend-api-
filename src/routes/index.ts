import { Router } from "express";
import { UserController } from "../controllers/users.controller";
import { PropertyController } from "../controllers/propertys.controller";
import { upload } from "../middlewares";
import { uploadGallery } from "../middlewares/gallery.upload";
import { InterestsController } from "../controllers/interests.controller";

const routes=Router()

routes.get("/users",UserController.getAllUsers)
routes.get("/users/:id",UserController.getUserId)
routes.post("/auth/sigin",UserController.sigIn)
routes.post("/auth/register",UserController.registerUser)
routes.put("/users/:id",upload.single('photo'),UserController.updateUserId)
routes.delete("/users/:id",UserController.deleteUserId)


routes.get("/propertys",PropertyController.getAllPropertys)
routes.get("/propertys/:id",PropertyController.getPropertyId)
routes.post("/propertys",uploadGallery.array('gallery',5),PropertyController.postProperty)
routes.put("/propertys/:id",uploadGallery.array('gallery',5),PropertyController.updatePropertyId)
routes.delete("/propertys/:id",PropertyController.deletePropertyId)

routes.get('/interests',InterestsController.getAllInterests)
routes.get('/interests/:id',InterestsController.getInterestId)
routes.post('/interests',InterestsController.postInterest)
routes.delete('/interests/:id',InterestsController.deleteInterest)
export default routes