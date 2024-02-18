export interface IncludePrefix {
  fullPath: string;
  path: string;
  logo:string;
  extension: string;
  isVideo?: boolean;
}

export interface IncludePrefixResponsiveSizes extends IncludePrefix {
  fullPath2x: string;
  fullPath3x: string;
}

interface Settings {
  prefix?: string;
  isVideo?: boolean;
}

// export const BASE_URL = (): string => process.env.BASE_URL ?? '';
export const BASE_URL = (): string => process.env.BASE_PREFIX ?? '';
export const FILE_PREFIX = `${BASE_URL()}noprecache/`;
export const PREFIX = `${BASE_URL()}images/`;

export const includePrefix = (path: string, extension: string, settings?: Settings): IncludePrefix => ({
  fullPath: `${settings?.prefix ?? PREFIX}${path}.${extension}`,
  path: `${settings?.prefix ?? PREFIX}${path}`,
  extension,
  logo: `${settings?.prefix ?? PREFIX}${path}.${extension}`,
});

export const includeResponsive = (path: string, extension: string, settings?: Settings): IncludePrefixResponsiveSizes => {
  const prefixes = includePrefix(path, extension, { prefix: settings?.prefix ?? PREFIX });
  return ({
    ...prefixes,
    fullPath2x: `${prefixes.path}@2x.${prefixes.extension}`,
    fullPath3x: `${prefixes.path}@3x.${prefixes.extension}`,
  })
}