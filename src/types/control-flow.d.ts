import type { ZodObject, ZodTypeAny } from 'zod'

declare type VideoFormat = 'a' | 'b'

declare interface Filter {
  name: string
  in: VideoFormat[]
  params: ZodObject<ZodTypeAny>
  out: VideoFormat
  description?: string
}

declare interface FilterPackage {
  name: string
  require: string[] | string
  tagColor: string
  filterList: Filter[]
  isCore?: boolean
  initCode?: string[]
}
