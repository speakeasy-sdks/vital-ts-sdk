import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PriorityCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_type" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: number;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;
}