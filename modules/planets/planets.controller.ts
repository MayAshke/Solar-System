import { Request, Response } from 'express';
import * as PlanetService from './planets.service';

export const getAllPlanets = async (req: Request, res: Response) => {
  try {
    const planets = await PlanetService.getAllPlanets();
    res.json(planets);
  } catch (error) {
    console.error('Error getting planets:', error);
    res.status(500).json({ error: 'Failed to fetch planets' });
  }
};

export const getPlanet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const planet = await PlanetService.getPlanet(id);
    res.json(planet);
  } catch (error) {
    console.error('Error getting planet:', error);
    res.status(500).json({ error: 'Failed to fetch planet' });
  }
};

export const createPlanet = async (req: Request, res: Response) => {
  try {
    const planet = await PlanetService.createPlanet(req.body);
    res.status(201).json(planet);
  } catch (error) {
    console.error('Error create planet:', error);
    res.status(400).json({ error: 'Failed to create planet' });
  }
};

export const updatePlanet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedPlanet = await PlanetService.updatePlanet(id, req.body);
    if (!updatedPlanet) {
      res.status(404).json({ error: 'Planet not found' });
    }
    res.json(updatedPlanet);
  } catch (error) {
    console.error('Error update planet:', error);
    res.status(400).json({ error: 'Failed to update planet' });
  }
};

export const deletePlanet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedPlanet = await PlanetService.deletePlanet(id);
    if (!deletedPlanet) {
     res.status(404).json({ error: 'Planet not found' });
    }
    res.json({ message: 'Planet deleted successfully' });
  } catch (error) {
    console.error('Error delete planet:', error);
    res.status(400).json({ error: 'Failed to delete planet' });
  }
};

//question b
export const getVisitorsOnPlanet = async (req: Request, res: Response) => {
  try {
    const planet = await PlanetService.getVisitorsOnPlanet(req.params.id);
    if (!planet) {
      res.status(404).json({ error: 'Planet not found' });
    }
    res.json(planet!.visitors);
  } catch (error) {
    console.error('Error fetching visitors:', error);
    res.status(500).json({ error: 'Failed to get visitors on planet' });
  }
};

//question e
export const getPlanetDetails = async (req: Request, res: Response) => {
  try {
    const data = await PlanetService.getPlanetDetails(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get planet details' });
  }
};