            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package auditlog
            
            import (
                "log"
            
                "github.com/365admin/magicbox-site/applogic"
                "github.com/365admin/magicbox-site/database"
                "github.com/365admin/magicbox-site/services/models/auditlogmodel"
            
            )
            
            func AuditlogDelete(id int) ( error) {
                log.Println("Calling Auditlogdelete")
            
                return applogic.Delete[database.Auditlog, auditlogmodel.Auditlog](id)
            
            }
