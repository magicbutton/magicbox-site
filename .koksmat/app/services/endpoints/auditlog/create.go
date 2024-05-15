/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package auditlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/auditlogmodel"

)

func AuditlogCreate(item auditlogmodel.Auditlog) (*auditlogmodel.Auditlog, error) {
    log.Println("Calling Auditlogcreate")

    return applogic.Create[database.Auditlog, auditlogmodel.Auditlog](item, applogic.MapAuditlogIncoming, applogic.MapAuditlogOutgoing)

}
