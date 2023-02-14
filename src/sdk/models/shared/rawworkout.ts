import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkoutV2InDB } from "./workoutv2indb";


export class RawWorkout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workouts", elemType: WorkoutV2InDB })
  workouts: WorkoutV2InDB[];
}