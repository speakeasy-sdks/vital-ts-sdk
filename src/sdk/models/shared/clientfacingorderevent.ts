import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderV2StatusEnum } from "./orderv2statusenum";


export class ClientFacingOrderEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: OrderV2StatusEnum;
}