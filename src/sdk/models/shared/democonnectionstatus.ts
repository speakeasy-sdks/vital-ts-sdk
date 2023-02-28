import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DemoConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: boolean;
}