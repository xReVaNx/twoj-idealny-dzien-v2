const DUMMY_IMAGE: string =
  "https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/308037425_104698992410118_8186091998933080354_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hMrCZgLDIgQAX-HFweX&_nc_ht=scontent-frt3-1.xx&oh=00_AT-sSp21XaMBQ9tKj8thK5JPk670dh21-QIgZjkWAdNuWQ&oe=633F769E";

export const DUMMY_SERVICES: Array<Object> = [
  {
    id: "dekoracja-miejsca-wydarzenia",
    name: "Dekoracja miejsca wydarzenia",
    img: DUMMY_IMAGE,
    startPrice: 400,
    composition: [
      "Girlandy balonowe",
      "Ścianka do zdjęć",
      "Wazony",
      "Kwiaty",
      "Obrus",
      "Dekoracje stołu",
    ],
  },
  {
    id: "przygotowanie-oswiadczyn",
    name: "Przygotowania oświadczyn",
    img: DUMMY_IMAGE,
    startPrice: 700,
  },
  { id: "piknik", name: "Piknik", img: DUMMY_IMAGE, startPrice: 250 },
  { id: "wynajem-scianki", name: "Wynajem ścianki", img: DUMMY_IMAGE, startPrice: 150 },
];
