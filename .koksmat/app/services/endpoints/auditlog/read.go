/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package auditlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/auditlogmodel"

)

func AuditlogRead(id int) (*auditlogmodel.Auditlog, error) {
    log.Println("Calling Auditlogread")

    return applogic.Read[database.Auditlog, auditlogmodel.Auditlog](id, applogic.MapAuditlogOutgoing)

}
