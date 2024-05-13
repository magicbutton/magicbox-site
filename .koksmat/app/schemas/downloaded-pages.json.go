package schemas

type DownloadedPages struct {
	Name  string `json:"name"`
	Pages []struct {
		Id   string `json:"id"`
		Name string `json:"name"`
		Path string `json:"path"`
	} `json:"pages"`
	SiteId string `json:"siteId"`
}

