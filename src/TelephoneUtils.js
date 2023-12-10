export default class TelephoneUtils {
  static normalize(number) {
    return number.replaceAll(/[\(\)\s\-]/g, "").replace(/^8/, "+7");
  }
}