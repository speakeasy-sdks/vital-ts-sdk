import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeseriesMetricPoint } from "./timeseriesmetricpoint";


export class MetricsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number_of_connected_sources" })
  numberOfConnectedSources?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_connected_sources_by_week", elemType: TimeseriesMetricPoint })
  numberOfConnectedSourcesByWeek?: TimeseriesMetricPoint[];

  @SpeakeasyMetadata({ data: "json, name=number_of_errored_connected_sources" })
  numberOfErroredConnectedSources?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_ordered_tests" })
  numberOfOrderedTests?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_users" })
  numberOfUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: any;
}