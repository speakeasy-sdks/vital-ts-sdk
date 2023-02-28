import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkoutV2InDB } from "./workoutv2indb";
import { Expose, Type } from "class-transformer";


export class RawWorkout extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WorkoutV2InDB })
  @Expose({ name: "workouts" })
  @Type(() => WorkoutV2InDB)
  workouts: WorkoutV2InDB[];
}