import type { Database } from 'generated_types';
import type { PointFeature, AnyProps } from 'supercluster';
export type Marker = Database['public']['Tables']['creative_dimension']['Row'];

export type Point = PointFeature<AnyProps>;
