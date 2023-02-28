import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MealInDBBaseClientFacingSource } from "./mealindbbaseclientfacingsource";
import { Expose, Type } from "class-transformer";


export class ClientFacingMealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MealInDBBaseClientFacingSource })
  @Expose({ name: "meals" })
  @Type(() => MealInDBBaseClientFacingSource)
  meals: MealInDBBaseClientFacingSource[];
}