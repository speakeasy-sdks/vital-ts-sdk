import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
import { Expose, Type } from "class-transformer";


export class HTTPValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ValidationError })
  @Expose({ name: "detail" })
  @Type(() => ValidationError)
  detail?: ValidationError[];
}