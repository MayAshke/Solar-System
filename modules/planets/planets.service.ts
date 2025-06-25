import Planet from './planets.model';

export const getAllPlanets = async () => {
  return Planet.find();
};

export const getPlanet = async (id: string) => {
    return Planet.find().findByIdAndUpdate(id);
};  

export const createPlanet = async (planetData: any) => {
  const planet = new Planet(planetData);
  return planet.save();
};

export const updatePlanet = async (id: string, updateData: any) => {
   return Planet.findByIdAndUpdate(id, updateData, { new: true });
};
  
export const deletePlanet = async (id: string) => {
    return Planet.findByIdAndDelete(id);
};

export const getVisitorsOnPlanet = async (planetId: string) => {
  return await Planet.findById(planetId).populate('visitors');
};

export const getPlanetDetails = async (planetId: string) => {
  const planet = await Planet.findById(planetId).populate('system').populate('visitors');

  if (!planet) {
    throw new Error('Planet not found');
  }

  const system = planet.system as any;
  const visitors = planet.visitors;

  return {
    planetName: planet.name,
    starName: system?.starName || null,
    visitors: visitors.map((v: any) => ({ id: v._id, name: v.name }))
  };
};