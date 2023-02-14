import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UserSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}