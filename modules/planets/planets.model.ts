import {Schema, model } from 'mongoose';

var planetSchema = new Schema({
    name: { type: String, required: true },
    system: { type: Schema.Types.ObjectId, ref: 'System' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
 });

 export default model('Planet', planetSchema, 'planets');