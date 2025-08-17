export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'tel' | 'textarea' | 'select' | 'checkbox';
  name: string;
  required?: boolean;
  pattern?: string;
  title?: string;
  inputMode?: string;
  options?: Array<{
    value: string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
  }>;
}

export const formFields: FormField[] = [
  {
    id: 'name',
    label: 'Имя',
    type: 'text',
    name: 'name',
    required: true,
    pattern: '[А-Яа-яЁё\\s\\-]+',
    title: 'Разрешены только буквы, пробелы и дефис',
  },
  {
    id: 'phone',
    label: 'Телефон',
    type: 'tel',
    name: 'phone',
    required: true,
    pattern: '[0-9]*',
    inputMode: 'tel',
  },
  {
    id: 'message',
    label: 'Ваше сообщение',
    type: 'textarea',
    name: 'message',
  },
  {
    id: 'city',
    label: 'Выберите город',
    type: 'select',
    name: 'city',
    required: true,
    options: [
      { value: '', label: ' ', disabled: true, selected: true },
      { value: 'msk', label: 'Москва' },
      { value: 'nsk', label: 'Новосибирск' },
      { value: 'spb', label: 'Санкт-Петербург' },
    ],
  },
]; 