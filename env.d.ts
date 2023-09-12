declare global {
	namespace NodeJS {
		interface ProcessEnv {
			token: string;
			MongoDB: string;
		}
	}
}


export { };