export const relativeUrlPath: RegExp =
	/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/;

export const nextDynamicPath: RegExp = /(\[)([A-Za-z0-9 ]+)(\])/;