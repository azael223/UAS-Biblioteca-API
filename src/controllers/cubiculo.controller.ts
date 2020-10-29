import { CubiculoModel } from '../models/cubiculo.model'
import { Request, Response } from 'express'
import { Controller } from '../lib/Controller'

export class CubiculoController extends Controller{
    Model = CubiculoModel
}