            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package 
            
            import (
                "log"
            
                "github.com/365admin/magicbox-site/applogic"
                "github.com/365admin/magicbox-site/database"
                "github.com/365admin/magicbox-site/services/models/model"
            
            )
            
            func AssetDelete(id int) ( error) {
                log.Println("Calling Assetdelete")
            
                return applogic.Delete[database.Asset, model.Asset](id)
            
            }
