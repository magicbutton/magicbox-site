/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package auditlogmodel
import (
	"encoding/json"
	"time"
    // "github.com/365admin/magicbox-site/database/databasetypes"
)

func UnmarshalAuditlog(data []byte) (Auditlog, error) {
	var r Auditlog
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Auditlog) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Auditlog struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Action string `json:"action"`
    Performedby_id int `json:"performedby_id"`
    Failed bool `json:"failed"`
    Request interface{} `json:"request"`
    Response interface{} `json:"response"`

}

