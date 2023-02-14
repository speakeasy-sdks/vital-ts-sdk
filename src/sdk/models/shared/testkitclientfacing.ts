import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MarkerClientFacing } from "./markerclientfacing";


export class TestkitClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=markers", elemType: MarkerClientFacing })
  markers?: MarkerClientFacing[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=turnaround_time_lower" })
  turnaroundTimeLower?: number;

  @SpeakeasyMetadata({ data: "json, name=turnaround_time_upper" })
  turnaroundTimeUpper?: number;
}