import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeseriesMetricPoint } from "./timeseriesmetricpoint";
import { Expose, Type } from "class-transformer";


export class MetricsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number_of_connected_sources" })
  numberOfConnectedSources?: number;

  @SpeakeasyMetadata({ elemType: TimeseriesMetricPoint })
  @Expose({ name: "number_of_connected_sources_by_week" })
  @Type(() => TimeseriesMetricPoint)
  numberOfConnectedSourcesByWeek?: TimeseriesMetricPoint[];

  @SpeakeasyMetadata()
  @Expose({ name: "number_of_errored_connected_sources" })
  numberOfErroredConnectedSources?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "number_of_ordered_tests" })
  numberOfOrderedTests?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "number_of_users" })
  numberOfUsers?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: any;
}