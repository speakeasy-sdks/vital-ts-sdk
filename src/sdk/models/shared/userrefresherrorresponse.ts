import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UserRefreshErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=failed_sources" })
  failedSources?: string[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}