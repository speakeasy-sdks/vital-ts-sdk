import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingAtHomePhlebotomyOrder } from "./clientfacingathomephlebotomyorder";

export enum ClientFacingAtHomePhlebotomyOrderDetailsTypeEnum {
    AtHomePhlebotomy = "at_home_phlebotomy"
}

export class ClientFacingAtHomePhlebotomyOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ClientFacingAtHomePhlebotomyOrder;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ClientFacingAtHomePhlebotomyOrderDetailsTypeEnum;
}