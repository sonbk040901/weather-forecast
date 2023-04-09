export function convertF2C(f: number): number {
  return (f - 32) / 1.8;
}

export function convertValueToDay(params: number) {
  switch (params) {
    case 0:
      return "Thứ 2";
    case 1:
      return "Thứ 3";
    case 2:
      return "Thứ 4";
    case 3:
      return "Thứ 5";
    case 4:
      return "Thứ 6";
    case 5:
      return "Thứ 7";
    case 6:
      return "Chủ nhật";
    default:
      throw new Error("Invalid day");
  }
}
