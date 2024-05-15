/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
// macd.1
package services

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/365admin/magicbox-site/services/endpoints/app"
	"github.com/365admin/magicbox-site/services/endpoints/auditlog"
	"github.com/365admin/magicbox-site/services/models/auditlogmodel"
	. "github.com/365admin/magicbox-site/utils"
	"github.com/nats-io/nats.go/micro"
)

func ProcessAppRequest[T interface{}](req micro.Request, endpoint string, process func([]string) (*T, error)) {

	var payload ServiceRequest
	_ = json.Unmarshal([]byte(req.Data()), &payload)
	args := payload.Args[1:]
	result, err := process(args)

	auditlog.AuditlogCreate(auditlogmodel.Auditlog{
		Tenant:         "",
		Name:           endpoint,
		Action:         payload.Args[0],
		Request:        args,
		Response:       result,
		Performedby_id: 1,
		Failed:         err != nil,
	})

	if err != nil {
		log.Println("Error", err)
		ServiceResponseError(req, fmt.Sprintf("%s", err))

		return
	}

	ServiceResponse(req, result)

}
func HandleAppRequests(req micro.Request) {

	rawRequest := string(req.Data())
	if rawRequest == "ping" {
		req.Respond([]byte("pong"))
		return

	}

	var payload ServiceRequest
	_ = json.Unmarshal([]byte(req.Data()), &payload)
	if len(payload.Args) < 1 {
		ServiceResponseError(req, "missing command")
		return

	}

	// this acts aa a kind of middleware for the app service
	// it will route the request to the correct endpoint
	// based on the first argument in the payload

	switch payload.Args[0] {

	// macd.2
	case "dashboard":
		ProcessAppRequest(req, payload.Args[0], app.GlobalDashboard)
	case "select":
		ProcessAppRequest(req, payload.Args[0], app.Select)
	case "publish":
		ProcessAppRequest(req, payload.Args[0], app.Publish)
	default:
		ServiceResponseError(req, "Unknown command")
	}
}
