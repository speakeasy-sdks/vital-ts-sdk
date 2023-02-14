import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder } from "./vitalcoreschemasdbschemastestkitsorderclientfacingorder";


export class OrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orders", elemType: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder })
  orders: VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}