/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "planet.blog";

export interface SentPost {
  id: number;
  postID: string;
  title: string;
  chain: string;
  creator: string;
}

function createBaseSentPost(): SentPost {
  return { id: 0, postID: "", title: "", chain: "", creator: "" };
}

export const SentPost = {
  encode(message: SentPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.postID !== "") {
      writer.uint32(18).string(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.postID = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SentPost {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      postID: isSet(object.postID) ? String(object.postID) : "",
      title: isSet(object.title) ? String(object.title) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: SentPost): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.chain !== undefined && (obj.chain = message.chain);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SentPost>, I>>(object: I): SentPost {
    const message = createBaseSentPost();
    message.id = object.id ?? 0;
    message.postID = object.postID ?? "";
    message.title = object.title ?? "";
    message.chain = object.chain ?? "";
    message.creator = object.creator ?? "";
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
