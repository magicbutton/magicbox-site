/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package auditlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/auditlogmodel"
    . "github.com/365admin/magicbox-site/utils"
)

func AuditlogSearch(query string) (*Page[auditlogmodel.Auditlog], error) {
    log.Println("Calling Auditlogsearch")

    return applogic.Search[database.Auditlog, auditlogmodel.Auditlog]("name", query, applogic.MapAuditlogOutgoing)

}
