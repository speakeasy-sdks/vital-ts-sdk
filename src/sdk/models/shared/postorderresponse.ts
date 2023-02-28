import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder } from "./vitalcoreschemasdbschemaslabtestorderv2clientfacingorder";
import { Expose, Type } from "class-transformer";


export class PostOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  @Type(() => VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder)
  order: VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;
}