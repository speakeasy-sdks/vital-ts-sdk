import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingWorkout } from "./clientfacingworkout";


export class ClientWorkoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workouts", elemType: ClientFacingWorkout })
  workouts: ClientFacingWorkout[];
}