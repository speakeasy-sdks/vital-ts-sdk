import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LabResultsMetadata } from "./labresultsmetadata";


export class LabResultsRaw extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: LabResultsMetadata;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results: Record<string, any>;
}