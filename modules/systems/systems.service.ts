import System from './systems.model';
import Planet from '../planets/planets.model';
import Visitor from '../visitors/visitors.model';

export const getAllSystems = async () => {
  return System.find().populate('planets');
};

export const getSystem = async (id: string) => {
  return System.findById(id).populate('planets');
};

export const createSystem = async (systemData: any) => {
  const system = new System(systemData);
  return system.save();
};

export const updateSystem = async (id: string, updateData: any) => {
  return System.findByIdAndUpdate(id, updateData, { new: true }).populate('planets');
};

export const deleteSystem = async (id: string) => {
  return System.findByIdAndDelete(id);
};

export const findVisitorsInSystem = async (systemId: string) => {
  const planets = await Planet.find({ system: systemId });
  const planetIds = planets.map(planet => planet._id);
  const visitors = await Visitor.find({
    visitedPlanets: { $in: planetIds }
  }).populate('visitedPlanets').populate('homePlanet');
  return visitors;
};