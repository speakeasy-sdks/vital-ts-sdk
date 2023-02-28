import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetTeamsMetricsV2UserMetricsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metricsResult?: shared.MetricsResult;

  @SpeakeasyMetadata()
  statusCode: number;
}