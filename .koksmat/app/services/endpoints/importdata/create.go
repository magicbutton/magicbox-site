/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package importdata

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/importdatamodel"

)

func ImportDataCreate(item importdatamodel.ImportData) (*importdatamodel.ImportData, error) {
    log.Println("Calling ImportDatacreate")

    return applogic.Create[database.ImportData, importdatamodel.ImportData](item, applogic.MapImportDataIncoming, applogic.MapImportDataOutgoing)

}
