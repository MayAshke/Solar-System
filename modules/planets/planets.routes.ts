import { Router } from 'express';
import * as PlanetController from './planets.controller';

const router = Router();

router.get('/', PlanetController.getAllPlanets);
router.get('/:id', PlanetController.getPlanet);
router.post('/', PlanetController.createPlanet);
router.put('/:id', PlanetController.updatePlanet); 
router.delete('/:id', PlanetController.deletePlanet);
router.get('/:id/visitors', PlanetController.getVisitorsOnPlanet);
router.get('/:id/details', PlanetController.getPlanetDetails);

export default router;