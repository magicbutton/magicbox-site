/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package user

import (
    "log"

    "github.com/365admin/magicbox-site/applogic"
    "github.com/365admin/magicbox-site/database"
    "github.com/365admin/magicbox-site/services/models/usermodel"

)

func UserRead(id int) (*usermodel.User, error) {
    log.Println("Calling Userread")

    return applogic.Read[database.User, usermodel.User](id, applogic.MapUserOutgoing)

}
