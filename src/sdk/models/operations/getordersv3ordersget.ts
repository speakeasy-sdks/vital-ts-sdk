import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Transform, Type } from "class-transformer";


export class GetOrdersV3OrdersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_ids" })
  orderIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient_name" })
  patientName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}

export class GetOrdersV3OrdersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrdersV3OrdersGetQueryParams;
}

export class GetOrdersV3OrdersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrdersResponse?: shared.GetOrdersResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}