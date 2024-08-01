function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let comp = arr1.every((element, index) => element === arr2[index]);
	return comp;
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
	const averageAge = filteredUsers.length > 0 ? totalAge / filteredUsers.length : 0;
	return averageAge;
}
