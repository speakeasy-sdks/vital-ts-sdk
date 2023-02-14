import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValidationError } from "./validationerror";


export class HTTPValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail", elemType: ValidationError })
  detail?: ValidationError[];
}