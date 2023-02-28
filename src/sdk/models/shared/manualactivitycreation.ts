import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";
import { Expose, Type } from "class-transformer";


export class ManualActivityCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "active_energy_burned" })
  @Type(() => QuantitySample)
  activeEnergyBurned: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "basal_energy_burned" })
  @Type(() => QuantitySample)
  basalEnergyBurned: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "distance_walking_running" })
  @Type(() => QuantitySample)
  distanceWalkingRunning: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "floors_climbed" })
  @Type(() => QuantitySample)
  floorsClimbed: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "steps" })
  @Type(() => QuantitySample)
  steps: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "vo2_max" })
  @Type(() => QuantitySample)
  vo2Max: QuantitySample[];
}