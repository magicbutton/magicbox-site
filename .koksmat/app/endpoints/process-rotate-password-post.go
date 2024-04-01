// -------------------------------------------------------------------
// Generated by 365admin-publish/api/20 makeschema.ps1
// -------------------------------------------------------------------
/*
---
title: Rotate Passwords
---
*/
package endpoints

import (
	"context"
	"encoding/json"
	"os"
	"path"

	"github.com/swaggest/usecase"

	"github.com/365admin/magicbox-site/execution"
	"github.com/365admin/magicbox-site/schemas"
	"github.com/365admin/magicbox-site/utils"
)

func ProcessRotatePasswordPost() usecase.Interactor {
	type Request struct {
		Maxkeys string               `query:"maxKeys" binding:"required"`
		Length  string               `query:"length" binding:"required"`
		Months  string               `query:"months" binding:"required"`
		Body    schemas.Oldpasswords `json:"body" binding:"required"`
	}
	u := usecase.NewInteractor(func(ctx context.Context, input Request, output *schemas.Newpasswords) error {
		body, inputErr := json.Marshal(input.Body)
		if inputErr != nil {
			return inputErr
		}

		inputErr = os.WriteFile(path.Join(utils.WorkDir("magicbox-site"), "oldpasswords.json"), body, 0644)
		if inputErr != nil {
			return inputErr
		}

		_, err := execution.ExecutePowerShell("john", "*", "magicbox-site", "30-process", "10-rotate-passwords.ps1", "", "-maxKeys", input.Maxkeys, "-length", input.Length, "-months", input.Months)
		if err != nil {
			return err
		}

		resultingFile := path.Join(utils.WorkDir("magicbox-site"), "newpasswords.json")
		data, err := os.ReadFile(resultingFile)
		if err != nil {
			return err
		}
		resultObject := schemas.Newpasswords{}
		err = json.Unmarshal(data, &resultObject)
		*output = resultObject
		return err

	})
	u.SetTitle("Rotate Passwords")
	// u.SetExpectedErrors(status.InvalidArgument)
	u.SetTags("Process")
	return u
}