import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderV2StatusEnum } from "./orderv2statusenum";
import { Expose, Transform } from "class-transformer";


export class ClientFacingOrderEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: OrderV2StatusEnum;
}