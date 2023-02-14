import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";


export class ManualSleepCreationManualSleepStageCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awake_sleep_samples", elemType: QuantitySample })
  awakeSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=deep_sleep_samples", elemType: QuantitySample })
  deepSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=in_bed_sleep_samples", elemType: QuantitySample })
  inBedSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=light_sleep_samples", elemType: QuantitySample })
  lightSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=rem_sleep_samples", elemType: QuantitySample })
  remSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=unknown_sleep_samples", elemType: QuantitySample })
  unknownSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=unspecified_sleep_samples", elemType: QuantitySample })
  unspecifiedSleepSamples?: QuantitySample[];
}

export class ManualSleepCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=heart_rate", elemType: QuantitySample })
  heartRate: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=heart_rate_variability", elemType: QuantitySample })
  heartRateVariability: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=oxygen_saturation", elemType: QuantitySample })
  oxygenSaturation: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=respiratory_rate", elemType: QuantitySample })
  respiratoryRate: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=resting_heart_rate", elemType: QuantitySample })
  restingHeartRate: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=skin_temperature", elemType: QuantitySample })
  skinTemperature?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=sleep_stages" })
  sleepStages?: ManualSleepCreationManualSleepStageCreation;

  @SpeakeasyMetadata({ data: "json, name=source_bundle" })
  sourceBundle?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;
}