import { Request, Response } from 'express';
import * as SystemService from './systems.service';

export const getAllSystems = async (req: Request, res: Response) => {
  try {
    const systems = await SystemService.getAllSystems();
    res.json(systems);
  } catch (error) {
    console.error('Error getting systems:', error);
    res.status(500).json({ error: 'Failed to fetch systems' });
  }
};

export const getSystem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const system = await SystemService.getSystem(id);
    res.json(system);
  } catch (error) {
    console.error('Error getting system:', error);
    res.status(500).json({ error: 'Failed to fetch system' });
  }
};

export const createSystem = async (req: Request, res: Response) => {
  try {
    const system = await SystemService.createSystem(req.body);
    res.status(201).json(system);
  } catch (error) {
    console.error('Error creating system:', error);
    res.status(400).json({ error: 'Failed to create system' });
  }
};

export const updateSystem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedSystem = await SystemService.updateSystem(id, req.body);
    if (!updatedSystem) {
      res.status(404).json({ error: 'System not found' });
    }
    res.json(updatedSystem);
  } catch (error) {
    console.error('Error updating system:', error);
    res.status(400).json({ error: 'Failed to update system' });
  }
};

export const deleteSystem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedSystem = await SystemService.deleteSystem(id);
    if (!deletedSystem) {
      res.status(404).json({ error: 'System not found' });
    }
    res.json({ message: 'System deleted successfully' });
  } catch (error) {
    console.error('Error deleting system:', error);
    res.status(400).json({ error: 'Failed to delete system' });
  }
};

//question c
export const getVisitorsInSystem = async (req: Request, res: Response) => {
  try {
    const systemId = req.params.id;
    const visitors = await SystemService.findVisitorsInSystem(systemId);
    res.json(visitors);
  } catch (error) {
    console.error('Error fetching visitors for system:', error);
    res.status(500).json({ error: 'Failed to get visitors in system' });
  }
};