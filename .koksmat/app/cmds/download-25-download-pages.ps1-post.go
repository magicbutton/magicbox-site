// -------------------------------------------------------------------
// Generated by 365admin-publish
// -------------------------------------------------------------------
/*
---
title: Get Site Pages
---
*/
package cmds

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path"

	"github.com/365admin/magicbox-site/execution"
	"github.com/365admin/magicbox-site/schemas"
	"github.com/365admin/magicbox-site/utils"
)

func Download25DownloadPagesps1Post(ctx context.Context, body []byte, args []string) (*schemas.DownloadedPages, error) {
	inputErr := os.WriteFile(path.Join(utils.WorkDir("magicbox-site"), "pages.json"), body, 0644)
	if inputErr != nil {
		return nil, inputErr
	}

	result, pwsherr := execution.ExecutePowerShell("john", "*", "magicbox-site", "20-download", "25-download-pages.ps1", "")
	if pwsherr != nil {
		return nil, pwsherr
	}

	resultingFile := path.Join(utils.WorkDir("magicbox-site"), "downloaded-pages.json")
	data, err := os.ReadFile(resultingFile)
	if err != nil {
		return nil, err
	}
	resultObject := schemas.DownloadedPages{}
	err = json.Unmarshal(data, &resultObject)
	if utils.Output == "json" {
		fmt.Println(string(data))
	}
	utils.PrintSkip2FirstAnd2LastLines(string(result))

	return nil, nil

}