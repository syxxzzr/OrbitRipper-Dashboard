declare type ProjectStatus = 'progressing' | 'finished'

declare type WorkerStatus = 'online' | 'offline'
declare type WorkerWorkingStatus = 'free' | 'busy'

declare type TaskStatus = 'running' | 'finished' | 'pending'
declare type TaskOutcomeStatus = 'success' | 'failed'

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
  outcomeStatue: TaskOutcomeStatus
  createDate: Date
  endDate: Date
}

declare interface WorkerInfo {
  name: string
  uuid: string
  statue: WorkerStatus
  workingStatue: WorkerWorkingStatus
}
