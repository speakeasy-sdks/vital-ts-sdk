import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class WebhookConsultAssignedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientReferenceId" })
  clientReferenceId: string;

  @SpeakeasyMetadata({ data: "json, name=clinicianId" })
  clinicianId: string;

  @SpeakeasyMetadata({ data: "json, name=consultId" })
  consultId: string;
}