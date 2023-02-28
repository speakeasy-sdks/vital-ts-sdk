import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auth_type" })
  authType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "backfill_num_days" })
  backfillNumDays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "group" })
  group?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "oauth_url" })
  oauthUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;
}