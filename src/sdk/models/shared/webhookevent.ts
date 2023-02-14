import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";


export class WebhookEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventData" })
  eventData: any;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: WebhookEventTypeEnum;
}