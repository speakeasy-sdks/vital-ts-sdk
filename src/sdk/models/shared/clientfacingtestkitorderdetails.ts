import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingTestkitOrder } from "./clientfacingtestkitorder";
import { Expose, Type } from "class-transformer";

export enum ClientFacingTestKitOrderDetailsTypeEnum {
    Testkit = "testkit"
}

export class ClientFacingTestKitOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ClientFacingTestkitOrder)
  data?: ClientFacingTestkitOrder;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ClientFacingTestKitOrderDetailsTypeEnum;
}