/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "planet.blog";

export interface MsgSendIbcPost {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  title: string;
  content: string;
}

export interface MsgSendIbcPostResponse {
}

function createBaseMsgSendIbcPost(): MsgSendIbcPost {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, title: "", content: "" };
}

export const MsgSendIbcPost = {
  encode(message: MsgSendIbcPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(50).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: MsgSendIbcPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcPost>, I>>(object: I): MsgSendIbcPost {
    const message = createBaseMsgSendIbcPost();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMsgSendIbcPostResponse(): MsgSendIbcPostResponse {
  return {};
}

export const MsgSendIbcPostResponse = {
  encode(_: MsgSendIbcPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcPostResponse();
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

  fromJSON(_: any): MsgSendIbcPostResponse {
    return {};
  },

  toJSON(_: MsgSendIbcPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcPostResponse>, I>>(_: I): MsgSendIbcPostResponse {
    const message = createBaseMsgSendIbcPostResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcPost(request: MsgSendIbcPost): Promise<MsgSendIbcPostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendIbcPost = this.SendIbcPost.bind(this);
  }
  SendIbcPost(request: MsgSendIbcPost): Promise<MsgSendIbcPostResponse> {
    const data = MsgSendIbcPost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "SendIbcPost", data);
    return promise.then((data) => MsgSendIbcPostResponse.decode(new _m0.Reader(data)));
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
