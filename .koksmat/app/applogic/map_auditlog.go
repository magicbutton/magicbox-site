/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
//GenerateMapModel v1.1
package applogic

import (
	//"encoding/json"
	//"time"
	"github.com/365admin/magicbox-site/database"
	"github.com/365admin/magicbox-site/services/models/auditlogmodel"
)

func MapAuditlogOutgoing(db database.Auditlog) auditlogmodel.Auditlog {
	return auditlogmodel.Auditlog{
		ID:             db.ID,
		CreatedAt:      db.CreatedAt,
		UpdatedAt:      db.UpdatedAt,
		Tenant:         db.Tenant,
		Name:           db.Name,
		Request:        db.Request,
		Response:       db.Response,
		Description:    db.Description,
		Action:         db.Action,
		Performedby_id: db.Performedby_id,
	}
}

func MapAuditlogIncoming(in auditlogmodel.Auditlog) database.Auditlog {
	return database.Auditlog{
		ID:             in.ID,
		CreatedAt:      in.CreatedAt,
		UpdatedAt:      in.UpdatedAt,
		Tenant:         in.Tenant,
		Name:           in.Name,
		Description:    in.Description,
		Request:        in.Request,
		Response:       in.Response,
		Action:         in.Action,
		Performedby_id: in.Performedby_id,
	}
}
