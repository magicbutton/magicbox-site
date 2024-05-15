/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
package magicapp

import (
	"github.com/365admin/magicbox-site/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
	root.AddEndpoint("app", micro.HandlerFunc(services.HandleAppRequests))
	root.AddEndpoint("user", micro.HandlerFunc(services.HandleUserRequests))
	root.AddEndpoint("publishlog", micro.HandlerFunc(services.HandlePublishlogRequests))
}
