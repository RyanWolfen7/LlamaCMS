import { type RequestHandler } from '@builder.io/qwik-city';
 
export const onGet: RequestHandler = async ({ json, sharedMap }) => {
    const welcome = sharedMap.get('welcome')
    const version = '1.0.0'
    json(200, welcome + " " + version);
};
