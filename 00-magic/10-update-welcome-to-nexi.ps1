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

koksmat trace log "Connecting to site $siteName"
magicbox-site download site-pages "https://christianiabpos.sharepoint.com/sites/$siteName"

koksmat trace log "Downloading site pages"
magicbox-site download download-pages (Join-Path $workdir "pages.json")

koksmat trace log "Analysing site pages"
magicbox-site process analyse-pages (Join-Path $workdir "downloaded-pages.json")

koksmat trace log "Downloading media files"
magicbox-site process download-medias (Join-Path $workdir "analysed-pages.json") "https://christianiabpos.sharepoint.com/sites/$siteName"

koksmat trace log "Updating web site"
magicbox-site process update-web $siteName