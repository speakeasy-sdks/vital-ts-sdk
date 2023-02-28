import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { Expose } from "class-transformer";


export class WebhookEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "eventData" })
  eventData: any;

  @SpeakeasyMetadata()
  @Expose({ name: "eventTime" })
  eventTime: string;

  @SpeakeasyMetadata()
  @Expose({ name: "eventType" })
  eventType: WebhookEventTypeEnum;
}