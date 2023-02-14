import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder } from "./vitalcoreschemasdbschemaslabtestorderv2clientfacingorder";


export class GetOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orders", elemType: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder })
  orders: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}