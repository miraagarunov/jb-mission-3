import Joi from "joi";

export const addMeetingValidator = Joi.object({
  groupId: Joi.string().uuid().required(),
  startDatetime: Joi.date().required(),
  endDatetime: Joi.date().greater(Joi.ref("startDatetime")).required(),
  meetingDescription: Joi.string().allow(""),
  meetingRoom: Joi.string().max(255).required(),
});

export const getMeetingByGroupValidator = Joi.object({
  id: Joi.string().uuid().required(),
});

export const deleteMeetingValidator = Joi.object({
  id: Joi.string().uuid().required(),
});
