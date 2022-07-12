import { Song } from '@prisma/client';
import Joi, { ObjectSchema } from 'joi';

export interface SongDataSchema extends Omit<Song, 'id' | 'viewsCount' | 'createdAt' | 'cover'> {
  lrcLyric: string;
}

const youtubeLinkRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

const songSchema: ObjectSchema<SongDataSchema> = Joi.object({
  name: Joi.string().required(),
  youtubeLink: Joi.string().pattern(youtubeLinkRegex).required(),
  artistId: Joi.number().positive().integer().required(),
  lrcLyric: Joi.string().required(),
});

export default songSchema;
