import { Request, Response } from 'express'
import { Controller } from '../lib/Controller'
import { CarreraModel } from '../models/carrera.model'

export class CarreraController extends Controller{
    Model = CarreraModel
}