import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingTestkitOrder } from "./clientfacingtestkitorder";

export enum ClientFacingTestKitOrderDetailsTypeEnum {
    Testkit = "testkit"
}

export class ClientFacingTestKitOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ClientFacingTestkitOrder;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ClientFacingTestKitOrderDetailsTypeEnum;
}