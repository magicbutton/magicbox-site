/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package publishlogmodel
import (
	"encoding/json"
	"time"
    // "github.com/365admin/magicbox-site/database/databasetypes"
)

func UnmarshalPublishlog(data []byte) (Publishlog, error) {
	var r Publishlog
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Publishlog) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Publishlog struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Status string `json:"status"`
    Publishedby_id int `json:"publishedby_id"`

}

