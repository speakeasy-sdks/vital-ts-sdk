import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class SourceLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auth_type" })
  authType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "form_components" })
  formComponents?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

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