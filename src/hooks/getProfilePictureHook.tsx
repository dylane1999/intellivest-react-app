const getProfilePictureHook = (profileImageLink: string | undefined | null) => {
  const defaultImage =
    'https://gravatar.com/avatar/7f28f6d928ddb4b8cadd0ee49b6c3c74?s=400&d=mp&r=x';
  if (profileImageLink) {
    return profileImageLink;
  }
  return defaultImage;
};

export default getProfilePictureHook;
