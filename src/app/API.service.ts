/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHSKLevel: OnCreateHSKLevelSubscription;
  onUpdateHSKLevel: OnUpdateHSKLevelSubscription;
  onDeleteHSKLevel: OnDeleteHSKLevelSubscription;
  onCreateChineseWord: OnCreateChineseWordSubscription;
  onUpdateChineseWord: OnUpdateChineseWordSubscription;
  onDeleteChineseWord: OnDeleteChineseWordSubscription;
};

export type CreateHSKLevelInput = {
  id?: string | null;
  level?: string | null;
  _version?: number | null;
};

export type ModelHSKLevelConditionInput = {
  level?: ModelStringInput | null;
  and?: Array<ModelHSKLevelConditionInput | null> | null;
  or?: Array<ModelHSKLevelConditionInput | null> | null;
  not?: ModelHSKLevelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type HSKLevel = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateHSKLevelInput = {
  id: string;
  level?: string | null;
  _version?: number | null;
};

export type DeleteHSKLevelInput = {
  id: string;
  _version?: number | null;
};

export type CreateChineseWordInput = {
  id?: string | null;
  character: string;
  pinyin: string;
  sound: string;
  _version?: number | null;
  chineseWordHSKLevelId?: string | null;
};

export type ModelChineseWordConditionInput = {
  character?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  sound?: ModelStringInput | null;
  and?: Array<ModelChineseWordConditionInput | null> | null;
  or?: Array<ModelChineseWordConditionInput | null> | null;
  not?: ModelChineseWordConditionInput | null;
  chineseWordHSKLevelId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ChineseWord = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: HSKLevel | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type UpdateChineseWordInput = {
  id: string;
  character?: string | null;
  pinyin?: string | null;
  sound?: string | null;
  _version?: number | null;
  chineseWordHSKLevelId?: string | null;
};

export type DeleteChineseWordInput = {
  id: string;
  _version?: number | null;
};

export type ModelHSKLevelFilterInput = {
  id?: ModelIDInput | null;
  level?: ModelStringInput | null;
  and?: Array<ModelHSKLevelFilterInput | null> | null;
  or?: Array<ModelHSKLevelFilterInput | null> | null;
  not?: ModelHSKLevelFilterInput | null;
};

export type ModelHSKLevelConnection = {
  __typename: "ModelHSKLevelConnection";
  items: Array<HSKLevel | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelChineseWordFilterInput = {
  id?: ModelIDInput | null;
  character?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  sound?: ModelStringInput | null;
  and?: Array<ModelChineseWordFilterInput | null> | null;
  or?: Array<ModelChineseWordFilterInput | null> | null;
  not?: ModelChineseWordFilterInput | null;
  chineseWordHSKLevelId?: ModelIDInput | null;
};

export type ModelChineseWordConnection = {
  __typename: "ModelChineseWordConnection";
  items: Array<ChineseWord | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionHSKLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  level?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHSKLevelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHSKLevelFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionChineseWordFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  character?: ModelSubscriptionStringInput | null;
  pinyin?: ModelSubscriptionStringInput | null;
  sound?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChineseWordFilterInput | null> | null;
  or?: Array<ModelSubscriptionChineseWordFilterInput | null> | null;
};

export type CreateHSKLevelMutation = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateHSKLevelMutation = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteHSKLevelMutation = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateChineseWordMutation = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type UpdateChineseWordMutation = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type DeleteChineseWordMutation = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type GetHSKLevelQuery = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListHSKLevelsQuery = {
  __typename: "ModelHSKLevelConnection";
  items: Array<{
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncHSKLevelsQuery = {
  __typename: "ModelHSKLevelConnection";
  items: Array<{
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetChineseWordQuery = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type ListChineseWordsQuery = {
  __typename: "ModelChineseWordConnection";
  items: Array<{
    __typename: "ChineseWord";
    id: string;
    character: string;
    pinyin: string;
    sound: string;
    HSKLevel?: {
      __typename: "HSKLevel";
      id: string;
      level?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chineseWordHSKLevelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncChineseWordsQuery = {
  __typename: "ModelChineseWordConnection";
  items: Array<{
    __typename: "ChineseWord";
    id: string;
    character: string;
    pinyin: string;
    sound: string;
    HSKLevel?: {
      __typename: "HSKLevel";
      id: string;
      level?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    chineseWordHSKLevelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateHSKLevelSubscription = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateHSKLevelSubscription = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteHSKLevelSubscription = {
  __typename: "HSKLevel";
  id: string;
  level?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateChineseWordSubscription = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type OnUpdateChineseWordSubscription = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

export type OnDeleteChineseWordSubscription = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  HSKLevel?: {
    __typename: "HSKLevel";
    id: string;
    level?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  chineseWordHSKLevelId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHSKLevel(
    input: CreateHSKLevelInput,
    condition?: ModelHSKLevelConditionInput
  ): Promise<CreateHSKLevelMutation> {
    const statement = `mutation CreateHSKLevel($input: CreateHSKLevelInput!, $condition: ModelHSKLevelConditionInput) {
        createHSKLevel(input: $input, condition: $condition) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHSKLevelMutation>response.data.createHSKLevel;
  }
  async UpdateHSKLevel(
    input: UpdateHSKLevelInput,
    condition?: ModelHSKLevelConditionInput
  ): Promise<UpdateHSKLevelMutation> {
    const statement = `mutation UpdateHSKLevel($input: UpdateHSKLevelInput!, $condition: ModelHSKLevelConditionInput) {
        updateHSKLevel(input: $input, condition: $condition) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHSKLevelMutation>response.data.updateHSKLevel;
  }
  async DeleteHSKLevel(
    input: DeleteHSKLevelInput,
    condition?: ModelHSKLevelConditionInput
  ): Promise<DeleteHSKLevelMutation> {
    const statement = `mutation DeleteHSKLevel($input: DeleteHSKLevelInput!, $condition: ModelHSKLevelConditionInput) {
        deleteHSKLevel(input: $input, condition: $condition) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHSKLevelMutation>response.data.deleteHSKLevel;
  }
  async CreateChineseWord(
    input: CreateChineseWordInput,
    condition?: ModelChineseWordConditionInput
  ): Promise<CreateChineseWordMutation> {
    const statement = `mutation CreateChineseWord($input: CreateChineseWordInput!, $condition: ModelChineseWordConditionInput) {
        createChineseWord(input: $input, condition: $condition) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChineseWordMutation>response.data.createChineseWord;
  }
  async UpdateChineseWord(
    input: UpdateChineseWordInput,
    condition?: ModelChineseWordConditionInput
  ): Promise<UpdateChineseWordMutation> {
    const statement = `mutation UpdateChineseWord($input: UpdateChineseWordInput!, $condition: ModelChineseWordConditionInput) {
        updateChineseWord(input: $input, condition: $condition) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChineseWordMutation>response.data.updateChineseWord;
  }
  async DeleteChineseWord(
    input: DeleteChineseWordInput,
    condition?: ModelChineseWordConditionInput
  ): Promise<DeleteChineseWordMutation> {
    const statement = `mutation DeleteChineseWord($input: DeleteChineseWordInput!, $condition: ModelChineseWordConditionInput) {
        deleteChineseWord(input: $input, condition: $condition) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChineseWordMutation>response.data.deleteChineseWord;
  }
  async GetHSKLevel(id: string): Promise<GetHSKLevelQuery> {
    const statement = `query GetHSKLevel($id: ID!) {
        getHSKLevel(id: $id) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHSKLevelQuery>response.data.getHSKLevel;
  }
  async ListHSKLevels(
    filter?: ModelHSKLevelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHSKLevelsQuery> {
    const statement = `query ListHSKLevels($filter: ModelHSKLevelFilterInput, $limit: Int, $nextToken: String) {
        listHSKLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHSKLevelsQuery>response.data.listHSKLevels;
  }
  async SyncHSKLevels(
    filter?: ModelHSKLevelFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncHSKLevelsQuery> {
    const statement = `query SyncHSKLevels($filter: ModelHSKLevelFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncHSKLevels(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncHSKLevelsQuery>response.data.syncHSKLevels;
  }
  async GetChineseWord(id: string): Promise<GetChineseWordQuery> {
    const statement = `query GetChineseWord($id: ID!) {
        getChineseWord(id: $id) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChineseWordQuery>response.data.getChineseWord;
  }
  async ListChineseWords(
    filter?: ModelChineseWordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChineseWordsQuery> {
    const statement = `query ListChineseWords($filter: ModelChineseWordFilterInput, $limit: Int, $nextToken: String) {
        listChineseWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            character
            pinyin
            sound
            HSKLevel {
              __typename
              id
              level
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chineseWordHSKLevelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChineseWordsQuery>response.data.listChineseWords;
  }
  async SyncChineseWords(
    filter?: ModelChineseWordFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncChineseWordsQuery> {
    const statement = `query SyncChineseWords($filter: ModelChineseWordFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncChineseWords(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            character
            pinyin
            sound
            HSKLevel {
              __typename
              id
              level
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chineseWordHSKLevelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncChineseWordsQuery>response.data.syncChineseWords;
  }
  OnCreateHSKLevelListener(
    filter?: ModelSubscriptionHSKLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHSKLevel">>
  > {
    const statement = `subscription OnCreateHSKLevel($filter: ModelSubscriptionHSKLevelFilterInput) {
        onCreateHSKLevel(filter: $filter) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHSKLevel">>
    >;
  }

  OnUpdateHSKLevelListener(
    filter?: ModelSubscriptionHSKLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHSKLevel">>
  > {
    const statement = `subscription OnUpdateHSKLevel($filter: ModelSubscriptionHSKLevelFilterInput) {
        onUpdateHSKLevel(filter: $filter) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHSKLevel">>
    >;
  }

  OnDeleteHSKLevelListener(
    filter?: ModelSubscriptionHSKLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHSKLevel">>
  > {
    const statement = `subscription OnDeleteHSKLevel($filter: ModelSubscriptionHSKLevelFilterInput) {
        onDeleteHSKLevel(filter: $filter) {
          __typename
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHSKLevel">>
    >;
  }

  OnCreateChineseWordListener(
    filter?: ModelSubscriptionChineseWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChineseWord">>
  > {
    const statement = `subscription OnCreateChineseWord($filter: ModelSubscriptionChineseWordFilterInput) {
        onCreateChineseWord(filter: $filter) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChineseWord">>
    >;
  }

  OnUpdateChineseWordListener(
    filter?: ModelSubscriptionChineseWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChineseWord">>
  > {
    const statement = `subscription OnUpdateChineseWord($filter: ModelSubscriptionChineseWordFilterInput) {
        onUpdateChineseWord(filter: $filter) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChineseWord">>
    >;
  }

  OnDeleteChineseWordListener(
    filter?: ModelSubscriptionChineseWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChineseWord">>
  > {
    const statement = `subscription OnDeleteChineseWord($filter: ModelSubscriptionChineseWordFilterInput) {
        onDeleteChineseWord(filter: $filter) {
          __typename
          id
          character
          pinyin
          sound
          HSKLevel {
            __typename
            id
            level
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chineseWordHSKLevelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChineseWord">>
    >;
  }
}
