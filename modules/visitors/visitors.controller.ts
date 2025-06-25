import { Request, Response } from 'express';
import * as VisitorService from './visitors.service';

export const getAllVisitors = async (req: Request, res: Response) => {
  try {
    const visitors = await VisitorService.getAllVisitors();
    res.json(visitors);
  } catch (error) {
    console.error('Error getting visitors:', error);
    res.status(500).json({ error: 'Failed to fetch visitors' });
  }
};

export const getVisitor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const visitor = await VisitorService.getVisitor(id);
    res.json(visitor);
  } catch (error) {
    console.error('Error getting visitor:', error);
    res.status(500).json({ error: 'Failed to fetch visitor' });
  }
};

export const createVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = await VisitorService.createVisitor(req.body);
    res.status(201).json(visitor);
  } catch (error) {
    console.error('Error creating visitor:', error);
    res.status(400).json({ error: 'Failed to create visitor' });
  }
};

export const updateVisitor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedVisitor = await VisitorService.updateVisitor(id, req.body);
    if (!updatedVisitor) {
      res.status(404).json({ error: 'Visitor not found' });
    }
    res.json(updatedVisitor);
  } catch (error) {
    console.error('Error updating visitor:', error);
    res.status(400).json({ error: 'Failed to update visitor' });
  }
};

export const deleteVisitor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedVisitor = await VisitorService.deleteVisitor(id);
    if (!deletedVisitor) {
      res.status(404).json({ error: 'Visitor not found' });
    }
    res.json({ message: 'Visitor deleted successfully' });
  } catch (error) {
    console.error('Error deleting visitor:', error);
    res.status(400).json({ error: 'Failed to delete visitor' });
  }
};

//question a
export const getVisitedPlanets = async (req: Request, res: Response) => {
  try {
    const visitor = await VisitorService.getVisitedPlanets(req.params.id);
    if (!visitor) {
      res.status(404).json({ error: 'Visitor not found' });
    }
    res.json(visitor!.visitedPlanets);
  } catch (error) {
    console.error('Error fetching visited planets:', error);
    res.status(500).json({ error: 'Failed to get visited planets' });
  }
};

//question d
export const getVisitorsHomeStar = async (req: Request, res: Response) => {
  try {
    const starName = await VisitorService.getVisitorsHomeStar(req.params.id);
    res.json({ starName });
  } catch (error) {
    res.status(500).json({ error: 'Failed to find star of visitor\'s home planet' });
  }
};