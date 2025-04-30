import { usePagePath } from '@/shared/utils/usePagePath.ts';

export enum PagePath {
  Home = '',
  Overview = '/overview',
  Inspect = '/inspect',
  InspectLp = '/inspect/lp/:id',
  Reports = '/reports',
}

// Used for dynamic routing when wanting to exclude the dynamic elements
export const useBasePath = (): PagePath => {
  const path = usePagePath();

  return path;
};
