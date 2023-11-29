import { Injectable } from '@angular/core';
import {  User } from '../interfaces';
import { Observable, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
usersList : User[] |any = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
]
usersListArabic: User[] | any = [
  {
    id: 1,
    name: "ليان جراهام",
    username: "بريت",
    email: "sincere@april.biz",
    address: {
      street: "كولاس لايت",
      suite: "شقة 556",
      city: "جوينبرو",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "روماغيرا-كرونا",
      catchPhrase: "نظام عصبي متعدد الطبقات للعميل والخادم",
      bs: "ربط أسواق الوقت الحقيقي للتسويق الإلكتروني",
    },
  },
  {
    id: 2,
    name: "ارفين هاول",
    username: "أنتونيت",
    email: "shanna@melissa.tv",
    address: {
      street: "فيكتور بلينز",
      suite: "جناح 879",
      city: "ويسوكيبرج",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "ديكو كريست",
      catchPhrase: "تداول تعليمي تفاعلي",
      bs: "توازن سلاسل الإمداد قابلة للتوسيع",
    },
  },
  {
    id: 3,
    name: "كليمنتين باوش",
    username: "سامانثا",
    email: "nathan@yesenia.net",
    address: {
      street: "ديغلاس إكستنشن",
      suite: "جناح 847",
      city: "ماكنزيهافن",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "روماغيرا-جاكوبسون",
      catchPhrase: "واجهة ثنائية التفرع واجهة واجهة",
      bs: "تمكين التطبيقات الاستراتيجية",
    },
  },
  {
    id: 4,
    name: "باتريشيا ليبساك",
    username: "كاريان",
    email: "julianne.oconner@kory.org",
    address: {
      street: "هويجر مول",
      suite: "شقة 692",
      city: "ساوث إلفيس",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "روبل-كوركيري",
      catchPhrase: "إنتاجية متعددة الطبقات بدون تسامح",
      bs: "الانتقال إلى خدمات الويب الحديثة",
    },
  },
  {
    id: 5,
    name: "تشيلسي ديتريتش",
    username: "كامرين",
    email: "lucio_hettinger@annie.ca",
    address: {
      street: "سكايلز ووكس",
      suite: "جناح 351",
      city: "روسكوفيو",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "كيبلر LLC",
      catchPhrase: "حلا للمستخدم متسامحة",
      bs: "تحول نماذج النهاية إلى النهاية",
    },
  },
  {
    id: 6,
    name: "السيدة دينيس شوليست",
    username: "ليوبولدو كوركيري",
    email: "karley_dach@jasper.info",
    address: {
      street: "نوربرتو كروسينج",
      suite: "شقة 950",
      city: "ساوث كريستي",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "كونسيدين-لوكمان",
      catchPhrase: "واجهة سفلية متزامنة",
      bs: "تمكين التطبيقات الابتكارية",
    },
  },
  {
    id: 7,
    name: "كورتيس وايسنات",
    username: "إلوين سكايلز",
    email: "telly.hoeger@billy.biz",
    address: {
      street: "ريكس تريل",
      suite: "جناح 280",
      city: "هاوماوث",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "جونز جروب",
      catchPhrase: "فريق متعدد الوسائط قابل للتكوين",
      bs: "توليد متاجر التجزئة الشركاتية",
    },
  },
  {
    id: 8,
    name: "نيكولاس رونولفسدوتير الخامس",
    username: "مكسيم نينو",
    email: "sherwood@rosamond.me",
    address: {
      street: "إلزوورث سوميت",
      suite: "جناح 729",
      city: "علييا فيو",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "أبرناثي جروب",
      catchPhrase: "تنفيذ مفهوم ثانوي",
      bs: "تمكين متاجر التجزئة قابلة للتوسيع",
    },
  },
  {
    id: 9,
    name: "غلينا رايشيرت",
    username: "ديلفين",
    email: "chaim_mcdermott@dana.io",
    address: {
      street: "دينا بارك",
      suite: "جناح 449",
      city: "بارثولوميبوري",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "يوست آند سانز",
      catchPhrase: "مشروع قائم على السياق قابل للتبديل",
      bs: "تجميع التقنيات في الوقت الحقيقي",
    },
  },
  {
    id: 10,
    name: "كليمنتينا دوبوك",
    username: "مورياه ستانتون",
    email: "rey.padberg@karina.biz",
    address: {
      street: "كاتي تيرنبايك",
      suite: "جناح 198",
      city: "ليبساكبوري",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "هويجر LLC",
      catchPhrase: "فريق عمل مميز مركز",
      bs: "استهداف نماذج النهاية إلى النهاية",
    },
  },
];
getCurrentLang() {
  return localStorage.getItem('lang')
}


 constructor() { }
  getEmployessInfo(): Observable<any> {
    if(this.getCurrentLang() == 'en' || !this.getCurrentLang()) return of(this.usersList)
    else return of(this.usersListArabic)

  }

}
