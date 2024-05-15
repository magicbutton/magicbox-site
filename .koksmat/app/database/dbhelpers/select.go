package dbhelpers

// noma2
import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/365admin/magicbox-site/utils"
)

type SelectResponse struct {
	Result json.RawMessage `bun:"result"`
}

func Select(sql string) (*SelectResponse, error) {

	jsonsql := fmt.Sprintf(`
	SELECT json_agg(json_data) AS result
	FROM (
		%s
	) AS json_data;
		
	`, sql)
	ctx := context.Background()

	rows, err := utils.Db.QueryContext(ctx, jsonsql)
	if err != nil {
		return nil, err
	}
	result := []SelectResponse{}
	err = utils.Db.ScanRows(ctx, rows, &result)
	if len(result) != 1 {
		return nil, fmt.Errorf("Unknown result")
	}

	return &result[0], nil
}
