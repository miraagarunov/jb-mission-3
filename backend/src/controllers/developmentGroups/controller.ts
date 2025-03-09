import { NextFunction, Request, Response } from "express";
import DevelopmentGroups from "../../models/developmentGroups";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const DevelopmentGroup = await DevelopmentGroups.findAll()
        res.json(DevelopmentGroup)
    } catch (e) {
        next(e)
    }
}

