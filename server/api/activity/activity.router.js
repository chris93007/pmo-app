import express from 'express';
import controller from './activity.controller';

let router = express.Router();

router.get('/', controller.getActivity);
router.get('/:id', controller.getActivityById);
router.post('/', controller.addActivity);
//TODO: Update and delete endpoints
// router.put('/:id', controller.updateActivity);
// router.delete('/:id', controller.deleteActivity);

export default router;