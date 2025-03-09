import { NextFunction, Request, Response } from "express";
import DevelopmentGroups from "../../models/developmentGroups";
import Meetings from "../../models/meetings";

export async function getMeetingByDevelopmentGroups(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const groupId = req.params.id;
    const meeting = await Meetings.findAll({
      where: { groupId },
      include: [DevelopmentGroups],
    });
    res.json(meeting);
  } catch (e) {
    next(e);
  }
}

export async function add(req: Request<{}, {}, {
  groupId: string,
  startDatetime: Date,
  endDatetime: Date,
  meetingDescription: string,
  meetingRoom: string
}>, res: Response, next: NextFunction) {
    try {
        const newMeeting = await Meetings.create(req.body)
        await newMeeting.reload({ include: [DevelopmentGroups] })
        res.json(newMeeting)
    } catch (e) {
        next(e)
    }
}

export async function remove(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Meetings.destroy({where: {id}})
        res.json({success: true})
    } catch (e) {
        next(e)
    }
}