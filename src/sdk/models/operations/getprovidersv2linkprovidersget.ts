import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetProvidersV2LinkProvidersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SourceLink })
  sourceLinks?: shared.SourceLink[];

  @SpeakeasyMetadata()
  statusCode: number;
}