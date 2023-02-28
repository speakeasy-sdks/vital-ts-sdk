import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// ConnectedSourceClientFacingProvider
/** 
 * Source the data has come from.
**/
export class ConnectedSourceClientFacingProvider extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;
}

export class ConnectedSourceClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_on" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ConnectedSourceClientFacingProvider)
  source: ConnectedSourceClientFacingProvider;
}