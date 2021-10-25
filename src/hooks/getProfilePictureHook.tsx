const getProfilePictureHook = (profileLink: string | null) => {
  const defaultImage =
    'https://gravatar.com/avatar/7f28f6d928ddb4b8cadd0ee49b6c3c74?s=400&d=mp&r=x';
  if (profileLink) {
    return profileLink;
  }
  return defaultImage;
};

export default getProfilePictureHook;
