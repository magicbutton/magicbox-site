/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package publishlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/publishlogmodel"

)

func PublishlogRead(id int) (*publishlogmodel.Publishlog, error) {
    log.Println("Calling Publishlogread")

    return applogic.Read[database.Publishlog, publishlogmodel.Publishlog](id, applogic.MapPublishlogOutgoing)

}
