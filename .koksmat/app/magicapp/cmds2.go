package magicapp

import (
	"os"

	"github.com/spf13/cobra"

	"github.com/365admin/magicbox-site/cmds"
	"github.com/365admin/magicbox-site/utils"
)

func RegisterCmds() {
	RootCmd.PersistentFlags().StringVarP(&utils.Output, "output", "o", "", "Output format (json, yaml, xml, etc.)")

	downloadCmd := &cobra.Command{
		Use:   "download",
		Short: "Download",
		Long:  `Make a SharePoint site available on the internet`,
	}
	DownloadSitePagesPostCmd := &cobra.Command{
		Use:   "site-pages  siteUrl",
		Short: "Get Site Pages",
		Long:  ``,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.DownloadSitePagesPost(ctx, args)
		},
	}
	downloadCmd.AddCommand(DownloadSitePagesPostCmd)
	DownloadDownloadPagesPostCmd := &cobra.Command{
		Use:   "download-pages ",
		Short: "Get Site Pages",
		Long:  ``,
		Args:  cobra.MinimumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()
			body, err := os.ReadFile(args[0])
			if err != nil {
				panic(err)
			}

			cmds.DownloadDownloadPagesPost(ctx, body, args)
		},
	}
	downloadCmd.AddCommand(DownloadDownloadPagesPostCmd)

	RootCmd.AddCommand(downloadCmd)
	processCmd := &cobra.Command{
		Use:   "process",
		Short: "Process",
		Long:  `Make a SharePoint site available on the internet`,
	}
	ProcessRotatePasswordPostCmd := &cobra.Command{
		Use:   "rotate-password  maxKeys length months",
		Short: "Rotate Passwords",
		Long:  ``,
		Args:  cobra.MinimumNArgs(3),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()
			body, err := os.ReadFile(args[0])
			if err != nil {
				panic(err)
			}

			cmds.ProcessRotatePasswordPost(ctx, body, args)
		},
	}
	processCmd.AddCommand(ProcessRotatePasswordPostCmd)
	ProcessAnalysePagesPostCmd := &cobra.Command{
		Use:   "analyse-pages ",
		Short: "Analyse Pages",
		Long:  ``,
		Args:  cobra.MinimumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()
			body, err := os.ReadFile(args[0])
			if err != nil {
				panic(err)
			}

			cmds.ProcessAnalysePagesPost(ctx, body, args)
		},
	}
	processCmd.AddCommand(ProcessAnalysePagesPostCmd)
	ProcessDownloadMediasPostCmd := &cobra.Command{
		Use:   "download-medias  siteUrl",
		Short: "Download medias",
		Long:  ``,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()
			body, err := os.ReadFile(args[0])
			if err != nil {
				panic(err)
			}

			cmds.ProcessDownloadMediasPost(ctx, body, args)
		},
	}
	processCmd.AddCommand(ProcessDownloadMediasPostCmd)
	ProcessUpdateWebPostCmd := &cobra.Command{
		Use:   "update-web  siteName",
		Short: "Update Web",
		Long:  ``,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.ProcessUpdateWebPost(ctx, args)
		},
	}
	processCmd.AddCommand(ProcessUpdateWebPostCmd)

	RootCmd.AddCommand(processCmd)
	provisionCmd := &cobra.Command{
		Use:   "provision",
		Short: "Provision",
		Long:  `Make a SharePoint site available on the internet`,
	}
	ProvisionWebdeployproductionPostCmd := &cobra.Command{
		Use:   "webdeployproduction ",
		Short: "Web deploy to production",
		Long:  ``,
		Args:  cobra.MinimumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.ProvisionWebdeployproductionPost(ctx, args)
		},
	}
	provisionCmd.AddCommand(ProvisionWebdeployproductionPostCmd)

	RootCmd.AddCommand(provisionCmd)
	healthCmd := &cobra.Command{
		Use:   "health",
		Short: "Health",
		Long:  `Make a SharePoint site available on the internet`,
	}
	HealthPingPostCmd := &cobra.Command{
		Use:   "ping  pong",
		Short: "Ping",
		Long:  `Simple ping endpoint`,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.HealthPingPost(ctx, args)
		},
	}
	healthCmd.AddCommand(HealthPingPostCmd)
	HealthCoreversionPostCmd := &cobra.Command{
		Use:   "coreversion ",
		Short: "Core Version",
		Long:  ``,
		Args:  cobra.MinimumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.HealthCoreversionPost(ctx, args)
		},
	}
	healthCmd.AddCommand(HealthCoreversionPostCmd)

	RootCmd.AddCommand(healthCmd)
}
