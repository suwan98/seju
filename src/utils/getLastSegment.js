export default function getLastSegment(url) {
  const segments = url.split("/");
  return segments[segments.length - 1];
}
