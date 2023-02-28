import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MarkerClientFacing } from "./markerclientfacing";
import { Expose, Type } from "class-transformer";


export class TestkitClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata({ elemType: MarkerClientFacing })
  @Expose({ name: "markers" })
  @Type(() => MarkerClientFacing)
  markers?: MarkerClientFacing[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  price?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "turnaround_time_lower" })
  turnaroundTimeLower?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "turnaround_time_upper" })
  turnaroundTimeUpper?: number;
}