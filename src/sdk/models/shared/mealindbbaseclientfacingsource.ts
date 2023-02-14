import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Energy } from "./energy";
import { Macros } from "./macros";
import { MealData } from "./mealdata";
import { Micros } from "./micros";


export class MealInDBBaseClientFacingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: MealData })
  data?: Record<string, MealData>;

  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: Energy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=macros" })
  macros?: Macros;

  @SpeakeasyMetadata({ data: "json, name=micros" })
  micros?: Micros;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=priority_id" })
  priorityId: number;

  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingSource;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}