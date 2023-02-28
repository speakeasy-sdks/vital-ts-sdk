import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class WebhookConsultAssignedData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientReferenceId" })
  clientReferenceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clinicianId" })
  clinicianId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "consultId" })
  consultId: string;
}