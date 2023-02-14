import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UserRefreshSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed_sources" })
  failedSources: string[];

  @SpeakeasyMetadata({ data: "json, name=refreshed_sources" })
  refreshedSources: string[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}