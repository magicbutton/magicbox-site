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
	"github.com/365admin/magicbox-site/services/models/importdatamodel"
   
)


func MapImportDataOutgoing(db database.ImportData) importdatamodel.ImportData {
    return importdatamodel.ImportData{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
                User_id : db.User_id,
        Data : db.Data,

    }
}

func MapImportDataIncoming(in importdatamodel.ImportData) database.ImportData {
    return database.ImportData{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
                User_id : in.User_id,
        Data : in.Data,

    }
}
