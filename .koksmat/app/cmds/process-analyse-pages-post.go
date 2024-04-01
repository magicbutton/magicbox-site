// -------------------------------------------------------------------
// Generated by 365admin-publish
// -------------------------------------------------------------------
/*
---
title: Analyse Pages
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

func ProcessAnalysePagesPost(ctx context.Context, body []byte, args []string) (*schemas.AnalysedPages, error) {
	inputErr := os.WriteFile(path.Join(utils.WorkDir("magicbox-site"), "downloaded-pages.json"), body, 0644)
	if inputErr != nil {
		return nil, inputErr
	}

	result, pwsherr := execution.ExecutePowerShell("john", "*", "magicbox-site", "30-process", "30-analyse-pages.ps1", "")
	if pwsherr != nil {
		return nil, pwsherr
	}

	resultingFile := path.Join(utils.WorkDir("magicbox-site"), "analysed-pages.json")
	data, err := os.ReadFile(resultingFile)
	if err != nil {
		return nil, err
	}
	resultObject := schemas.AnalysedPages{}
	err = json.Unmarshal(data, &resultObject)
	if utils.Output == "json" {
		fmt.Println(string(data))
	}
	utils.PrintSkip2FirstAnd2LastLines(string(result))

	return nil, nil

}
