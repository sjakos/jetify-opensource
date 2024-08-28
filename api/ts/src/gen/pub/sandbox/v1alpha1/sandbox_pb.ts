//*
// API to manage Jetify Sandbox environments

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,js_import_style=module"
// @generated from file pub/sandbox/v1alpha1/sandbox.proto (package pub.sandbox.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * SandboxState represents the state of a sandbox.
 *
 * @generated from enum pub.sandbox.v1alpha1.SandboxState
 */
export enum SandboxState {
  /**
   * Do not use.
   *
   * @generated from enum value: SANDBOX_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The workstation is not yet ready to accept requests from users but will
   * be soon.
   *
   * @generated from enum value: SANDBOX_STATE_STARTING = 1;
   */
  STARTING = 1,

  /**
   * The workstation is ready to accept requests from users.
   *
   * @generated from enum value: SANDBOX_STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * The workstation is being stopped.
   *
   * @generated from enum value: SANDBOX_STATE_STOPPING = 3;
   */
  STOPPING = 3,

  /**
   * The workstation is stopped and will not be able to receive requests until
   * it is started.
   *
   * @generated from enum value: SANDBOX_STATE_STOPPED = 4;
   */
  STOPPED = 4,

  /**
   * Reserved for future use. Currently deleted sandboxes are not returned by api.
   *
   * @generated from enum value: SANDBOX_STATE_DELETED = 5;
   */
  DELETED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(SandboxState)
proto3.util.setEnumType(SandboxState, "pub.sandbox.v1alpha1.SandboxState", [
  { no: 0, name: "SANDBOX_STATE_UNSPECIFIED" },
  { no: 1, name: "SANDBOX_STATE_STARTING" },
  { no: 2, name: "SANDBOX_STATE_RUNNING" },
  { no: 3, name: "SANDBOX_STATE_STOPPING" },
  { no: 4, name: "SANDBOX_STATE_STOPPED" },
  { no: 5, name: "SANDBOX_STATE_DELETED" },
]);

/**
 * @generated from message pub.sandbox.v1alpha1.CreateSandboxRequest
 */
export class CreateSandboxRequest extends Message<CreateSandboxRequest> {
  /**
   * Optional, user provided. Used for billing.
   *
   * @generated from field: string external_billing_tag = 1;
   */
  externalBillingTag = "";

  /**
   * @generated from field: string repo = 2;
   */
  repo = "";

  /**
   * @generated from field: string subdir = 3;
   */
  subdir = "";

  /**
   * @generated from field: string ref = 4;
   */
  ref = "";

  /**
   * @generated from field: map<string, string> environment_variables = 5;
   */
  environmentVariables: { [key: string]: string } = {};

  /**
   * Optional, human readable name for the sandbox.
   *
   * @generated from field: string name = 6;
   */
  name = "";

  /**
   * Optional. Project must belong to organization.
   *
   * @generated from field: string project_id = 7;
   */
  projectId = "";

  constructor(data?: PartialMessage<CreateSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.CreateSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "external_billing_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subdir", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "environment_variables", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSandboxRequest | PlainMessage<CreateSandboxRequest> | undefined, b: CreateSandboxRequest | PlainMessage<CreateSandboxRequest> | undefined): boolean {
    return proto3.util.equals(CreateSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.CreateSandboxResponse
 */
export class CreateSandboxResponse extends Message<CreateSandboxResponse> {
  /**
   * @generated from field: pub.sandbox.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<CreateSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.CreateSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSandboxResponse | PlainMessage<CreateSandboxResponse> | undefined, b: CreateSandboxResponse | PlainMessage<CreateSandboxResponse> | undefined): boolean {
    return proto3.util.equals(CreateSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.GetSandboxRequest
 */
export class GetSandboxRequest extends Message<GetSandboxRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.GetSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSandboxRequest | PlainMessage<GetSandboxRequest> | undefined, b: GetSandboxRequest | PlainMessage<GetSandboxRequest> | undefined): boolean {
    return proto3.util.equals(GetSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.GetSandboxResponse
 */
export class GetSandboxResponse extends Message<GetSandboxResponse> {
  /**
   * @generated from field: pub.sandbox.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<GetSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.GetSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSandboxResponse | PlainMessage<GetSandboxResponse> | undefined, b: GetSandboxResponse | PlainMessage<GetSandboxResponse> | undefined): boolean {
    return proto3.util.equals(GetSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.DeleteSandboxRequest
 */
export class DeleteSandboxRequest extends Message<DeleteSandboxRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.DeleteSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSandboxRequest {
    return new DeleteSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSandboxRequest {
    return new DeleteSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSandboxRequest {
    return new DeleteSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSandboxRequest | PlainMessage<DeleteSandboxRequest> | undefined, b: DeleteSandboxRequest | PlainMessage<DeleteSandboxRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.DeleteSandboxResponse
 */
export class DeleteSandboxResponse extends Message<DeleteSandboxResponse> {
  constructor(data?: PartialMessage<DeleteSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.DeleteSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSandboxResponse {
    return new DeleteSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSandboxResponse {
    return new DeleteSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSandboxResponse {
    return new DeleteSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSandboxResponse | PlainMessage<DeleteSandboxResponse> | undefined, b: DeleteSandboxResponse | PlainMessage<DeleteSandboxResponse> | undefined): boolean {
    return proto3.util.equals(DeleteSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.ListSandboxesFilter
 */
export class ListSandboxesFilter extends Message<ListSandboxesFilter> {
  /**
   * Optional. If passed in, only sandboxes for this project are returned.
   * Project must belong to organization
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * Optional. If passed in, only sandboxes for this member are returned.
   *
   * @generated from field: string member_id = 2;
   */
  memberId = "";

  constructor(data?: PartialMessage<ListSandboxesFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.ListSandboxesFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSandboxesFilter {
    return new ListSandboxesFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSandboxesFilter {
    return new ListSandboxesFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSandboxesFilter {
    return new ListSandboxesFilter().fromJsonString(jsonString, options);
  }

  static equals(a: ListSandboxesFilter | PlainMessage<ListSandboxesFilter> | undefined, b: ListSandboxesFilter | PlainMessage<ListSandboxesFilter> | undefined): boolean {
    return proto3.util.equals(ListSandboxesFilter, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.ListSandboxesRequest
 */
export class ListSandboxesRequest extends Message<ListSandboxesRequest> {
  /**
   * @generated from field: bool fetch_status_and_url = 1;
   */
  fetchStatusAndUrl = false;

  /**
   * @generated from field: pub.sandbox.v1alpha1.ListSandboxesFilter filter = 2;
   */
  filter?: ListSandboxesFilter;

  constructor(data?: PartialMessage<ListSandboxesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.ListSandboxesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fetch_status_and_url", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "filter", kind: "message", T: ListSandboxesFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSandboxesRequest {
    return new ListSandboxesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSandboxesRequest {
    return new ListSandboxesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSandboxesRequest {
    return new ListSandboxesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSandboxesRequest | PlainMessage<ListSandboxesRequest> | undefined, b: ListSandboxesRequest | PlainMessage<ListSandboxesRequest> | undefined): boolean {
    return proto3.util.equals(ListSandboxesRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.ListSandboxesResponse
 */
export class ListSandboxesResponse extends Message<ListSandboxesResponse> {
  /**
   * @generated from field: repeated pub.sandbox.v1alpha1.Sandbox sandboxes = 1;
   */
  sandboxes: Sandbox[] = [];

  constructor(data?: PartialMessage<ListSandboxesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.ListSandboxesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandboxes", kind: "message", T: Sandbox, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSandboxesResponse {
    return new ListSandboxesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSandboxesResponse {
    return new ListSandboxesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSandboxesResponse {
    return new ListSandboxesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSandboxesResponse | PlainMessage<ListSandboxesResponse> | undefined, b: ListSandboxesResponse | PlainMessage<ListSandboxesResponse> | undefined): boolean {
    return proto3.util.equals(ListSandboxesResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.StartSandboxRequest
 */
export class StartSandboxRequest extends Message<StartSandboxRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<StartSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.StartSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StartSandboxRequest {
    return new StartSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StartSandboxRequest {
    return new StartSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StartSandboxRequest {
    return new StartSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StartSandboxRequest | PlainMessage<StartSandboxRequest> | undefined, b: StartSandboxRequest | PlainMessage<StartSandboxRequest> | undefined): boolean {
    return proto3.util.equals(StartSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.StartSandboxResponse
 */
export class StartSandboxResponse extends Message<StartSandboxResponse> {
  /**
   * @generated from field: pub.sandbox.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<StartSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.StartSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StartSandboxResponse {
    return new StartSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StartSandboxResponse {
    return new StartSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StartSandboxResponse {
    return new StartSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StartSandboxResponse | PlainMessage<StartSandboxResponse> | undefined, b: StartSandboxResponse | PlainMessage<StartSandboxResponse> | undefined): boolean {
    return proto3.util.equals(StartSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.StopSandboxRequest
 */
export class StopSandboxRequest extends Message<StopSandboxRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<StopSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.StopSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StopSandboxRequest {
    return new StopSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StopSandboxRequest {
    return new StopSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StopSandboxRequest {
    return new StopSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StopSandboxRequest | PlainMessage<StopSandboxRequest> | undefined, b: StopSandboxRequest | PlainMessage<StopSandboxRequest> | undefined): boolean {
    return proto3.util.equals(StopSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.StopSandboxResponse
 */
export class StopSandboxResponse extends Message<StopSandboxResponse> {
  /**
   * @generated from field: pub.sandbox.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<StopSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.StopSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StopSandboxResponse {
    return new StopSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StopSandboxResponse {
    return new StopSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StopSandboxResponse {
    return new StopSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StopSandboxResponse | PlainMessage<StopSandboxResponse> | undefined, b: StopSandboxResponse | PlainMessage<StopSandboxResponse> | undefined): boolean {
    return proto3.util.equals(StopSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.sandbox.v1alpha1.Sandbox
 */
export class Sandbox extends Message<Sandbox> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string external_billing_tag = 2;
   */
  externalBillingTag = "";

  /**
   * @generated from field: string repo = 3;
   */
  repo = "";

  /**
   * The subdirectory within the repo to checkout. Defaults to the root of the repo.
   *
   * @generated from field: string subdir = 4;
   */
  subdir = "";

  /**
   * The git ref to checkout. This can be a branch, tag, or commit hash. Defaults to the default branch.
   *
   * @generated from field: string ref = 5;
   */
  ref = "";

  /**
   * Will be empty if the sandbox is not running. If present, it will contain access token.
   *
   * @generated from field: string url = 6;
   */
  url = "";

  /**
   * @generated from field: pub.sandbox.v1alpha1.SandboxState state = 7;
   */
  state = SandboxState.UNSPECIFIED;

  /**
   * Token used to make requests to the sandbox. Use in the Authorization header as a Bearer token.
   *
   * @generated from field: string access_token = 8;
   */
  accessToken = "";

  /**
   * The time the sandbox was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 9;
   */
  createdAt?: Timestamp;

  /**
   * The time the sandbox was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 10;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string name = 11;
   */
  name = "";

  constructor(data?: PartialMessage<Sandbox>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.sandbox.v1alpha1.Sandbox";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "external_billing_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "repo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subdir", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "state", kind: "enum", T: proto3.getEnumType(SandboxState) },
    { no: 8, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "created_at", kind: "message", T: Timestamp },
    { no: 10, name: "updated_at", kind: "message", T: Timestamp },
    { no: 11, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sandbox {
    return new Sandbox().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sandbox {
    return new Sandbox().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sandbox {
    return new Sandbox().fromJsonString(jsonString, options);
  }

  static equals(a: Sandbox | PlainMessage<Sandbox> | undefined, b: Sandbox | PlainMessage<Sandbox> | undefined): boolean {
    return proto3.util.equals(Sandbox, a, b);
  }
}

