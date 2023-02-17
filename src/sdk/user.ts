import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class User {
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
   * backfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPost - Backfill Webhook For User
  **/
  backfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPost(
    req: operations.BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/admin/webhook/{user_id}/{team_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPost = JSON.stringify(httpRes?.data);
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
   * createUserV2UserPost - Create User
   *
   * POST Create a Vital user given a client_user_id and returns the user_id.
  **/
  createUserV2UserPost(
    req: operations.CreateUserV2UserPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserV2UserPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserV2UserPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/user";

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
        const res: operations.CreateUserV2UserPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingUserKey = httpRes?.data;
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
   * deleteUserV2UserUserIdDelete - Delete User
  **/
  deleteUserV2UserUserIdDelete(
    req: operations.DeleteUserV2UserUserIdDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserV2UserUserIdDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserV2UserUserIdDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserV2UserUserIdDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userSuccessResponse = httpRes?.data;
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
   * deregisterProviderV2UserUserIdProviderDelete - Deregister Provider
  **/
  deregisterProviderV2UserUserIdProviderDelete(
    req: operations.DeregisterProviderV2UserUserIdProviderDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeregisterProviderV2UserUserIdProviderDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeregisterProviderV2UserUserIdProviderDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/{user_id}/{provider}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeregisterProviderV2UserUserIdProviderDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userSuccessResponse = httpRes?.data;
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
   * getConnectedProvidersV2UserProvidersUserIdGet - Get Connected Providers
   *
   * GET Users connected providers
  **/
  getConnectedProvidersV2UserProvidersUserIdGet(
    req: operations.GetConnectedProvidersV2UserProvidersUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectedProvidersV2UserProvidersUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectedProvidersV2UserProvidersUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/providers/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConnectedProvidersV2UserProvidersUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseGetConnectedProvidersV2UserProvidersUserIdGet = httpRes?.data;
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
   * getTeamsMetricsV2UserMetricsGet - Get Teams Metrics
   *
   * GET metrics for team.
  **/
  getTeamsMetricsV2UserMetricsGet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsMetricsV2UserMetricsGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/user/metrics";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsMetricsV2UserMetricsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.metricsResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTeamsUsersV2UserGet - Get Teams Users
   *
   * GET All users for team.
  **/
  getTeamsUsersV2UserGet(
    req: operations.GetTeamsUsersV2UserGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsersV2UserGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsersV2UserGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/user";
    
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
        const res: operations.GetTeamsUsersV2UserGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedUsersResponse = httpRes?.data;
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
   * getUserByClientUserIdV2UserResolveClientUserIdGet - Get User By Client User Id
   *
   * GET user_id from client_user_id.
  **/
  getUserByClientUserIdV2UserResolveClientUserIdGet(
    req: operations.GetUserByClientUserIdV2UserResolveClientUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserByClientUserIdV2UserResolveClientUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserByClientUserIdV2UserResolveClientUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/resolve/{client_user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserByClientUserIdV2UserResolveClientUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingUser = httpRes?.data;
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
   * getUserV2UserUserIdGet - Get User
   *
   * GET User details given the user_id.
  **/
  getUserV2UserUserIdGet(
    req: operations.GetUserV2UserUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserV2UserUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserV2UserUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserV2UserUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingUser = httpRes?.data;
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
   * patchUserV2UserUserIdPatch - Patch User
  **/
  patchUserV2UserUserIdPatch(
    req: operations.PatchUserV2UserUserIdPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchUserV2UserUserIdPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchUserV2UserUserIdPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/{user_id}", req.pathParams);

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
        const res: operations.PatchUserV2UserUserIdPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * refreshUserIdV2UserRefreshUserIdPost - Refresh User Id
   *
   * Trigger a manual refresh for a specific user
  **/
  refreshUserIdV2UserRefreshUserIdPost(
    req: operations.RefreshUserIdV2UserRefreshUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RefreshUserIdV2UserRefreshUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RefreshUserIdV2UserRefreshUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/refresh/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RefreshUserIdV2UserRefreshUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userRefreshSuccessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.userRefreshErrorResponse = httpRes?.data;
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
