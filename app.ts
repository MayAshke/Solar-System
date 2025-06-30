import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db';
import planetRoutes from './modules/planets/planets.routes';
import systemRoutes from './modules/systems/systems.routes';
import visitorRoutes from './modules/visitors/visitors.routes';
import { console } from 'node:inspector/promises';

const app = express();
app.use(express.json());
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

connectDB();

app.use('/api/planets', planetRoutes);
app.use('/api/systems', systemRoutes);
app.use('/api/visitors', visitorRoutes);

export default app;