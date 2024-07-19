export class MongoDBError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'enderbot [MongoDB Error]';
	}
}
