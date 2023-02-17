import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Team {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createApiKeyV2TeamTeamIdApikeyPost - Create Api Key
   *
   * Create api key.
  **/
  createApiKeyV2TeamTeamIdApikeyPost(
    req: operations.CreateApiKeyV2TeamTeamIdApikeyPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateApiKeyV2TeamTeamIdApikeyPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateApiKeyV2TeamTeamIdApikeyPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/apikey", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateApiKeyV2TeamTeamIdApikeyPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiKeyInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createPriorityV2TeamTeamIdPriorityPost - Create Priority
   *
   * Add Team priority row for source
  **/
  createPriorityV2TeamTeamIdPriorityPost(
    req: operations.CreatePriorityV2TeamTeamIdPriorityPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePriorityV2TeamTeamIdPriorityPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePriorityV2TeamTeamIdPriorityPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/priority", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreatePriorityV2TeamTeamIdPriorityPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.priority = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createTeamV2TeamPost - Create Team
   *
   * Create Team.
  **/
  createTeamV2TeamPost(
    req: operations.CreateTeamV2TeamPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTeamV2TeamPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTeamV2TeamPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTeamV2TeamPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.teamInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteApiKeyV2TeamTeamIdApikeyApiKeyIdDelete - Delete Api Key
   *
   * Invalidate api key by key value.
  **/
  deleteApiKeyV2TeamTeamIdApikeyApiKeyIdDelete(
    req: operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/apikey/{api_key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiKeyInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteTeamV2TeamTeamIdDelete - Delete Team
   *
   * Post teams.
  **/
  deleteTeamV2TeamTeamIdDelete(
    req: operations.DeleteTeamV2TeamTeamIdDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamV2TeamTeamIdDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamV2TeamTeamIdDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTeamV2TeamTeamIdDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.teamInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getApiKeysForTeamV2TeamTeamIdApikeysGet - Get Api Keys For Team
   *
   * Invalidate api key by key value.
  **/
  getApiKeysForTeamV2TeamTeamIdApikeysGet(
    req: operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/apikeys", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiKeyInDBS = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSourcePrioritiesV2TeamSourcePrioritiesGet - Get Source Priorities
   *
   * GET source priorities.
  **/
  getSourcePrioritiesV2TeamSourcePrioritiesGet(
    req: operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team/source/priorities";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSourcePrioritiesV2TeamSourcePrioritiesGet200ApplicationJSONObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSvixWebhookUrlV2TeamSvixUrlGet - Get Svix Webhook Url
  **/
  getSvixWebhookUrlV2TeamSvixUrlGet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSvixWebhookUrlV2TeamSvixUrlGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team/svix/url";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSvixWebhookUrlV2TeamSvixUrlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseGetSvixWebhookUrlV2TeamSvixUrlGet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTeamConfigV2TeamLinkConfigGet - Get Team Config
   *
   * Post teams.
  **/
  getTeamConfigV2TeamLinkConfigGet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamConfigV2TeamLinkConfigGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team/link/config";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamConfigV2TeamLinkConfigGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseGetTeamConfigV2TeamLinkConfigGet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTeamUserCountV2TeamTeamIdUsersCountGet - Get Team User Count
   *
   * Get the current user count for a team.
  **/
  getTeamUserCountV2TeamTeamIdUsersCountGet(
    req: operations.GetTeamUserCountV2TeamTeamIdUsersCountGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamUserCountV2TeamTeamIdUsersCountGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamUserCountV2TeamTeamIdUsersCountGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/users/count", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamUserCountV2TeamTeamIdUsersCountGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseGetTeamUserCountV2TeamTeamIdUsersCountGet = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTeamV2TeamTeamIdGet - Get Team
   *
   * Get team.
  **/
  getTeamV2TeamTeamIdGet(
    req: operations.GetTeamV2TeamTeamIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamV2TeamTeamIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamV2TeamTeamIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamV2TeamTeamIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingTeam = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrateTeamV2TeamTeamIdAdminMigratePost - Migrate Team
  **/
  migrateTeamV2TeamTeamIdAdminMigratePost(
    req: operations.MigrateTeamV2TeamTeamIdAdminMigratePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrateTeamV2TeamTeamIdAdminMigratePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrateTeamV2TeamTeamIdAdminMigratePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/admin/migrate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrateTeamV2TeamTeamIdAdminMigratePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migrateTeamV2TeamTeamIdAdminMigratePost200ApplicationJSONAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch - Rotate Api Key
   *
   * Deprecated. Rotate api key.
  **/
  rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch(
    req: operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/apikey/{api_key_id}/rotate", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "patch",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiKeyInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGet - Search Team Users By Uuid Or Client User Id
   *
   * Search team users by user_id
  **/
  searchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGet(
    req: operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team/users/search";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch - Update Api Key Label
   *
   * Update API key label.
  **/
  updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch(
    req: operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}/apikey/{api_key_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiKeyInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateSourcePrioritiesV2TeamSourcePrioritiesPatch - Update Source Priorities
   *
   * Patch source priorities.
  **/
  updateSourcePrioritiesV2TeamSourcePrioritiesPatch(
    req: operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/team/source/priorities";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "patch",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateSourcePrioritiesV2TeamSourcePrioritiesPatch200ApplicationJSONObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateTeamV2TeamTeamIdPatch - Update Team
   *
   * Update team.
  **/
  updateTeamV2TeamTeamIdPatch(
    req: operations.UpdateTeamV2TeamTeamIdPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTeamV2TeamTeamIdPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTeamV2TeamTeamIdPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/team/{team_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTeamV2TeamTeamIdPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.teamInDB = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
