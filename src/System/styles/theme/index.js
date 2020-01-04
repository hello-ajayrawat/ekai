import colors from '../../colors';
export default {
	typography: {
		fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
		pxToRem: size => `${size / 16}rem`
	},
	palette: {
		primary: {
			main: colors['color-primary-500'],
			dark: colors['color-primary-800'],
			light: colors['color-primary-100']
		},
		secondary: {
			main: colors['color-secondary-500'],
			dark: colors['color-secondary-800'],
			light: colors['color-secondary-100']
		},
		success: {
			main: colors['color-success-500'],
			dark: colors['color-success-800'],
			light: colors['color-success-100']
		},
		info: {
			main: colors['color-info-500'],
			dark: colors['color-info-800'],
			light: colors['color-info-100']
		},
		warning: {
			main: colors['color-warning-500'],
			dark: colors['color-warning-800'],
			light: colors['color-warning-100']
		},
		danger: {
			main: colors['color-danger-500'],
			dark: colors['color-danger-800'],
			light: colors['color-danger-100']
		},
		text: {
			primary: colors['color-secondary-700'],
			disabled: colors['colors-secondary-700']
		}
	}
};