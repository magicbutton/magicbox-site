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
                    "github.com/365admin/magicbox-site/services/models/publishlogmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestPublishlogcreate(t *testing.T) {
                                // transformer v1
            object := publishlogmodel.Publishlog{}
         
            result,err := publishlog.PublishlogCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
