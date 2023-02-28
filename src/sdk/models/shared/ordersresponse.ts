import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder } from "./vitalcoreschemasdbschemastestkitsorderclientfacingorder";
import { Expose, Type } from "class-transformer";


export class OrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder })
  @Expose({ name: "orders" })
  @Type(() => VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder)
  orders: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder[];

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page: number;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}