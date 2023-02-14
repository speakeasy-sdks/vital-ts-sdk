import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DemoConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}