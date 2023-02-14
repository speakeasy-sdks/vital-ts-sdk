import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Link {
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
   * checkLinkTokenStateV2LinkStateGet - Check Link Token State
   *
   * REQUEST_SOURCE: VITAL-LINK
   * Check link token state - can be hit continuously used as heartbeat
  **/
  checkLinkTokenStateV2LinkStateGet(
    config?: AxiosRequestConfig
  ): Promise<operations.CheckLinkTokenStateV2LinkStateGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/state";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckLinkTokenStateV2LinkStateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseCheckLinkTokenStateV2LinkStateGet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * checkTokenValidV2LinkTokenIsValidPost - Check Token Valid
  **/
  checkTokenValidV2LinkTokenIsValidPost(
    req: operations.CheckTokenValidV2LinkTokenIsValidPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckTokenValidV2LinkTokenIsValidPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckTokenValidV2LinkTokenIsValidPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/token/isValid";

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
        const res: operations.CheckTokenValidV2LinkTokenIsValidPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseCheckTokenValidV2LinkTokenIsvalidPost = httpRes?.data;
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
   * connectBleProviderV2LinkProviderManualProviderPost - Connect Ble Provider
   *
   * REQUEST_SOURCE: CUSTOMER
   * PROVIDER_TYPE: MANUAL-PROVIDER
   * This connects auth providers that are password based.
  **/
  connectBleProviderV2LinkProviderManualProviderPost(
    req: operations.ConnectBleProviderV2LinkProviderManualProviderPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectBleProviderV2LinkProviderManualProviderPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectBleProviderV2LinkProviderManualProviderPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/link/provider/manual/{provider}", req.pathParams);

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
        const res: operations.ConnectBleProviderV2LinkProviderManualProviderPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseConnectBleProviderV2LinkProviderManualProviderPost = httpRes?.data;
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
   * connectEmailAuthProviderV2LinkProviderEmailProviderPost - Connect Email Auth Provider
   *
   * This connects auth providers that are email based.
  **/
  connectEmailAuthProviderV2LinkProviderEmailProviderPost(
    req: operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/link/provider/email/{provider}", req.pathParams);

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
        const res: operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.connectionStatus = httpRes?.data;
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
   * connectEmailAuthV2LinkAuthEmailPost - Connect Email Auth
   *
   * REQUEST_SOURCE: VITAL-LINK
   * PROVIDER_TYPE: EMAIL-AUTH
   * This function is hit by vital-link to authenticate a email provider.
  **/
  connectEmailAuthV2LinkAuthEmailPost(
    req: operations.ConnectEmailAuthV2LinkAuthEmailPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectEmailAuthV2LinkAuthEmailPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectEmailAuthV2LinkAuthEmailPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/auth/email";

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
        const res: operations.ConnectEmailAuthV2LinkAuthEmailPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.connectionStatus = httpRes?.data;
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
   * connectIndividualProviderV2LinkProviderPasswordProviderPost - Connect Individual Provider
   *
   * This connects auth providers that are password based.
  **/
  connectIndividualProviderV2LinkProviderPasswordProviderPost(
    req: operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/link/provider/password/{provider}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.providerLinkResponse = httpRes?.data;
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
   * connectPasswordAuthV2LinkAuthPost - Connect Password Auth
   *
   * REQUEST_SOURCE: VITAL-LINK
   * PROVIDER_TYPE: PASSWORD-AUTH
   * This function is hit by vital-link to authenticate a password provider.
  **/
  connectPasswordAuthV2LinkAuthPost(
    req: operations.ConnectPasswordAuthV2LinkAuthPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectPasswordAuthV2LinkAuthPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectPasswordAuthV2LinkAuthPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/auth";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ConnectPasswordAuthV2LinkAuthPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.connectionStatus = httpRes?.data;
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
   * connectProviderV2LinkConnectProviderGet - Connect Provider
   *
   * REQUEST_SOURCE: VITAL-LINK
   * PROVIDER_TYPE: OAUTH
   * Connect oauth providers
  **/
  connectProviderV2LinkConnectProviderGet(
    req: operations.ConnectProviderV2LinkConnectProviderGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectProviderV2LinkConnectProviderGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectProviderV2LinkConnectProviderGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/link/connect/{provider}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ConnectProviderV2LinkConnectProviderGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseConnectProviderV2LinkConnectProviderGet = httpRes?.data;
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
   * createDemoConnectionV2LinkConnectDemoPost - Create Demo Connection
   *
   * POST Connect the given Vital user to a demo provider.
  **/
  createDemoConnectionV2LinkConnectDemoPost(
    req: operations.CreateDemoConnectionV2LinkConnectDemoPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDemoConnectionV2LinkConnectDemoPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDemoConnectionV2LinkConnectDemoPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/connect/demo";

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
        const res: operations.CreateDemoConnectionV2LinkConnectDemoPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.demoConnectionStatus = httpRes?.data;
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
   * createTokenV2LinkCodeCreatePost - Create Token
   *
   * Generate a token to invite a user of Vital mobile app to your team
  **/
  createTokenV2LinkCodeCreatePost(
    req: operations.CreateTokenV2LinkCodeCreatePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTokenV2LinkCodeCreatePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTokenV2LinkCodeCreatePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/code/create";
    
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
        const res: operations.CreateTokenV2LinkCodeCreatePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.vitalTokenCreatedResponse = httpRes?.data;
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
   * exchangeTokenV2LinkCodeExchangePost - Exchange Token
   *
   * Redeem an invite token for an api key
  **/
  exchangeTokenV2LinkCodeExchangePost(
    req: operations.ExchangeTokenV2LinkCodeExchangePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExchangeTokenV2LinkCodeExchangePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExchangeTokenV2LinkCodeExchangePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/code/exchange";
    
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
        const res: operations.ExchangeTokenV2LinkCodeExchangePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.vitalTokenExchangeResponse = httpRes?.data;
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
   * generateVitalLinkTokenV2LinkTokenPost - Generate Vital Link Token
   *
   * Endpoint to generate a user link token, to be used throughout the vital
   * link process. The vital link token is a one time use token, that
   * expires after 10 minutes. If you would like vital-link widget to launch
   * with a specific provider, pass in a provider in the body. If you would
   * like to redirect to a custom url after successful or error connection,
   * pass in your own custom redirect_url parameter.
  **/
  generateVitalLinkTokenV2LinkTokenPost(
    req: operations.GenerateVitalLinkTokenV2LinkTokenPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateVitalLinkTokenV2LinkTokenPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateVitalLinkTokenV2LinkTokenPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/token";

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
        const res: operations.GenerateVitalLinkTokenV2LinkTokenPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.linkTokenExchangeResponse = httpRes?.data;
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
   * getOauthProviderV2LinkProviderOauthOauthProviderGet - Get Oauth Provider
   *
   * This endpoint generates an OAuth link for oauth provider
  **/
  getOauthProviderV2LinkProviderOauthOauthProviderGet(
    req: operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/link/provider/oauth/{oauth_provider}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.source = httpRes?.data;
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
   * getProvidersV2LinkProvidersGet - Get Providers
   *
   * GET List of all available providers given the generated link token.
  **/
  getProvidersV2LinkProvidersGet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetProvidersV2LinkProvidersGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/providers";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProvidersV2LinkProvidersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sourceLinks = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * startConnectProcessV2LinkStartPost - Start Connect Process
   *
   * REQUEST_SOURCE: VITAL-LINK
   * Start link token process
  **/
  startConnectProcessV2LinkStartPost(
    req: operations.StartConnectProcessV2LinkStartPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartConnectProcessV2LinkStartPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartConnectProcessV2LinkStartPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/link/start";

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
        const res: operations.StartConnectProcessV2LinkStartPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseStartConnectProcessV2LinkStartPost = httpRes?.data;
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
