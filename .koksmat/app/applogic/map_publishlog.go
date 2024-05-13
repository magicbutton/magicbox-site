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
	"github.com/365admin/magicbox-site/services/models/publishlogmodel"
   
)


func MapPublishlogOutgoing(db database.Publishlog) publishlogmodel.Publishlog {
    return publishlogmodel.Publishlog{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Status : db.Status,
                Publishedby_id : db.Publishedby_id,

    }
}

func MapPublishlogIncoming(in publishlogmodel.Publishlog) database.Publishlog {
    return database.Publishlog{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Status : in.Status,
                Publishedby_id : in.Publishedby_id,

    }
}
