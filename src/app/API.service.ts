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
  onCreateTags: OnCreateTagsSubscription;
  onUpdateTags: OnUpdateTagsSubscription;
  onDeleteTags: OnDeleteTagsSubscription;
  onCreateChineseWord: OnCreateChineseWordSubscription;
  onUpdateChineseWord: OnUpdateChineseWordSubscription;
  onDeleteChineseWord: OnDeleteChineseWordSubscription;
};

export type CreateTagsInput = {
  id?: string | null;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  _version?: number | null;
};

export type ModelTagsConditionInput = {
  tagName?: ModelStringInput | null;
  tagDescription?: ModelStringInput | null;
  chinesewordID?: ModelIDInput | null;
  and?: Array<ModelTagsConditionInput | null> | null;
  or?: Array<ModelTagsConditionInput | null> | null;
  not?: ModelTagsConditionInput | null;
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

export type Tags = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTagsInput = {
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID?: string | null;
  _version?: number | null;
};

export type DeleteTagsInput = {
  id: string;
  _version?: number | null;
};

export type CreateChineseWordInput = {
  id?: string | null;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  _version?: number | null;
};

export type ModelChineseWordConditionInput = {
  character?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  sound?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelChineseWordConditionInput | null> | null;
  or?: Array<ModelChineseWordConditionInput | null> | null;
  not?: ModelChineseWordConditionInput | null;
};

export type ChineseWord = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  Tags?: ModelTagsConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelTagsConnection = {
  __typename: "ModelTagsConnection";
  items: Array<Tags | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateChineseWordInput = {
  id: string;
  character?: string | null;
  pinyin?: string | null;
  sound?: string | null;
  tags?: string | null;
  _version?: number | null;
};

export type DeleteChineseWordInput = {
  id: string;
  _version?: number | null;
};

export type ModelTagsFilterInput = {
  id?: ModelIDInput | null;
  tagName?: ModelStringInput | null;
  tagDescription?: ModelStringInput | null;
  chinesewordID?: ModelIDInput | null;
  and?: Array<ModelTagsFilterInput | null> | null;
  or?: Array<ModelTagsFilterInput | null> | null;
  not?: ModelTagsFilterInput | null;
};

export type ModelChineseWordFilterInput = {
  id?: ModelIDInput | null;
  character?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  sound?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelChineseWordFilterInput | null> | null;
  or?: Array<ModelChineseWordFilterInput | null> | null;
  not?: ModelChineseWordFilterInput | null;
};

export type ModelChineseWordConnection = {
  __typename: "ModelChineseWordConnection";
  items: Array<ChineseWord | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTagsMutation = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTagsMutation = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTagsMutation = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
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
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateChineseWordMutation = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteChineseWordMutation = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetTagsQuery = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTagsQuery = {
  __typename: "ModelTagsConnection";
  items: Array<{
    __typename: "Tags";
    id: string;
    tagName?: string | null;
    tagDescription?: string | null;
    chinesewordID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTagsQuery = {
  __typename: "ModelTagsConnection";
  items: Array<{
    __typename: "Tags";
    id: string;
    tagName?: string | null;
    tagDescription?: string | null;
    chinesewordID: string;
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
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListChineseWordsQuery = {
  __typename: "ModelChineseWordConnection";
  items: Array<{
    __typename: "ChineseWord";
    id: string;
    character: string;
    pinyin: string;
    sound: string;
    tags?: string | null;
    Tags?: {
      __typename: "ModelTagsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    tags?: string | null;
    Tags?: {
      __typename: "ModelTagsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateTagsSubscription = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTagsSubscription = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTagsSubscription = {
  __typename: "Tags";
  id: string;
  tagName?: string | null;
  tagDescription?: string | null;
  chinesewordID: string;
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
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateChineseWordSubscription = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteChineseWordSubscription = {
  __typename: "ChineseWord";
  id: string;
  character: string;
  pinyin: string;
  sound: string;
  tags?: string | null;
  Tags?: {
    __typename: "ModelTagsConnection";
    items: Array<{
      __typename: "Tags";
      id: string;
      tagName?: string | null;
      tagDescription?: string | null;
      chinesewordID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTags(
    input: CreateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<CreateTagsMutation> {
    const statement = `mutation CreateTags($input: CreateTagsInput!, $condition: ModelTagsConditionInput) {
        createTags(input: $input, condition: $condition) {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
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
    return <CreateTagsMutation>response.data.createTags;
  }
  async UpdateTags(
    input: UpdateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<UpdateTagsMutation> {
    const statement = `mutation UpdateTags($input: UpdateTagsInput!, $condition: ModelTagsConditionInput) {
        updateTags(input: $input, condition: $condition) {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
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
    return <UpdateTagsMutation>response.data.updateTags;
  }
  async DeleteTags(
    input: DeleteTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<DeleteTagsMutation> {
    const statement = `mutation DeleteTags($input: DeleteTagsInput!, $condition: ModelTagsConditionInput) {
        deleteTags(input: $input, condition: $condition) {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
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
    return <DeleteTagsMutation>response.data.deleteTags;
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
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
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
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
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
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
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
    return <DeleteChineseWordMutation>response.data.deleteChineseWord;
  }
  async GetTags(id: string): Promise<GetTagsQuery> {
    const statement = `query GetTags($id: ID!) {
        getTags(id: $id) {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
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
    return <GetTagsQuery>response.data.getTags;
  }
  async ListTags(
    filter?: ModelTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTagsQuery> {
    const statement = `query ListTags($filter: ModelTagsFilterInput, $limit: Int, $nextToken: String) {
        listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            tagName
            tagDescription
            chinesewordID
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
    return <ListTagsQuery>response.data.listTags;
  }
  async SyncTags(
    filter?: ModelTagsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTagsQuery> {
    const statement = `query SyncTags($filter: ModelTagsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTags(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            tagName
            tagDescription
            chinesewordID
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
    return <SyncTagsQuery>response.data.syncTags;
  }
  async GetChineseWord(id: string): Promise<GetChineseWordQuery> {
    const statement = `query GetChineseWord($id: ID!) {
        getChineseWord(id: $id) {
          __typename
          id
          character
          pinyin
          sound
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
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
            tags
            Tags {
              __typename
              nextToken
              startedAt
            }
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
            tags
            Tags {
              __typename
              nextToken
              startedAt
            }
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
    return <SyncChineseWordsQuery>response.data.syncChineseWords;
  }
  OnCreateTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTags {
        onCreateTags {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
  >;

  OnUpdateTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTags {
        onUpdateTags {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
  >;

  OnDeleteTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTags {
        onDeleteTags {
          __typename
          id
          tagName
          tagDescription
          chinesewordID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
  >;

  OnCreateChineseWordListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChineseWord">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChineseWord {
        onCreateChineseWord {
          __typename
          id
          character
          pinyin
          sound
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChineseWord">>
  >;

  OnUpdateChineseWordListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChineseWord">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChineseWord {
        onUpdateChineseWord {
          __typename
          id
          character
          pinyin
          sound
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChineseWord">>
  >;

  OnDeleteChineseWordListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChineseWord">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChineseWord {
        onDeleteChineseWord {
          __typename
          id
          character
          pinyin
          sound
          tags
          Tags {
            __typename
            items {
              __typename
              id
              tagName
              tagDescription
              chinesewordID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChineseWord">>
  >;
}
