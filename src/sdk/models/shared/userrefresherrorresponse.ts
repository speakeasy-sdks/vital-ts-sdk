import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UserRefreshErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error: string;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_sources" })
  failedSources?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}