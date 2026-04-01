type QueryValue<T extends string = string> = T | T[];

export function useQuery<T extends string = string>(
	search: string
): Record<string, QueryValue<T> | undefined> {
	const objectQuery: Record<string, QueryValue<T> | undefined> = {};

	const match = search.match(/[_|\w|\d|-]+=[_|\w|\d|-]+/gm);

	if (!match) return objectQuery;

	for (const phrase of match) {
		const [key, value] = phrase.split('=');
		if (!objectQuery[key]) {
			objectQuery[key] = value as T;
			continue;
		}

		if (Array.isArray(objectQuery[key])) {
			objectQuery[key]!.push(value as T);
			continue;
		}

		objectQuery[key] = [objectQuery[key], value as T];
	}

	return objectQuery;
}
