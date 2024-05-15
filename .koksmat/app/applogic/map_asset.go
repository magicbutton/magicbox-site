/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/365admin/magicbox-site/database"
	"github.com/365admin/magicbox-site/services/models/assetmodel"
   
)


func MapAssetOutgoing(db database.Asset) assetmodel.Asset {
    return assetmodel.Asset{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Url : db.Url,
        Slug : db.Slug,
        Content : db.Content,

    }
}

func MapAssetIncoming(in assetmodel.Asset) database.Asset {
    return database.Asset{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Url : in.Url,
        Slug : in.Slug,
        Content : in.Content,

    }
}
