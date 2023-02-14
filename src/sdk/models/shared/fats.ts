import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Fats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monounsaturated" })
  monounsaturated?: number;

  @SpeakeasyMetadata({ data: "json, name=omega3" })
  omega3?: number;

  @SpeakeasyMetadata({ data: "json, name=omega6" })
  omega6?: number;

  @SpeakeasyMetadata({ data: "json, name=polyunsaturated" })
  polyunsaturated?: number;

  @SpeakeasyMetadata({ data: "json, name=saturated" })
  saturated?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}