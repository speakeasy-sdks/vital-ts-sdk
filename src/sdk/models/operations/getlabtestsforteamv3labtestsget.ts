import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetLabTestsForTeamV3LabTestsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingLabTest })
  clientFacingLabTests?: shared.ClientFacingLabTest[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}