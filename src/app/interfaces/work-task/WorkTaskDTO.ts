export interface WorkTaskDTO {
    id: string
    categoryName: string
    description: string
    observation: string
    deadLine: string
    statusName: string
    canComplete: string
    waypoints: Array<Waypoint>
    statuses: Array<Status>
  }
  
  export interface Waypoint {
    id: string
    location: string
    address: string
    order: string
  }
  
  export interface Status {
    id: string
    name: string
    observation: any
    createdAt: string
  }
