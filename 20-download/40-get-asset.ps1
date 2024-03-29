<#---
title: Get Asset
connection: graph,sharepoint
---
#>

param (
    $assetPath = "/sites/intra365/Bookmarks/i365.header.jpeg"
)

if ((Split-Path -Leaf (Split-Path  -Parent -Path $PSScriptRoot)) -eq "sessions") {
    $path = join-path $PSScriptRoot ".." ".."
}
else {
    $path = join-path $PSScriptRoot ".." ".koksmat/"

}

$koksmatDir = Resolve-Path $path

$publicDir = join-path $koksmatDir "web" "public"
$assetPath = join-path  $publicDir  $assetPath 



# get directory from path

$assetFolder = Split-Path -Parent -Path $assetPath
if (-not (Test-Path $assetFolder)) {
    New-Item -Path $assetFolder -ItemType Directory | Out-Null
}