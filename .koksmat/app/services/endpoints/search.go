/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package 

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/model"
    . "github.com/365admin/magicbox-site/utils"
)

func AssetSearch(query string) (*Page[model.Asset], error) {
    log.Println("Calling Assetsearch")

    return applogic.Search[database.Asset, model.Asset]("name", query, applogic.MapAssetOutgoing)

}
