const isAdmin = type => {
  if (type) {
    if (type.toLowerCase() === 'admin') {
      return true;
    }
  }
  return false;
};

export default isAdmin;
