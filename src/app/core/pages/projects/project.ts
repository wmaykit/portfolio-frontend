import { Link } from './link';

export interface Project {
  name: string
  text: string
  languages: string[]
  sources: Link[]
  articleLink?: string
  demoLink?: Link
}