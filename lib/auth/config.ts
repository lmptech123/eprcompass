const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '');
const siteUrl = configuredSiteUrl || 'http://localhost:3000';

export const AUTH_CALLBACK_URL = `${siteUrl}/auth/complete`;
