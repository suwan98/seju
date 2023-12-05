function createSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default createSlug;
