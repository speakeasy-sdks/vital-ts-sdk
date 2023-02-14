import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StatusTEnum } from "./statustenum";
import { WebhookDispositionEnum } from "./webhookdispositionenum";


export class WebhookStatusChangeDataData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientReferenceId" })
  clientReferenceId: string;

  @SpeakeasyMetadata({ data: "json, name=consultId" })
  consultId: string;

  @SpeakeasyMetadata({ data: "json, name=disposition" })
  disposition?: WebhookDispositionEnum;

  @SpeakeasyMetadata({ data: "json, name=newStatus" })
  newStatus: StatusTEnum;

  @SpeakeasyMetadata({ data: "json, name=previousStatus" })
  previousStatus?: StatusTEnum;
}