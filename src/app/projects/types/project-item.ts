export type ProjectItem = {
	readonly isHighlighted: boolean;
	readonly title: string;
	readonly description: string;
	readonly link: string;
	readonly imageFileName: string | null;
	readonly metadata: ReadonlyArray<string>;
};
