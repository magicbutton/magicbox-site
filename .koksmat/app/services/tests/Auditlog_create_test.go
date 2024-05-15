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
        "github.com/365admin/magicbox-site/services/endpoints/auditlog"
                    "github.com/365admin/magicbox-site/services/models/auditlogmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestAuditlogcreate(t *testing.T) {
                                // transformer v1
            object := auditlogmodel.Auditlog{}
         
            result,err := auditlog.AuditlogCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
