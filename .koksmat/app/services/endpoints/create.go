/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package 

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/model"

)

func AssetCreate(item model.Asset) (*model.Asset, error) {
    log.Println("Calling Assetcreate")

    return applogic.Create[database.Asset, model.Asset](item, applogic.MapAssetIncoming, applogic.MapAssetOutgoing)

}
