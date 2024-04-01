package schemas

type Page struct {
	_Odata_context string `json:"@odata.context"`
	_Odata_etag    string `json:"@odata.etag"`
	CanvasLayout   struct {
		HorizontalSections []struct {
			Columns []struct {
				Id       string `json:"id"`
				Webparts []struct {
					_Odata_type string `json:"@odata.type"`
					Id          string `json:"id"`
					InnerHtml   string `json:"innerHtml"`
				} `json:"webparts"`
				Webparts_odata_context string `json:"webparts@odata.context"`
				Width                  int    `json:"width"`
			} `json:"columns"`
			Columns_odata_context string `json:"columns@odata.context"`
			Emphasis              string `json:"emphasis"`
			Id                    string `json:"id"`
			Layout                string `json:"layout"`
		} `json:"horizontalSections"`
		HorizontalSections_odata_context string `json:"horizontalSections@odata.context"`
	} `json:"canvasLayout"`
	CanvasLayout_odata_context string `json:"canvasLayout@odata.context"`
	ContentType                struct {
		Id   string `json:"id"`
		Name string `json:"name"`
	} `json:"contentType"`
	CreatedBy struct {
		User struct {
			DisplayName string `json:"displayName"`
			Email       string `json:"email"`
		} `json:"user"`
	} `json:"createdBy"`
	CreatedDateTime string `json:"createdDateTime"`
	Description     string `json:"description"`
	ETag            string `json:"eTag"`
	Id              string `json:"id"`
	LastModifiedBy  struct {
		User struct {
			DisplayName string `json:"displayName"`
			Email       string `json:"email"`
		} `json:"user"`
	} `json:"lastModifiedBy"`
	LastModifiedDateTime string `json:"lastModifiedDateTime"`
	Name                 string `json:"name"`
	PageLayout           string `json:"pageLayout"`
	ParentReference      struct {
		SiteId string `json:"siteId"`
	} `json:"parentReference"`
	PromotionKind   string `json:"promotionKind"`
	PublishingState struct {
		Level     string `json:"level"`
		VersionId string `json:"versionId"`
	} `json:"publishingState"`
	Reactions            struct{} `json:"reactions"`
	ShowComments         bool     `json:"showComments"`
	ShowRecommendedPages bool     `json:"showRecommendedPages"`
	ThumbnailWebUrl      string   `json:"thumbnailWebUrl"`
	Title                string   `json:"title"`
	TitleArea            struct {
		AltText                 string   `json:"altText"`
		AuthorByline            []string `json:"authorByline"`
		AuthorByline_odata_type string   `json:"authorByline@odata.type"`
		Authors                 []struct {
			Email string `json:"email"`
			Id    string `json:"id"`
			Name  string `json:"name"`
			Role  string `json:"role"`
			Upn   string `json:"upn"`
		} `json:"authors"`
		Authors_odata_type     string `json:"authors@odata.type"`
		EnableGradientEffect   bool   `json:"enableGradientEffect"`
		ImageSourceType        int    `json:"imageSourceType"`
		ImageWebUrl            string `json:"imageWebUrl"`
		ImgHeight              int    `json:"imgHeight"`
		ImgWidth               int    `json:"imgWidth"`
		Layout                 string `json:"layout"`
		ListId                 string `json:"listId"`
		ServerProcessedContent struct {
			CustomMetadata []struct {
				Key   string `json:"key"`
				Value struct {
					Height   int    `json:"height"`
					ListId   string `json:"listId"`
					SiteId   string `json:"siteId"`
					UniqueId string `json:"uniqueId"`
					WebId    string `json:"webId"`
					Width    int    `json:"width"`
				} `json:"value"`
			} `json:"customMetadata"`
			HtmlStrings  []interface{} `json:"htmlStrings"`
			ImageSources []struct {
				Key   string `json:"key"`
				Value string `json:"value"`
			} `json:"imageSources"`
			Links                []interface{} `json:"links"`
			SearchablePlainTexts []interface{} `json:"searchablePlainTexts"`
		} `json:"serverProcessedContent"`
		ShowAuthor              bool    `json:"showAuthor"`
		ShowPublishedDate       bool    `json:"showPublishedDate"`
		ShowTextBlockAboveTitle bool    `json:"showTextBlockAboveTitle"`
		SiteId                  string  `json:"siteId"`
		TextAboveTitle          string  `json:"textAboveTitle"`
		TextAlignment           string  `json:"textAlignment"`
		Title                   string  `json:"title"`
		TranslateX              float64 `json:"translateX"`
		TranslateY              float64 `json:"translateY"`
		UniqueId                string  `json:"uniqueId"`
		WebId                   string  `json:"webId"`
	} `json:"titleArea"`
	WebUrl string `json:"webUrl"`
}
