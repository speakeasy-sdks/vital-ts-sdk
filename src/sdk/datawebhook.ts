import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class DataWebhook {
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
   * deregisterGarminV2DataWebhookDeregisterGarminPost - Deregister Garmin
   *
   * Deregister garmin connected source. This function listens to webhooks from
   * garmin and deregisters a garmin user if a user deresgisters on the
   * garmin website/delinks vital from their garmin account.
  **/
  deregisterGarminV2DataWebhookDeregisterGarminPost(
    req: operations.DeregisterGarminV2DataWebhookDeregisterGarminPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeregisterGarminV2DataWebhookDeregisterGarminPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeregisterGarminV2DataWebhookDeregisterGarminPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/deregister/garmin";

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
        const res: operations.DeregisterGarminV2DataWebhookDeregisterGarminPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseDeregisterGarminV2DataWebhookDeregisterGarminPost = JSON.stringify(httpRes?.data);
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
   * ihealthWebhookV2DataWebhookIhealthPost - Ihealth Webhook
   *
   * IHealth webhooks return a list of resources that have been updated.
   * For example,
   * [
   *     {
   *         "CollectionType": "bp",
   *         "MDate": "2019-03-01 13:45:01",
   *         "UserID": "05dffbe0dd*****",
   *         "SubscriptionId": "07bf3c71aa*****"
   *     },
   *     {
   *         "CollectionType": "weight",
   *         "MDate": "2019-03-01 13:45:01",
   *         "UserID": "05dffbe0dd*****",
   *         "SubscriptionId": "07bf3c71aa*****"
   *     }
   * ...
   * ]
   * 
   * Types include:
   *     - bp,
   *     - glucose,
   *     - weight,
   *     - activity,
   *     - sleep,
   *     - spo2,
   *     - userinfo,
   *     - food,
   *     - sport,
   *     - temperature,
   *     - heartrate
   * 
   * Returns:
   *     200 - Success
  **/
  ihealthWebhookV2DataWebhookIhealthPost(
    req: operations.IhealthWebhookV2DataWebhookIhealthPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IhealthWebhookV2DataWebhookIhealthPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IhealthWebhookV2DataWebhookIhealthPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/ihealth";
    
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
        const res: operations.IhealthWebhookV2DataWebhookIhealthPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseIhealthWebhookV2DataWebhookIhealthPost = JSON.stringify(httpRes?.data);
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
   * receiveActivityUpdatesV2DataWebhookProviderActivityPost - Receive Activity Updates
   *
   * Post records.
  **/
  receiveActivityUpdatesV2DataWebhookProviderActivityPost(
    req: operations.ReceiveActivityUpdatesV2DataWebhookProviderActivityPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveActivityUpdatesV2DataWebhookProviderActivityPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReceiveActivityUpdatesV2DataWebhookProviderActivityPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/data/webhook/{provider}/activity", req.pathParams);

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
        const res: operations.ReceiveActivityUpdatesV2DataWebhookProviderActivityPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveActivityUpdatesV2DataWebhookProviderActivityPost = JSON.stringify(httpRes?.data);
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
   * receiveBodyUpdatesV2DataWebhookProviderBodyPost - Receive Body Updates
   *
   * Post records.
  **/
  receiveBodyUpdatesV2DataWebhookProviderBodyPost(
    req: operations.ReceiveBodyUpdatesV2DataWebhookProviderBodyPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveBodyUpdatesV2DataWebhookProviderBodyPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReceiveBodyUpdatesV2DataWebhookProviderBodyPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/data/webhook/{provider}/body", req.pathParams);

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
        const res: operations.ReceiveBodyUpdatesV2DataWebhookProviderBodyPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveBodyUpdatesV2DataWebhookProviderBodyPost = JSON.stringify(httpRes?.data);
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
   * receiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPost - Receive Garmin Workout Stream Updates
   *
   * Receive Workout updates from strava.
  **/
  receiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPost(
    req: operations.ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/garmin/workouts/stream";

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
        const res: operations.ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPost = JSON.stringify(httpRes?.data);
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
   * receiveSleepUpdatesV2DataWebhookProviderSleepPost - Receive Sleep Updates
   *
   * Post records.
  **/
  receiveSleepUpdatesV2DataWebhookProviderSleepPost(
    req: operations.ReceiveSleepUpdatesV2DataWebhookProviderSleepPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveSleepUpdatesV2DataWebhookProviderSleepPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReceiveSleepUpdatesV2DataWebhookProviderSleepPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/data/webhook/{provider}/sleep", req.pathParams);

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
        const res: operations.ReceiveSleepUpdatesV2DataWebhookProviderSleepPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveSleepUpdatesV2DataWebhookProviderSleepPost = JSON.stringify(httpRes?.data);
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
   * receiveWithingsUpdatesV2DataWebhookWithingsPost - Receive Withings Updates
  **/
  receiveWithingsUpdatesV2DataWebhookWithingsPost(
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveWithingsUpdatesV2DataWebhookWithingsPostResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/withings";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReceiveWithingsUpdatesV2DataWebhookWithingsPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveWithingsUpdatesV2DataWebhookWithingsPost = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * receiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPost - Receive Workout Updates
   *
   * Receive Workout updates from providers.
  **/
  receiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPost(
    req: operations.ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/data/webhook/{provider}/workouts", req.pathParams);

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
        const res: operations.ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPost = JSON.stringify(httpRes?.data);
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
   * validateBodyUrlFitbitV2DataWebhookFitbitBodyGet - Validate Body Url Fitbit
   *
   * Validate fitbit workouts.
  **/
  validateBodyUrlFitbitV2DataWebhookFitbitBodyGet(
    req: operations.ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/fitbit/body";
    
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
        const res: operations.ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * validateSleepUrlFitbitV2DataWebhookFitbitSleepGet - Validate Sleep Url Fitbit
   *
   * Validate fitbit workouts.
  **/
  validateSleepUrlFitbitV2DataWebhookFitbitSleepGet(
    req: operations.ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/fitbit/sleep";
    
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
        const res: operations.ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * validateUrlV2DataWebhookStravaWorkoutsGet - Validate Url
   *
   * Validate strava workouts.
  **/
  validateUrlV2DataWebhookStravaWorkoutsGet(
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateUrlV2DataWebhookStravaWorkoutsGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/strava/workouts";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ValidateUrlV2DataWebhookStravaWorkoutsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseValidateUrlV2DataWebhookStravaWorkoutsGet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * validateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGet - Validate Workouts Url Fitbit
   *
   * Validate fitbit workouts.
  **/
  validateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGet(
    req: operations.ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/fitbit/workouts";
    
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
        const res: operations.ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * withingsSubscriptionCreatedV2DataWebhookWithingsHead - Withings Subscription Created
   *
   * Endpoint used by Withings to confirm subscription.
  **/
  withingsSubscriptionCreatedV2DataWebhookWithingsHead(
    config?: AxiosRequestConfig
  ): Promise<operations.WithingsSubscriptionCreatedV2DataWebhookWithingsHeadResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/data/webhook/withings";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "head",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WithingsSubscriptionCreatedV2DataWebhookWithingsHeadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseWithingsSubscriptionCreatedV2DataWebhookWithingsHead = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

}
