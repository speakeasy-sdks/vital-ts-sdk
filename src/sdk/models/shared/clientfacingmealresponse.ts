import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MealInDBBaseClientFacingSource } from "./mealindbbaseclientfacingsource";


export class ClientFacingMealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meals", elemType: MealInDBBaseClientFacingSource })
  meals: MealInDBBaseClientFacingSource[];
}