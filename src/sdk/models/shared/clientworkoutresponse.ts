import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingWorkout } from "./clientfacingworkout";
import { Expose, Type } from "class-transformer";


export class ClientWorkoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientFacingWorkout })
  @Expose({ name: "workouts" })
  @Type(() => ClientFacingWorkout)
  workouts: ClientFacingWorkout[];
}