/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Post } from "./post";
import { SentPost } from "./sent_post";
import { TimedoutPost } from "./timedout_post";

export const protobufPackage = "planet.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPostRequest {
  id: number;
}

export interface QueryGetPostResponse {
  Post: Post | undefined;
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPostResponse {
  Post: Post[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSentPostRequest {
  id: number;
}

export interface QueryGetSentPostResponse {
  SentPost: SentPost | undefined;
}

export interface QueryAllSentPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSentPostResponse {
  SentPost: SentPost[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTimedoutPostRequest {
  id: number;
}

export interface QueryGetTimedoutPostResponse {
  TimedoutPost: TimedoutPost | undefined;
}

export interface QueryAllTimedoutPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTimedoutPostResponse {
  TimedoutPost: TimedoutPost[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPostRequest(): QueryGetPostRequest {
  return { id: 0 };
}

export const QueryGetPostRequest = {
  encode(message: QueryGetPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostRequest>, I>>(object: I): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPostResponse(): QueryGetPostResponse {
  return { Post: undefined };
}

export const QueryGetPostResponse = {
  encode(message: QueryGetPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    return { Post: isSet(object.Post) ? Post.fromJSON(object.Post) : undefined };
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.Post !== undefined && (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostResponse>, I>>(object: I): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    message.Post = (object.Post !== undefined && object.Post !== null) ? Post.fromPartial(object.Post) : undefined;
    return message;
  },
};

function createBaseQueryAllPostRequest(): QueryAllPostRequest {
  return { pagination: undefined };
}

export const QueryAllPostRequest = {
  encode(message: QueryAllPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPostRequest>, I>>(object: I): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPostResponse(): QueryAllPostResponse {
  return { Post: [], pagination: undefined };
}

export const QueryAllPostResponse = {
  encode(message: QueryAllPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    return {
      Post: Array.isArray(object?.Post) ? object.Post.map((e: any) => Post.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPostResponse>, I>>(object: I): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.Post = object.Post?.map((e) => Post.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSentPostRequest(): QueryGetSentPostRequest {
  return { id: 0 };
}

export const QueryGetSentPostRequest = {
  encode(message: QueryGetSentPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSentPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentPostRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetSentPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSentPostRequest>, I>>(object: I): QueryGetSentPostRequest {
    const message = createBaseQueryGetSentPostRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetSentPostResponse(): QueryGetSentPostResponse {
  return { SentPost: undefined };
}

export const QueryGetSentPostResponse = {
  encode(message: QueryGetSentPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SentPost !== undefined) {
      SentPost.encode(message.SentPost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSentPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentPost = SentPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentPostResponse {
    return { SentPost: isSet(object.SentPost) ? SentPost.fromJSON(object.SentPost) : undefined };
  },

  toJSON(message: QueryGetSentPostResponse): unknown {
    const obj: any = {};
    message.SentPost !== undefined && (obj.SentPost = message.SentPost ? SentPost.toJSON(message.SentPost) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSentPostResponse>, I>>(object: I): QueryGetSentPostResponse {
    const message = createBaseQueryGetSentPostResponse();
    message.SentPost = (object.SentPost !== undefined && object.SentPost !== null)
      ? SentPost.fromPartial(object.SentPost)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSentPostRequest(): QueryAllSentPostRequest {
  return { pagination: undefined };
}

export const QueryAllSentPostRequest = {
  encode(message: QueryAllSentPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSentPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentPostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllSentPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSentPostRequest>, I>>(object: I): QueryAllSentPostRequest {
    const message = createBaseQueryAllSentPostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSentPostResponse(): QueryAllSentPostResponse {
  return { SentPost: [], pagination: undefined };
}

export const QueryAllSentPostResponse = {
  encode(message: QueryAllSentPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.SentPost) {
      SentPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSentPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentPost.push(SentPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentPostResponse {
    return {
      SentPost: Array.isArray(object?.SentPost) ? object.SentPost.map((e: any) => SentPost.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllSentPostResponse): unknown {
    const obj: any = {};
    if (message.SentPost) {
      obj.SentPost = message.SentPost.map((e) => e ? SentPost.toJSON(e) : undefined);
    } else {
      obj.SentPost = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSentPostResponse>, I>>(object: I): QueryAllSentPostResponse {
    const message = createBaseQueryAllSentPostResponse();
    message.SentPost = object.SentPost?.map((e) => SentPost.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTimedoutPostRequest(): QueryGetTimedoutPostRequest {
  return { id: 0 };
}

export const QueryGetTimedoutPostRequest = {
  encode(message: QueryGetTimedoutPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTimedoutPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTimedoutPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimedoutPostRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetTimedoutPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTimedoutPostRequest>, I>>(object: I): QueryGetTimedoutPostRequest {
    const message = createBaseQueryGetTimedoutPostRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetTimedoutPostResponse(): QueryGetTimedoutPostResponse {
  return { TimedoutPost: undefined };
}

export const QueryGetTimedoutPostResponse = {
  encode(message: QueryGetTimedoutPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TimedoutPost !== undefined) {
      TimedoutPost.encode(message.TimedoutPost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTimedoutPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTimedoutPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimedoutPost = TimedoutPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimedoutPostResponse {
    return { TimedoutPost: isSet(object.TimedoutPost) ? TimedoutPost.fromJSON(object.TimedoutPost) : undefined };
  },

  toJSON(message: QueryGetTimedoutPostResponse): unknown {
    const obj: any = {};
    message.TimedoutPost !== undefined
      && (obj.TimedoutPost = message.TimedoutPost ? TimedoutPost.toJSON(message.TimedoutPost) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTimedoutPostResponse>, I>>(object: I): QueryGetTimedoutPostResponse {
    const message = createBaseQueryGetTimedoutPostResponse();
    message.TimedoutPost = (object.TimedoutPost !== undefined && object.TimedoutPost !== null)
      ? TimedoutPost.fromPartial(object.TimedoutPost)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTimedoutPostRequest(): QueryAllTimedoutPostRequest {
  return { pagination: undefined };
}

export const QueryAllTimedoutPostRequest = {
  encode(message: QueryAllTimedoutPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTimedoutPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimedoutPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimedoutPostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTimedoutPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTimedoutPostRequest>, I>>(object: I): QueryAllTimedoutPostRequest {
    const message = createBaseQueryAllTimedoutPostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTimedoutPostResponse(): QueryAllTimedoutPostResponse {
  return { TimedoutPost: [], pagination: undefined };
}

export const QueryAllTimedoutPostResponse = {
  encode(message: QueryAllTimedoutPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.TimedoutPost) {
      TimedoutPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTimedoutPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimedoutPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimedoutPost.push(TimedoutPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimedoutPostResponse {
    return {
      TimedoutPost: Array.isArray(object?.TimedoutPost)
        ? object.TimedoutPost.map((e: any) => TimedoutPost.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTimedoutPostResponse): unknown {
    const obj: any = {};
    if (message.TimedoutPost) {
      obj.TimedoutPost = message.TimedoutPost.map((e) => e ? TimedoutPost.toJSON(e) : undefined);
    } else {
      obj.TimedoutPost = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTimedoutPostResponse>, I>>(object: I): QueryAllTimedoutPostResponse {
    const message = createBaseQueryAllTimedoutPostResponse();
    message.TimedoutPost = object.TimedoutPost?.map((e) => TimedoutPost.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Post by id. */
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  /** Queries a list of Post items. */
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
  /** Queries a SentPost by id. */
  SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
  /** Queries a list of SentPost items. */
  SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse>;
  /** Queries a TimedoutPost by id. */
  TimedoutPost(request: QueryGetTimedoutPostRequest): Promise<QueryGetTimedoutPostResponse>;
  /** Queries a list of TimedoutPost items. */
  TimedoutPostAll(request: QueryAllTimedoutPostRequest): Promise<QueryAllTimedoutPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Post = this.Post.bind(this);
    this.PostAll = this.PostAll.bind(this);
    this.SentPost = this.SentPost.bind(this);
    this.SentPostAll = this.SentPostAll.bind(this);
    this.TimedoutPost = this.TimedoutPost.bind(this);
    this.TimedoutPostAll = this.TimedoutPostAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "Post", data);
    return promise.then((data) => QueryGetPostResponse.decode(new _m0.Reader(data)));
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "PostAll", data);
    return promise.then((data) => QueryAllPostResponse.decode(new _m0.Reader(data)));
  }

  SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse> {
    const data = QueryGetSentPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "SentPost", data);
    return promise.then((data) => QueryGetSentPostResponse.decode(new _m0.Reader(data)));
  }

  SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse> {
    const data = QueryAllSentPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "SentPostAll", data);
    return promise.then((data) => QueryAllSentPostResponse.decode(new _m0.Reader(data)));
  }

  TimedoutPost(request: QueryGetTimedoutPostRequest): Promise<QueryGetTimedoutPostResponse> {
    const data = QueryGetTimedoutPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "TimedoutPost", data);
    return promise.then((data) => QueryGetTimedoutPostResponse.decode(new _m0.Reader(data)));
  }

  TimedoutPostAll(request: QueryAllTimedoutPostRequest): Promise<QueryAllTimedoutPostResponse> {
    const data = QueryAllTimedoutPostRequest.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Query", "TimedoutPostAll", data);
    return promise.then((data) => QueryAllTimedoutPostResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
