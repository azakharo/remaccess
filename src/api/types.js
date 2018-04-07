const value2label = (valuesList, currentValue) => valuesList.find(({value}) => currentValue === value).label

const shipmentStatusValues = [
  {value:"none", label:"Не фильтровать", default: true},
  {value:"create", label:"Создан"},
  {value:"none2", label:"Не определен"},
  {value:"sent", label:"Отправлен"},
  {value:"receive", label:"Получен"},
  {value:"prepare_to_send", label:"Подготовка к отправке"},
  {value:"accepted", label:"Принято"},
  {value:"enroute", label:"В пути"},
  {value:"disperse", label:"Спецгруз"},
  {value:"receive_in_location", label:"Приход груза на склад"},
  {value:"create_layout", label:"Создание заготовки"},
]

const placeStatusValues = [
  {value:"none", label:"Не определен"},
  {value:"shipping", label:"К отправке"},
  {value:"created", label:"Создано"},
  {value:"received", label:"Получено"},
  {value:"lost", label:"Потеряно"},
  {value:"terminate", label:"Списано"},
  {value:"sent", label:"Отправлено"},
  {value:"accepted", label:"Принято/Доставлено"},
]

export const shipmentStatus = {
  value2label: (currentValue) => value2label(shipmentStatusValues, currentValue),
  values: shipmentStatusValues,
}

export const placeStatus = {
  value2label: (currentValue) => value2label(placeStatusValues, currentValue),
  values: placeStatusValues,
}
