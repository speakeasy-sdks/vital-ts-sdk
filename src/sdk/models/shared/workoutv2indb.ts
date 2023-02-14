import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { ClientFacingSport } from "./clientfacingsport";


export class WorkoutV2InDB extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=priority_id" })
  priorityId?: number;

  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingSource;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: number;

  @SpeakeasyMetadata({ data: "json, name=sport" })
  sport: ClientFacingSport;

  @SpeakeasyMetadata({ data: "json, name=sport_id" })
  sportId: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}