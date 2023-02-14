import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder } from "./vitalcoreschemasdbschemaslabtestorderv2clientfacingorder";


export class PostOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}