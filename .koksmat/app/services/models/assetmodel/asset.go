/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package assetmodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalAsset(data []byte) (Asset, error) {
	var r Asset
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Asset) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Asset struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Url string `json:"url"`
    Slug string `json:"slug"`
    Majorversion int `json:"majorversion"`
    Minorversion int `json:"minorversion"`
    Iscurrentversion bool `json:"isCurrentVersion"`
    Content interface{} `json:"content"`

}

