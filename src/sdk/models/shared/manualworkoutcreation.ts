import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";


export class ManualWorkoutCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calories" })
  calories: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=heart_rate", elemType: QuantitySample })
  heartRate?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=respiratory_rate", elemType: QuantitySample })
  respiratoryRate?: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=source_bundle" })
  sourceBundle?: string;

  @SpeakeasyMetadata({ data: "json, name=sport" })
  sport: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;
}