module.exports = {
	formats: 'local woff woff2',
	display: "swap",
	custom: {
		"Proxima Nova": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/Proxima-nova/light/proxima_nova_light.woff",
						}
					},
					500: {
						url: {
							woff: "../fonts/Proxima-nova/regular/proxima_nova_regular.woff",
						}
					},
					600: {
						url: {
							woff: "../fonts/Proxima-nova/semibold/proximanova-semibold.woff2",
						}
					},
					700: {
						url: {
							woff: "../fonts/Proxima-nova/bold/proxima_nova_bold.woff",
						}
					}
				}
			}
		},
	}
}