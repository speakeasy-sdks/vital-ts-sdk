import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";


export class ManualActivityCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_energy_burned", elemType: QuantitySample })
  activeEnergyBurned: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=basal_energy_burned", elemType: QuantitySample })
  basalEnergyBurned: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=distance_walking_running", elemType: QuantitySample })
  distanceWalkingRunning: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=floors_climbed", elemType: QuantitySample })
  floorsClimbed: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: QuantitySample })
  steps: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=vo2_max", elemType: QuantitySample })
  vo2Max: QuantitySample[];
}