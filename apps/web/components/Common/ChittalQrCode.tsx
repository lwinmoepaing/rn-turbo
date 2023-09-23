import { QRCode } from "react-qrcode-logo";

function ChittalQrCode(props : Data) {
  return (
    <QRCode
      size={props.size}
      value={props.link}
      qrStyle="dots"
      ecLevel={"Q"}
      eyeRadius={18}
    />
  );
}
export default ChittalQrCode;

interface Data {
  link : string,
  size : number
}