import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workout_id" })
  workoutId: string;
}

export class GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetPathParams;
}

export class GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingStream?: shared.ClientFacingStream;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}