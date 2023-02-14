import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Timeseries {
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
   * getBloodPressureDataV2TimeseriesUserIdBloodPressureGet - Get Blood Pressure Data
   *
   * Get blood pressure data for user.
  **/
  getBloodPressureDataV2TimeseriesUserIdBloodPressureGet(
    req: operations.GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/blood_pressure", req.pathParams);
    
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
        const res: operations.GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingBloodPressureTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdResourceGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdResourceGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/{resource}", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/blood_oxygen", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingBloodOxygenTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCaffeineGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCaffeineGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/caffeine", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCaffeineTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCholesterolGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCholesterolGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/cholesterol", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCholesterolTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/cholesterol/hdl", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCholesterolTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/cholesterol/ldl", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCholesterolTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/cholesterol/total", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCholesterolTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/cholesterol/triglycerides", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingCholesterolTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdGlucoseGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdGlucoseGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/glucose", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingGlucoseTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdHeartrateGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdHeartrateGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/heartrate", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingHeartRateTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/heartrate_variability", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingHRVTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdHrvGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdHrvGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/hrv", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingHRVTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdHypnogramGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdHypnogramGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/hypnogram", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingHypnogramTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdIgeGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdIgeGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/ige", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingIgeTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdIggGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdIggGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/igg", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingIggTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/mindfulness_minutes", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingMindfulnessMinutesTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/respiratory_rate", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingRespiratoryRateTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdStepsGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdStepsGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/steps", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingStepsTimeseries = httpRes?.data;
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
   * getTimeseriesResourceDataV2TimeseriesUserIdWaterGet - Get Timeseries Resource Data
   *
   * Get timeseries data for user
  **/
  getTimeseriesResourceDataV2TimeseriesUserIdWaterGet(
    req: operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/water", req.pathParams);
    
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
        const res: operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingWaterTimeseries = httpRes?.data;
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
   * getUserSleepStreamV2TimeseriesSleepSleepIdStreamGet - Get User Sleep Stream
   *
   * Get Sleep stream for a user_id
  **/
  getUserSleepStreamV2TimeseriesSleepSleepIdStreamGet(
    req: operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/sleep/{sleep_id}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingSleepStream = httpRes?.data;
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
   * getUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGet - Get User Workouts
  **/
  getUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGet(
    req: operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/workouts/{workout_id}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingStream = httpRes?.data;
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
   * postUserBloodPressureV2TimeseriesUserIdBloodPressurePost - Post User Blood Pressure
  **/
  postUserBloodPressureV2TimeseriesUserIdBloodPressurePost(
    req: operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/blood_pressure", req.pathParams);

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
        const res: operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserBloodPressureV2TimeseriesUserIdBloodPressurePost = JSON.stringify(httpRes?.data);
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
   * postUserVitalsV2TimeseriesUserIdResourcePost - Post User Vitals
  **/
  postUserVitalsV2TimeseriesUserIdResourcePost(
    req: operations.PostUserVitalsV2TimeseriesUserIdResourcePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserVitalsV2TimeseriesUserIdResourcePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserVitalsV2TimeseriesUserIdResourcePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/timeseries/{user_id}/{resource}", req.pathParams);

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
        const res: operations.PostUserVitalsV2TimeseriesUserIdResourcePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responsePostUserVitalsV2TimeseriesUserIdResourcePost = JSON.stringify(httpRes?.data);
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
