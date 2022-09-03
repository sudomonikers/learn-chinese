import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChineseWordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tags {
  readonly id: string;
  readonly tagName?: string | null;
  readonly tagDescription?: string | null;
  readonly chinesewordID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}

export declare class ChineseWord {
  readonly id: string;
  readonly character: string;
  readonly pinyin: string;
  readonly sound: string;
  readonly tags?: string | null;
  readonly Tags?: (Tags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChineseWord, ChineseWordMetaData>);
  static copyOf(source: ChineseWord, mutator: (draft: MutableModel<ChineseWord, ChineseWordMetaData>) => MutableModel<ChineseWord, ChineseWordMetaData> | void): ChineseWord;
}