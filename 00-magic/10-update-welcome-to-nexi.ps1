<#---
title: Update Welcome to Nexi
tag : update-welcome-to-nexi
---#>

param (
    $siteName = "welcome-to-nexi"
)

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}

$workdir = $env:WORKDIR

magicbox-site download site-pages "https://christianiabpos.sharepoint.com/sites/$siteName"
magicbox-site download download-pages (Join-Path $workdir "pages.json")
magicbox-site process analyse-pages (Join-Path $workdir "downloaded-pages.json")
magicbox-site process download-medias (Join-Path $workdir "analysed-pages.json") "https://christianiabpos.sharepoint.com/sites/$siteName"
magicbox-site process update-web $siteName