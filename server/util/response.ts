export function responseJson<T>(data: T, message: string) {
  return {
    message: message,
    data,
  };
}
