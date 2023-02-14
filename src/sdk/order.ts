import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Order {
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
   * cancelOrderV3OrderOrderIdCancelPost - Cancel Order
   *
   * POST cancel order
  **/
  cancelOrderV3OrderOrderIdCancelPost(
    req: operations.CancelOrderV3OrderOrderIdCancelPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelOrderV3OrderOrderIdCancelPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelOrderV3OrderOrderIdCancelPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelOrderV3OrderOrderIdCancelPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postOrderResponse = httpRes?.data;
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
   * createOrderV3OrderPost - Create Order
   *
   * POST create new order
  **/
  createOrderV3OrderPost(
    req: operations.CreateOrderV3OrderPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrderV3OrderPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrderV3OrderPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/order";

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
        const res: operations.CreateOrderV3OrderPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postOrderResponse = httpRes?.data;
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
   * dispatchOrderStatusV3OrderDispatchStatusChecksPost - Dispatch Order Status
  **/
  dispatchOrderStatusV3OrderDispatchStatusChecksPost(
    config?: AxiosRequestConfig
  ): Promise<operations.DispatchOrderStatusV3OrderDispatchStatusChecksPostResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/order/dispatch/status/checks";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DispatchOrderStatusV3OrderDispatchStatusChecksPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseDispatchOrderStatusV3OrderDispatchStatusChecksPost = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLabTestResultMetadataV3OrderOrderIdResultMetadataGet - Get Lab Test Result Metadata
   *
   * Return metadata related to order results, such as lab metadata,
   * provider and sample dates.
  **/
  getLabTestResultMetadataV3OrderOrderIdResultMetadataGet(
    req: operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}/result/metadata", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.labResultsMetadata = httpRes?.data;
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
   * getLabTestResultRawV3OrderOrderIdResultGet - Get Lab Test Result Raw
   *
   * Return both metadata and raw json test data
  **/
  getLabTestResultRawV3OrderOrderIdResultGet(
    req: operations.GetLabTestResultRawV3OrderOrderIdResultGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLabTestResultRawV3OrderOrderIdResultGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLabTestResultRawV3OrderOrderIdResultGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}/result", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLabTestResultRawV3OrderOrderIdResultGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.labResultsRaw = httpRes?.data;
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
   * getLabTestResultV3OrderOrderIdResultPdfGet - Get Lab Test Result
   *
   * This endpoint returns the lab results for the order.
  **/
  getLabTestResultV3OrderOrderIdResultPdfGet(
    req: operations.GetLabTestResultV3OrderOrderIdResultPdfGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLabTestResultV3OrderOrderIdResultPdfGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLabTestResultV3OrderOrderIdResultPdfGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}/result/pdf", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLabTestResultV3OrderOrderIdResultPdfGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getLabTestResultV3OrderOrderIdResultPdfGet200ApplicationJSONAny = httpRes?.data;
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
   * getOrderV3OrderOrderIdGet - Get Order
   *
   * GET individual order by ID.
  **/
  getOrderV3OrderOrderIdGet(
    req: operations.GetOrderV3OrderOrderIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrderV3OrderOrderIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrderV3OrderOrderIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrderV3OrderOrderIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.vitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder = httpRes?.data;
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
   * processTestkitOrderShippedV3OrderTestkitWebhookShipbobPost - Process Testkit Order Shipped
   *
   * POST Process shipment for order shipped
  **/
  processTestkitOrderShippedV3OrderTestkitWebhookShipbobPost(
    req: operations.ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/order/testkit/webhook/shipbob";

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
        const res: operations.ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPost = JSON.stringify(httpRes?.data);
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
   * processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost - Process Testkit Order
   *
   * POST Create shipment for order
  **/
  processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost(
    req: operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/testkit/process/{team_id}/{order_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost = JSON.stringify(httpRes?.data);
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
   * processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost - Process Testkit Ship Hero Order Shipped
  **/
  processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost(
    req: operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/order/testkit/webhook/shiphero/shipment-update";

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
        const res: operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost = JSON.stringify(httpRes?.data);
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
   * syncTestkitOrderStatusV3OrderTestkitStatusPost - Sync Testkit Order Status
   *
   * This function receives requests from cloud_scheduler
   * and checks the order status of the order if the order status
   * in terms of the inbound delivery and outbound delivery status has
   * changed. If changed then the order status is updated and a webhook
   * is sent to the respective team.
  **/
  syncTestkitOrderStatusV3OrderTestkitStatusPost(
    config?: AxiosRequestConfig
  ): Promise<operations.SyncTestkitOrderStatusV3OrderTestkitStatusPostResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/order/testkit/status";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncTestkitOrderStatusV3OrderTestkitStatusPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseSyncTestkitOrderStatusV3OrderTestkitStatusPost = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testOrderProcessV3OrderOrderIdTestPost - Test Order Process
   *
   * Get available test kits.
  **/
  testOrderProcessV3OrderOrderIdTestPost(
    req: operations.TestOrderProcessV3OrderOrderIdTestPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestOrderProcessV3OrderOrderIdTestPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestOrderProcessV3OrderOrderIdTestPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/order/{order_id}/test", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestOrderProcessV3OrderOrderIdTestPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.testOrderProcessV3OrderOrderIdTestPost200ApplicationJSONAny = httpRes?.data;
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
