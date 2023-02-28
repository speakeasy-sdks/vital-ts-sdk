import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class LabResultsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "age" })
  age: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clia_#" })
  cliaNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_collected" })
  dateCollected?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_received" })
  dateReceived?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_reported" })
  dateReported: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dob" })
  dob: string;

  @SpeakeasyMetadata()
  @Expose({ name: "laboratory" })
  laboratory?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "patient" })
  patient: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "specimen_number" })
  specimenNumber: string;
}