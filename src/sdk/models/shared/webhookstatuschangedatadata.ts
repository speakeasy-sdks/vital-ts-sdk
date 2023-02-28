import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StatusTEnum } from "./statustenum";
import { WebhookDispositionEnum } from "./webhookdispositionenum";
import { Expose } from "class-transformer";


export class WebhookStatusChangeDataData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientReferenceId" })
  clientReferenceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "consultId" })
  consultId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "disposition" })
  disposition?: WebhookDispositionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "newStatus" })
  newStatus: StatusTEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "previousStatus" })
  previousStatus?: StatusTEnum;
}