import Visitor from './visitors.model';
import Planet from '../planets/planets.model';

export const getAllVisitors = async () => {
  return Visitor.find().populate('homePlanet visitedPlanets');
};

export const getVisitor = async (id: string) => {
  return Visitor.findById(id).populate('homePlanet visitedPlanets');
};

export const createVisitor = async (visitorData: any) => {
  const visitor = new Visitor(visitorData);
  return visitor.save();
};

export const updateVisitor = async (id: string, updateData: any) => {
  return Visitor.findByIdAndUpdate(id, updateData, { new: true }).populate('homePlanet visitedPlanets');
};

export const deleteVisitor = async (id: string) => {
  return Visitor.findByIdAndDelete(id);
};

export const getVisitedPlanets = async (visitorId: string) => {
  return await Visitor.findById(visitorId).populate('visitedPlanets');
};

export const getVisitorsHomeStar = async (visitorId: string) => {
  const visitor = await Visitor.findById(visitorId).populate('homePlanet');

  if (!visitor || !visitor.homePlanet) {
    throw new Error('Visitor or home planet not found');
  }

  const homePlanet = visitor.homePlanet as any;
  const homePlanetSystem = await Planet.findById(homePlanet._id).populate('system');

  if (!homePlanetSystem?.system) {
    throw new Error('System not found for home planet');
  }

  const system = homePlanetSystem.system as any;
  return system.starName;
};