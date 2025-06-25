import { Router } from 'express';
import * as VisitorController from './visitors.controller';

const router = Router();

router.get('/', VisitorController.getAllVisitors);
router.get('/:id', VisitorController.getVisitor);
router.post('/', VisitorController.createVisitor);
router.put('/:id', VisitorController.updateVisitor);
router.delete('/:id', VisitorController.deleteVisitor);
router.get('/:id/visited-planets', VisitorController.getVisitedPlanets);
router.get('/:id/star', VisitorController.getVisitorsHomeStar);

export default router;