'use strict';

ServiceConfiguration.configurations.upsert(
	{service: 'facebook'},
	{
		$set: {
			appId: 'APPID',
			secret: 'SECRET'
		}
	}
);

