/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package publishlog

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/publishlogmodel"
    . "github.com/365admin/magicbox-site/utils"
)

func PublishlogSearch(query string) (*Page[publishlogmodel.Publishlog], error) {
    log.Println("Calling Publishlogsearch")

    return applogic.Search[database.Publishlog, publishlogmodel.Publishlog]("name", query, applogic.MapPublishlogOutgoing)

}
