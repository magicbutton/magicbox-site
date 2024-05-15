/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package importdatamodel
import (
	"encoding/json"
	"time"
    // "github.com/365admin/magicbox-site/database/databasetypes"
)

func UnmarshalImportData(data []byte) (ImportData, error) {
	var r ImportData
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *ImportData) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type ImportData struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    User_id int `json:"user_id"`
    Data interface{} `json:"data"`

}

