export function getBase64Ascii(string: string) {
  const data = string;
  const buff = Buffer.from(data, 'ascii');
  return buff.toString('base64');
}

export const getAuthHeaders = () => {
  const credentials = process.env.NX_USERNAME_PASSWORD;
  if (!credentials) {
    throw new Error('Missing API credentials');
  }

  return {
    headers: {
      Authorization: `Basic ${getBase64Ascii(credentials)}`
    }
  };
};
