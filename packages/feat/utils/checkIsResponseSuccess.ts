export default function checkIsResponseSuccess(status: number) {
  return status >= 200 && status < 300;
}
