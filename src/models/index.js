// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HSKLevel, ChineseWord } = initSchema(schema);

export {
  HSKLevel,
  ChineseWord
};