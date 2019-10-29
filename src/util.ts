export function supportRef(node: any): boolean {
  // Function component
  if (node.type && node.type.prototype && !node.type.prototype.render) {
    return false;
  }

  return true;
}
