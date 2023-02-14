import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";


export class ProfileInDb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=priority_id" })
  priorityId?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ClientFacingSource;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}