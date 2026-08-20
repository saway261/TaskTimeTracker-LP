/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
