declare type ProjectStatus = 'progressing' | 'finished'
declare type WorkerStatus = 'free' | 'busy' | 'offline'
declare type TaskStatus = 'running' | 'success' | 'failed' | 'pending'

declare interface ProjectInfo {
  name: string
  uuid: string
  createDate: Date
  status: ProjectStatus
}

declare interface TaskInfo {
  name: string
  uuid: string
  status: TaskStatus
  createDate: Date
  endDate: Date
}

declare interface WorkerInfo {
  name: string
  uuid: string
  statue: WorkerStatus
}
