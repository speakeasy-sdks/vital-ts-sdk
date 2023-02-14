import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Providers {
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
   * getListOfProvidersV2ProvidersGet - Get List Of Providers
   *
   * Get Provider list
  **/
  getListOfProvidersV2ProvidersGet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfProvidersV2ProvidersGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/providers";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfProvidersV2ProvidersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientFacingSourceDetaileds = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
