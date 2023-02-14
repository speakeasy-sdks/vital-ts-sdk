import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Fulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order_number" })
  orderNumber: string;

  @SpeakeasyMetadata({ data: "json, name=order_uuid" })
  orderUuid: string;
}