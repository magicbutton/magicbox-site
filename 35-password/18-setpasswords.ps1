<#---
title: Set Passwords
input: passwords.json
---
#>

#

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir

$podName = (kubectl get pods -o name -n magicbox-christianiabpos | grep pod/nexi-welcome).Replace("pod/", "")

Write-Host kubectl cp  (join-path $workdir "passwords.json") "$($podName.Trim()):/data/passwords.json"
   
kubectl cp  (join-path $workdir "passwords.json") "$($podName.Trim()):/data/passwords.json"
   