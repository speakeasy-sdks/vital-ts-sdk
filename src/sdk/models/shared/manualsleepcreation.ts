import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";
import { Expose, Transform, Type } from "class-transformer";


export class ManualSleepCreationManualSleepStageCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "awake_sleep_samples" })
  @Type(() => QuantitySample)
  awakeSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "deep_sleep_samples" })
  @Type(() => QuantitySample)
  deepSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "in_bed_sleep_samples" })
  @Type(() => QuantitySample)
  inBedSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "light_sleep_samples" })
  @Type(() => QuantitySample)
  lightSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "rem_sleep_samples" })
  @Type(() => QuantitySample)
  remSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "unknown_sleep_samples" })
  @Type(() => QuantitySample)
  unknownSleepSamples?: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "unspecified_sleep_samples" })
  @Type(() => QuantitySample)
  unspecifiedSleepSamples?: QuantitySample[];
}

export class ManualSleepCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "heart_rate" })
  @Type(() => QuantitySample)
  heartRate: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "heart_rate_variability" })
  @Type(() => QuantitySample)
  heartRateVariability: QuantitySample[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "oxygen_saturation" })
  @Type(() => QuantitySample)
  oxygenSaturation: QuantitySample[];

  @SpeakeasyMetadata()
  @Expose({ name: "product_type" })
  productType?: string;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "respiratory_rate" })
  @Type(() => QuantitySample)
  respiratoryRate: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "resting_heart_rate" })
  @Type(() => QuantitySample)
  restingHeartRate: QuantitySample[];

  @SpeakeasyMetadata()
  @Expose({ name: "sleep_stages" })
  @Type(() => ManualSleepCreationManualSleepStageCreation)
  sleepStages?: ManualSleepCreationManualSleepStageCreation;

  @SpeakeasyMetadata()
  @Expose({ name: "source_bundle" })
  sourceBundle?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "wrist_temperature" })
  @Type(() => QuantitySample)
  wristTemperature?: QuantitySample[];
}