import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingWalkInTestOrder } from "./clientfacingwalkintestorder";

export enum ClientFacingWalkInOrderDetailsTypeEnum {
    WalkInTest = "walk_in_test"
}

export class ClientFacingWalkInOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ClientFacingWalkInTestOrder;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ClientFacingWalkInOrderDetailsTypeEnum;
}