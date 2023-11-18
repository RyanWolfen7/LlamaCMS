import { type RequestHandler } from '@builder.io/qwik-city';

// Generic function `onRequest` is executed first
export const onRequest: RequestHandler = async ({ next, sharedMap }) => {
    const welcome: string = "Welcome to Llama CMS version"
    sharedMap.set('welcome', welcome);

    await next(); // Execute next middleware function (onGet)
};
