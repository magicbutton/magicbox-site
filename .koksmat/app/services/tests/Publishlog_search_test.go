    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/365admin/magicbox-site/services/endpoints/publishlog"
        
        "github.com/stretchr/testify/assert"
    )
    
    func TestPublishlogsearch(t *testing.T) {
                    
            result,err := publishlog.PublishlogSearch(".")
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
