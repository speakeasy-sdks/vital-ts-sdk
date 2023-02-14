import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class LabResultsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age" })
  age: string;

  @SpeakeasyMetadata({ data: "json, name=clia_#" })
  cliaNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=date_collected" })
  dateCollected?: string;

  @SpeakeasyMetadata({ data: "json, name=date_received" })
  dateReceived?: string;

  @SpeakeasyMetadata({ data: "json, name=date_reported" })
  dateReported: string;

  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=laboratory" })
  laboratory?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=specimen_number" })
  specimenNumber: string;
}