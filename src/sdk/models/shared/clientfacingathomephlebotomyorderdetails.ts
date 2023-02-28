import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingAtHomePhlebotomyOrder } from "./clientfacingathomephlebotomyorder";
import { Expose, Type } from "class-transformer";

export enum ClientFacingAtHomePhlebotomyOrderDetailsTypeEnum {
    AtHomePhlebotomy = "at_home_phlebotomy"
}

export class ClientFacingAtHomePhlebotomyOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ClientFacingAtHomePhlebotomyOrder)
  data?: ClientFacingAtHomePhlebotomyOrder;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ClientFacingAtHomePhlebotomyOrderDetailsTypeEnum;
}