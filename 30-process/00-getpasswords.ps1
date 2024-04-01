<#---
title: Get Passwords
output: oldpasswords.json
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

$podName = (kubectl get pods -o name | grep pod/nexi-welcome).Replace("pod/", "")


kubectl cp "$($podName.Trim()):/data/passwords.json"  $workdir/oldpasswords.json 
   