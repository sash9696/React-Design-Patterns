import React from "react";

function ProxyPattern() {
	const userObj = {
		name: "Peter",
		age: 30,
	};

	const proxyUser = new Proxy(userObj, {
		get: (targetObject, prop) => {
			return Reflect.get(targetObject, prop);
		},
		set: (targetObject, prop, reciever) => {
			console.log(`Changed ${prop} to ${reciever}`);
			Reflect.set(targetObject, prop, reciever);
			return true;
		},
	});
	console.log(proxyUser.name); //peter
	proxyUser.age = 40; //sets the age to 40

	return <div>proxy</div>;
}

export default ProxyPattern;
