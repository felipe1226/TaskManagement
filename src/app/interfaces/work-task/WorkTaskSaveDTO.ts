export interface WorkTaskSaveDTO
{
    Id?: string
    UserId?: string
    CategoryId?: string
    Description?: string
    Observation?: string
    DeadLine?: string
    StatusId?: string
    StatusCode?: string
    StatusObservation?: string
    WaypointsDTO?: Array<WaypointSaveDTO>
}

export interface WaypointSaveDTO
{
    locationId: string
    locationName?: string
    address: string
    order: number
}