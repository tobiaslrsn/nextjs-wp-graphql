export const relativeToAbsoluteUrls = (htmlString: string | any = '') => {
    return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join('');
    // This will remove: http://next-and-wordpress.local from the backend urls
    // So I am able to set it to something else.
};
