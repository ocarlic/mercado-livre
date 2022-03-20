export const formatValueMoney = (value: number) => {
	return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
};

export const removeAcentsWords = (value: string) => {
	return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const formatBreadcrumbs = (value: string[]) => {
	const validationStringsPath = value.filter((path) => path);
	const checkSpacesInString = validationStringsPath
		.map((routePath) => routePath.startsWith('20'))
		.filter((path) => path.valueOf);
	let getBreadcrumbsFormated = validationStringsPath.join(' > ');

	if (checkSpacesInString.length) {
		const removeSpacesInString = checkSpacesInString.map((_, index) =>
			validationStringsPath[index].split('20').filter((path) => path)
		);
		const formatedArrayBreadcrumbs = removeSpacesInString.map((items) => items[0]);

		getBreadcrumbsFormated = formatedArrayBreadcrumbs.join(' > ');
	}

	return getBreadcrumbsFormated;
};
