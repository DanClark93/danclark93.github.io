export const getColor = pm25 => {
  //return the jenks color bucket created by Arcgis Pro
  let color = '#070100';
  switch (true) {
    case pm25 < 10:
      color = '#80B1E2';
      break;
    case pm25 < 13.06697:
      color = '#EFCD27';
      break;
    case pm25 < 13.11123:
      color = '#E8B927';
      break;
    case pm25 < 13.16352:
      color = '#E2A627';
      break;
    case pm25 < 13.22481:
      color = '#DC9428';
      break;
    case pm25 < 13.29151:
      color = '#D78427';
      break;
    case pm25 < 13.36394:
      color = '#D77D25';
      break;
    case pm25 < 13.44681:
      color = '#D67522';
      break;
    case pm25 < 13.51108:
      color = '#D56C20';
      break;
    case pm25 < 13.64537:
      color = '#D4641D';
      break;
    case pm25 < 13.76171:
      color = '#D45B1B';
      break;
    case pm25 < 13.89289:
      color = '#D35017';
      break;
    case pm25 < 14.04266:
      color = '#D24714';
      break;
    case pm25 < 14.22133:
      color = '#D13C11';
      break;
    case pm25 < 14.41471:
      color = '#D0330E';
      break;
    case pm25 < 14.64097:
      color = '#CA2C0C';
      break;
    case pm25 < 14.91951:
      color = '#C3290B';
      break;
    case pm25 < 15.1863:
      color = '#BA250A';
      break;
    case pm25 < 15.4639:
      color = '#B22108';
      break;
    case pm25 < 15.78601:
      color = '#A61D07';
      break;
    case pm25 < 16.184725:
      color = '#8B1806';
      break;
    case pm25 < 16.69287:
      color = '#6A1205';
      break;
    case pm25 < 17.36204:
      color = '#4E0E03';
      break;
    case pm25 < 18.39717:
      color = '#2E0802';
      break;
    case pm25 < 24.01314:
      color = '#070100';
      break;
    default:
      color = '#070100';
      break;
  }
  return color;
};
