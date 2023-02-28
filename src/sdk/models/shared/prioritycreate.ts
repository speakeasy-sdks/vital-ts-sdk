import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PriorityCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data_type" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "priority" })
  priority: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source_id" })
  sourceId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: string;
}