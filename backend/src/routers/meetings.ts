import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";
import { 
    getMeetingByDevelopmentGroups, 
    add, 
    remove 
} from "../controllers/meetings/controller"
import { addMeetingValidator, deleteMeetingValidator } from "../controllers/meetings/validator";

const meetingsRouter = Router();

meetingsRouter.get('/:id', paramsValidation(deleteMeetingValidator), getMeetingByDevelopmentGroups);
meetingsRouter.post('/', validation(addMeetingValidator), add);
meetingsRouter.delete('/:id', paramsValidation(deleteMeetingValidator), remove);

export default meetingsRouter;
