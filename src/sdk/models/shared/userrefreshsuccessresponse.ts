import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UserRefreshSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "failed_sources" })
  failedSources: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "refreshed_sources" })
  refreshedSources: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}