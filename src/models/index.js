// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, ChineseWord } = initSchema(schema);

export {
  Tags,
  ChineseWord
};