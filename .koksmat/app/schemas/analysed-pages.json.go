package schemas

type AnalysedPages []struct {
	Href   string `json:"href"`
	Key    string `json:"key"`
	Path   string `json:"path"`
	Source string `json:"source"`
}

