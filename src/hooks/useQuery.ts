export function useQuery<T = string>(search: string): ObjectAnyString<T> {
	const objectQuery: ObjectAnyString<any> = {};

	const match = search.match(/[_|\w|\d|-]+=[_|\w|\d|-]+/gm);

	if (!match) return objectQuery;

	for (const phrase of match) {
		const [key, value] = phrase.split('=');
		if (!objectQuery[key]) {
			objectQuery[key] = value;
			continue;
		}

		if (Array.isArray(objectQuery[key])) {
			objectQuery[key]!.push(value);
			continue;
		}

		objectQuery[key] = [objectQuery[key], value];
	}

	return objectQuery;
}

interface ObjectAnyString<StringOrArray> {
	[x: string]: StringOrArray | undefined;
}
