/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Post } from "./post";
import { SentPost } from "./sent_post";
import { TimedoutPost } from "./timedout_post";

export const protobufPackage = "planet.blog";

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  portId: string;
  postList: Post[];
  postCount: number;
  sentPostList: SentPost[];
  sentPostCount: number;
  timedoutPostList: TimedoutPost[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  timedoutPostCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    postList: [],
    postCount: 0,
    sentPostList: [],
    sentPostCount: 0,
    timedoutPostList: [],
    timedoutPostCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.postCount !== 0) {
      writer.uint32(32).uint64(message.postCount);
    }
    for (const v of message.sentPostList) {
      SentPost.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.sentPostCount !== 0) {
      writer.uint32(48).uint64(message.sentPostCount);
    }
    for (const v of message.timedoutPostList) {
      TimedoutPost.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.timedoutPostCount !== 0) {
      writer.uint32(64).uint64(message.timedoutPostCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.postList.push(Post.decode(reader, reader.uint32()));
          break;
        case 4:
          message.postCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sentPostList.push(SentPost.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sentPostCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.timedoutPostList.push(TimedoutPost.decode(reader, reader.uint32()));
          break;
        case 8:
          message.timedoutPostCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      postList: Array.isArray(object?.postList) ? object.postList.map((e: any) => Post.fromJSON(e)) : [],
      postCount: isSet(object.postCount) ? Number(object.postCount) : 0,
      sentPostList: Array.isArray(object?.sentPostList)
        ? object.sentPostList.map((e: any) => SentPost.fromJSON(e))
        : [],
      sentPostCount: isSet(object.sentPostCount) ? Number(object.sentPostCount) : 0,
      timedoutPostList: Array.isArray(object?.timedoutPostList)
        ? object.timedoutPostList.map((e: any) => TimedoutPost.fromJSON(e))
        : [],
      timedoutPostCount: isSet(object.timedoutPostCount) ? Number(object.timedoutPostCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.postList) {
      obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.postList = [];
    }
    message.postCount !== undefined && (obj.postCount = Math.round(message.postCount));
    if (message.sentPostList) {
      obj.sentPostList = message.sentPostList.map((e) => e ? SentPost.toJSON(e) : undefined);
    } else {
      obj.sentPostList = [];
    }
    message.sentPostCount !== undefined && (obj.sentPostCount = Math.round(message.sentPostCount));
    if (message.timedoutPostList) {
      obj.timedoutPostList = message.timedoutPostList.map((e) => e ? TimedoutPost.toJSON(e) : undefined);
    } else {
      obj.timedoutPostList = [];
    }
    message.timedoutPostCount !== undefined && (obj.timedoutPostCount = Math.round(message.timedoutPostCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.postList = object.postList?.map((e) => Post.fromPartial(e)) || [];
    message.postCount = object.postCount ?? 0;
    message.sentPostList = object.sentPostList?.map((e) => SentPost.fromPartial(e)) || [];
    message.sentPostCount = object.sentPostCount ?? 0;
    message.timedoutPostList = object.timedoutPostList?.map((e) => TimedoutPost.fromPartial(e)) || [];
    message.timedoutPostCount = object.timedoutPostCount ?? 0;
    return message;
  },
};

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
