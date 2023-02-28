import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetOrdersV2TestkitOrdersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_ids" })
  orderIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient_name" })
  patientName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;
}

export class GetOrdersV2TestkitOrdersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrdersV2TestkitOrdersGetQueryParams;
}

export class GetOrdersV2TestkitOrdersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  ordersResponse?: shared.OrdersResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}