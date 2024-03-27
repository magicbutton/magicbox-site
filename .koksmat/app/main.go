package main

import (
	"runtime/debug"
	"strings"

	"github.com/365admin/magicbox-site/magicapp"
	"github.com/365admin/magicbox-site/utils"
)

func main() {
	info, _ := debug.ReadBuildInfo()

	// split info.Main.Path by / and get the last element
	s1 := strings.Split(info.Main.Path, "/")
	name := s1[len(s1)-1]
	description := `---
title: magicbox-site
description: Describe the main purpose of this kitchen
---

# magicbox-site
`
	magicapp.Setup(".env")
	magicapp.RegisterServeCmd("magicbox-site", description, "0.0.1", 8080)
	magicapp.RegisterCmds()
	magicapp.RootCmd.PersistentFlags().BoolVarP(&utils.Verbose, "verbose", "v", false, "verbose output")

	magicapp.Execute(name, "magicbox-site", "")
}
