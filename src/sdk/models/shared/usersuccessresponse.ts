import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UserSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: boolean;
}