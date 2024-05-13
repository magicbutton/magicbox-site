/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
//version: pølsevogn2
package database

import (
	"encoding/json"
	"time"

	"github.com/uptrace/bun"
)

type ImportData struct {
	bun.BaseModel `bun:"table:importdata,alias:importdata"`

	ID          int             `bun:"id,pk,autoincrement"`
	CreatedAt   time.Time       `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt   time.Time       `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt   time.Time       `bun:",soft_delete,nullzero"`
	Tenant      string          `bun:"tenant"`
	Name        string          `bun:"name"`
	Description string          `bun:"description"`
	User_id     int             `bun:"user_id"`
	Data        json.RawMessage `bun:"type:jsonb"`
}
