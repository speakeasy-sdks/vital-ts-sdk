import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Summary {
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
   * getMealsV2SummaryMealUserIdGet - Get Meals
   *
   * Get user's meals
  **/
  getMealsV2SummaryMealUserIdGet(
    req: operations.GetMealsV2SummaryMealUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMealsV2SummaryMealUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMealsV2SummaryMealUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/meal/{user_id}", req.pathParams);
    
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
        const res: operations.GetMealsV2SummaryMealUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingMealResponse = httpRes?.data;
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
   * getUserActivityRawV2SummaryActivityUserIdRawGet - Get User Activity Raw
   *
   * Get Daily Activity for user_id
  **/
  getUserActivityRawV2SummaryActivityUserIdRawGet(
    req: operations.GetUserActivityRawV2SummaryActivityUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserActivityRawV2SummaryActivityUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserActivityRawV2SummaryActivityUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/activity/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserActivityRawV2SummaryActivityUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawActivity = httpRes?.data;
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
   * getUserActivityV2SummaryActivityUserIdGet - Get User Activity
   *
   * Get Daily Activity for user_id
  **/
  getUserActivityV2SummaryActivityUserIdGet(
    req: operations.GetUserActivityV2SummaryActivityUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserActivityV2SummaryActivityUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserActivityV2SummaryActivityUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/activity/{user_id}", req.pathParams);
    
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
        const res: operations.GetUserActivityV2SummaryActivityUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientActivityResponse = httpRes?.data;
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
   * getUserBodyRawV2SummaryBodyUserIdRawGet - Get User Body Raw
   *
   * Get Daily Body data for user_id
  **/
  getUserBodyRawV2SummaryBodyUserIdRawGet(
    req: operations.GetUserBodyRawV2SummaryBodyUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserBodyRawV2SummaryBodyUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserBodyRawV2SummaryBodyUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/body/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserBodyRawV2SummaryBodyUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawBody = httpRes?.data;
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
   * getUserBodyV2SummaryBodyUserIdGet - Get User Body
   *
   * Get Daily Body data for user_id
  **/
  getUserBodyV2SummaryBodyUserIdGet(
    req: operations.GetUserBodyV2SummaryBodyUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserBodyV2SummaryBodyUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserBodyV2SummaryBodyUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/body/{user_id}", req.pathParams);
    
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
        const res: operations.GetUserBodyV2SummaryBodyUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientBodyResponse = httpRes?.data;
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
   * getUserDevicesRawV2SummaryDevicesUserIdRawGet - Get User Devices Raw
   *
   * Get Devices for user_id
  **/
  getUserDevicesRawV2SummaryDevicesUserIdRawGet(
    req: operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/devices/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawDevices = httpRes?.data;
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
   * getUserProfileRawV2SummaryProfileUserIdRawGet - Get User Profile Raw
   *
   * Get Daily profile for user_id
  **/
  getUserProfileRawV2SummaryProfileUserIdRawGet(
    req: operations.GetUserProfileRawV2SummaryProfileUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserProfileRawV2SummaryProfileUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserProfileRawV2SummaryProfileUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/profile/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserProfileRawV2SummaryProfileUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawProfile = httpRes?.data;
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
   * getUserProfileV2SummaryProfileUserIdGet - Get User Profile
   *
   * Get Daily profile for user_id
  **/
  getUserProfileV2SummaryProfileUserIdGet(
    req: operations.GetUserProfileV2SummaryProfileUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserProfileV2SummaryProfileUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserProfileV2SummaryProfileUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/profile/{user_id}", req.pathParams);
    
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
        const res: operations.GetUserProfileV2SummaryProfileUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingProfile = httpRes?.data;
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
   * getUserSleepRawV2SummarySleepUserIdRawGet - Get User Sleep Raw
   *
   * Get Daily sleep for user_id
  **/
  getUserSleepRawV2SummarySleepUserIdRawGet(
    req: operations.GetUserSleepRawV2SummarySleepUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserSleepRawV2SummarySleepUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserSleepRawV2SummarySleepUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/sleep/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserSleepRawV2SummarySleepUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawSleep = httpRes?.data;
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
   * getUserSleepStreamV2SummarySleepUserIdStreamGet - Get User Sleep Stream
   *
   * Get Daily sleep stream for user_id
  **/
  getUserSleepStreamV2SummarySleepUserIdStreamGet(
    req: operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/sleep/{user_id}/stream", req.pathParams);
    
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
        const res: operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientSleepResponse = httpRes?.data;
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
   * getUserSleepV2SummarySleepUserIdGet - Get User Sleep
   *
   * Get Daily sleep for user_id
  **/
  getUserSleepV2SummarySleepUserIdGet(
    req: operations.GetUserSleepV2SummarySleepUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserSleepV2SummarySleepUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserSleepV2SummarySleepUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/sleep/{user_id}", req.pathParams);
    
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
        const res: operations.GetUserSleepV2SummarySleepUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientSleepResponse = httpRes?.data;
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
   * getUserWorkoutsRawV2SummaryWorkoutsUserIdRawGet - Get User Workouts Raw
   *
   * Get Daily workout for user_id
  **/
  getUserWorkoutsRawV2SummaryWorkoutsUserIdRawGet(
    req: operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/workouts/{user_id}/raw", req.pathParams);
    
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
        const res: operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rawWorkout = httpRes?.data;
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
   * getUserWorkoutsV2SummaryWorkoutsUserIdGet - Get User Workouts
   *
   * Get Daily workout for user_id
  **/
  getUserWorkoutsV2SummaryWorkoutsUserIdGet(
    req: operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/workouts/{user_id}", req.pathParams);
    
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
        const res: operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientWorkoutResponse = httpRes?.data;
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
   * postUserActivityV2SummaryActivityUserIdPost - Post User Activity
  **/
  postUserActivityV2SummaryActivityUserIdPost(
    req: operations.PostUserActivityV2SummaryActivityUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserActivityV2SummaryActivityUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserActivityV2SummaryActivityUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/activity/{user_id}", req.pathParams);

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
        const res: operations.PostUserActivityV2SummaryActivityUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserActivityV2SummaryActivityUserIdPost = JSON.stringify(httpRes?.data);
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
   * postUserBodyV2SummaryBodyUserIdPost - Post User Body
  **/
  postUserBodyV2SummaryBodyUserIdPost(
    req: operations.PostUserBodyV2SummaryBodyUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserBodyV2SummaryBodyUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserBodyV2SummaryBodyUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/body/{user_id}", req.pathParams);

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
        const res: operations.PostUserBodyV2SummaryBodyUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserBodyV2SummaryBodyUserIdPost = JSON.stringify(httpRes?.data);
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
   * postUserProfileV2SummaryProfileUserIdPost - Post User Profile
  **/
  postUserProfileV2SummaryProfileUserIdPost(
    req: operations.PostUserProfileV2SummaryProfileUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserProfileV2SummaryProfileUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserProfileV2SummaryProfileUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/profile/{user_id}", req.pathParams);

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
        const res: operations.PostUserProfileV2SummaryProfileUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserProfileV2SummaryProfileUserIdPost = JSON.stringify(httpRes?.data);
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
   * postUserSleepV2SummarySleepUserIdPost - Post User Sleep
  **/
  postUserSleepV2SummarySleepUserIdPost(
    req: operations.PostUserSleepV2SummarySleepUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserSleepV2SummarySleepUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserSleepV2SummarySleepUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/sleep/{user_id}", req.pathParams);

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
        const res: operations.PostUserSleepV2SummarySleepUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserSleepV2SummarySleepUserIdPost = JSON.stringify(httpRes?.data);
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
   * postUserWorkoutV2SummaryWorkoutsUserIdPost - Post User Workout
  **/
  postUserWorkoutV2SummaryWorkoutsUserIdPost(
    req: operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/summary/workouts/{user_id}", req.pathParams);

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
        const res: operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserWorkoutV2SummaryWorkoutsUserIdPost = JSON.stringify(httpRes?.data);
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
