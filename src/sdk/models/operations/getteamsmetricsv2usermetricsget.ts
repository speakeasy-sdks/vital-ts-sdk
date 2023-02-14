import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTeamsMetricsV2UserMetricsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metricsResult?: shared.MetricsResult;

  @SpeakeasyMetadata()
  statusCode: number;
}