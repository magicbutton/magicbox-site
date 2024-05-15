/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3
package app

import (
	"context"
	"fmt"

	"github.com/365admin/magicbox-site/cmds"
)

// noma2
type PublishResponse struct {
	Result string `json:"result"`
}

func Publish(args []string) (*PublishResponse, error) {
	if len(args) < 1 {
		return nil, fmt.Errorf("Expected 1 arguments")
	}
	ctx := context.Background()
	_, err := cmds.SyncSitePagesPost(ctx, args)

	if err != nil {
		return nil, err
	}

	return &PublishResponse{
		Result: "done",
	}, nil

}
