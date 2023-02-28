import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class TestkitOrders {
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
   * getOrderV2TestkitOrdersOrderIdGet - Get Order
   *
   * Get individual order
  **/
  getOrderV2TestkitOrdersOrderIdGet(
    req: operations.GetOrderV2TestkitOrdersOrderIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrderV2TestkitOrdersOrderIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrderV2TestkitOrdersOrderIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/testkit/orders/{order_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrderV2TestkitOrdersOrderIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.vitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder = plainToInstance(
                shared.VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder,
                httpRes?.data as shared.VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.httpValidationError = plainToInstance(
                shared.HTTPValidationError,
                httpRes?.data as shared.HTTPValidationError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOrdersV2TestkitOrdersGet - Get Orders
   *
   * Get testkit order for team
  **/
  getOrdersV2TestkitOrdersGet(
    req: operations.GetOrdersV2TestkitOrdersGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersV2TestkitOrdersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersV2TestkitOrdersGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/testkit/orders";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrdersV2TestkitOrdersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.ordersResponse = plainToInstance(
                shared.OrdersResponse,
                httpRes?.data as shared.OrdersResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.httpValidationError = plainToInstance(
                shared.HTTPValidationError,
                httpRes?.data as shared.HTTPValidationError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
