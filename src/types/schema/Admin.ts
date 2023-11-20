export type AdminSchema = {
    portals: AdminSchema[]
}

export type AdminSchemaPortal = {
    title: string,
    slug:  string,
    icon?: string,
    core?: boolean
    permissions: AdminSchemaPortalPermissions
}

export type AdminSchemaPortalPermissions = {
    editable: boolean,
    deletable: boolean,
    arrangable: boolean,
    hidden? : string[]
}
