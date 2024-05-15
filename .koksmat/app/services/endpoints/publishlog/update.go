/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package publishlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/publishlogmodel"

)

func PublishlogUpdate(item publishlogmodel.Publishlog) (*publishlogmodel.Publishlog, error) {
    log.Println("Calling Publishlogupdate")

    return applogic.Update[database.Publishlog, publishlogmodel.Publishlog](item.ID,item, applogic.MapPublishlogIncoming, applogic.MapPublishlogOutgoing)

}
