import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingWalkInTestOrder } from "./clientfacingwalkintestorder";
import { Expose, Type } from "class-transformer";

export enum ClientFacingWalkInOrderDetailsTypeEnum {
    WalkInTest = "walk_in_test"
}

export class ClientFacingWalkInOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ClientFacingWalkInTestOrder)
  data?: ClientFacingWalkInTestOrder;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ClientFacingWalkInOrderDetailsTypeEnum;
}