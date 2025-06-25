import {Schema, model } from 'mongoose';

var systemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: { type: String, required: true },
 });

 export default model('System', systemSchema, 'systems');