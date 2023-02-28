import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LabResultsMetadata } from "./labresultsmetadata";
import { Expose, Type } from "class-transformer";


export class LabResultsRaw extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => LabResultsMetadata)
  metadata: LabResultsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  results: Record<string, any>;
}