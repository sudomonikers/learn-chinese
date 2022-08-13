import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HSKLevelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChineseWordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HSKLevel {
  readonly id: string;
  readonly level?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<HSKLevel, HSKLevelMetaData>);
  static copyOf(source: HSKLevel, mutator: (draft: MutableModel<HSKLevel, HSKLevelMetaData>) => MutableModel<HSKLevel, HSKLevelMetaData> | void): HSKLevel;
}

export declare class ChineseWord {
  readonly id: string;
  readonly character: string;
  readonly pinyin: string;
  readonly sound: string;
  readonly HSKLevel?: HSKLevel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chineseWordHskLevelId?: string | null;
  constructor(init: ModelInit<ChineseWord, ChineseWordMetaData>);
  static copyOf(source: ChineseWord, mutator: (draft: MutableModel<ChineseWord, ChineseWordMetaData>) => MutableModel<ChineseWord, ChineseWordMetaData> | void): ChineseWord;
}