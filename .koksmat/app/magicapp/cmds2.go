package magicapp

import (
	"os"

	"github.com/spf13/cobra"

	"github.com/365admin/magicbox-site/cmds"
	"github.com/365admin/magicbox-site/utils"
)

func RegisterCmds() {
	RootCmd.PersistentFlags().StringVarP(&utils.Output, "output", "o", "", "Output format (json, yaml, xml, etc.)")

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
	syncCmd := &cobra.Command{
		Use:   "sync",
		Short: "Syncronise SharePoint with web",
		Long:  `Make a SharePoint site available on the internet`,
	}
	SyncSitePagesPostCmd := &cobra.Command{
		Use:   "site-pages  siteUrl",
		Short: "Get Site Pages",
		Long:  ``,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.SyncSitePagesPost(ctx, args)
		},
	}
	syncCmd.AddCommand(SyncSitePagesPostCmd)
	SyncDownloadPagesPostCmd := &cobra.Command{
		Use:   "download-pages ",
		Short: "Download Pages",
		Long:  ``,
		Args:  cobra.MinimumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()
			body, err := os.ReadFile(args[0])
			if err != nil {
				panic(err)
			}

			cmds.SyncDownloadPagesPost(ctx, body, args)
		},
	}
	syncCmd.AddCommand(SyncDownloadPagesPostCmd)
	SyncAnalysePagesPostCmd := &cobra.Command{
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

			cmds.SyncAnalysePagesPost(ctx, body, args)
		},
	}
	syncCmd.AddCommand(SyncAnalysePagesPostCmd)
	SyncDownloadMediasPostCmd := &cobra.Command{
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

			cmds.SyncDownloadMediasPost(ctx, body, args)
		},
	}
	syncCmd.AddCommand(SyncDownloadMediasPostCmd)
	SyncUpdateWebPostCmd := &cobra.Command{
		Use:   "update-web  siteName",
		Short: "Update Web",
		Long:  ``,
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			ctx := cmd.Context()

			cmds.SyncUpdateWebPost(ctx, args)
		},
	}
	syncCmd.AddCommand(SyncUpdateWebPostCmd)

	RootCmd.AddCommand(syncCmd)
	passwordsCmd := &cobra.Command{
		Use:   "passwords",
		Short: "Password management",
		Long:  `Make a SharePoint site available on the internet`,
	}
	PasswordsRotatePasswordPostCmd := &cobra.Command{
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

			cmds.PasswordsRotatePasswordPost(ctx, body, args)
		},
	}
	passwordsCmd.AddCommand(PasswordsRotatePasswordPostCmd)

	RootCmd.AddCommand(passwordsCmd)
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
}
