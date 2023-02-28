import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder } from "./vitalcoreschemasdbschemaslabtestorderv2clientfacingorder";
import { Expose, Type } from "class-transformer";


export class GetOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder })
  @Expose({ name: "orders" })
  @Type(() => VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder)
  orders: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder[];

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