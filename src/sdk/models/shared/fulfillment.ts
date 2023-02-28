import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Fulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "order_number" })
  orderNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order_uuid" })
  orderUuid: string;
}