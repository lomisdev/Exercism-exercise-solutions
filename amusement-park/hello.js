function gtcVersion(visitor) {
	let version;

	if (visitor.gtc !== undefined) {
		version = visitor.gtc.version;
	}

	return version;
}
const visitorNew = {
	name: 'Verena Nardi',
	age: 45,
	ticketId: 'H32AZ123',
	// gtc: {
	// 	signed: true,
	// 	version: '2.1',
	// },
};

console.log(gtcVersion(visitorNew));
