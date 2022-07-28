import {UnitType} from './unit_type'

export interface Project {
  id: string,
  created_at?: string
  name: string,
  logo_url: string,
  landingpage_url: string,
  blocks: any[],
  unit_types: UnitType[],
  siteplan_places: SiteplanPlace[]
}