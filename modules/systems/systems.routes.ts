import { Router } from 'express';
import * as SystemController from './systems.controller';

const router = Router();

router.get('/', SystemController.getAllSystems);
router.get('/:id', SystemController.getSystem);
router.post('/', SystemController.createSystem);
router.put('/:id', SystemController.updateSystem);
router.delete('/:id', SystemController.deleteSystem);
router.get('/:id/visitors', SystemController.getVisitorsInSystem);

export default router;