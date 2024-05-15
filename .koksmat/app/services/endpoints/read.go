/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package 

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/model"

)

func AssetRead(id int) (*model.Asset, error) {
    log.Println("Calling Assetread")

    return applogic.Read[database.Asset, model.Asset](id, applogic.MapAssetOutgoing)

}
