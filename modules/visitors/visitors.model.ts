import {Schema, model } from 'mongoose';

var visitorSchema = new Schema({
    name:  { type: String, required: true },
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
 });

 export default model('Visitor', visitorSchema, 'visitors');