import { defineStore } from 'pinia'
import { Project } from '@/types/project'

export const useProject = defineStore('project', {
  state: (): Project  => ({
    id: '',
    name: '',
    logo_url: '',
    landingpage_url: '',
    blocks: [],
    unit_types: [],
    siteplan_places: []
  }),
  actions: {
    setProject(project: Project) {
      this.id = project.id
      this.name = project.name
      this.logo_url = project.logo_url
      this.landingpage_url = project.landingpage_url
      this.blocks = project.blocks
      this.unit_types = project.unit_types,
      this.siteplan_places = project.siteplan_places
    },
  },
  getters: {
    getId(state) {
      return state.id 
    },
    getBlocks(state) {
      return state.blocks
    },
    getUnitTypeById(state) {
      return (id: string) => state.unit_types.find((unit) => unit.unit_type_id === id)
    }
  },
})
