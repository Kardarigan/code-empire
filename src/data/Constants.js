import Persians_Parade from "../assets/persians_parade.jpg";
import about_1 from "../assets/about/about-1.png";
import about_2 from "../assets/about/about-2.png";
import about_3 from "../assets/about/about-3.png";
import Team_1 from "../assets/team/team_1.png";
import Team_2 from "../assets/team/team_2.png";
import Team_3 from "../assets/team/team_3.png";
import Home_Academy from "../assets/pages/home-academy.png";
import Home_Ways from "../assets/pages/home-ways.png";
import logo_icon_title from "../assets/logo/logo.png";
import logo_icon from "../assets/logo/logo-icon.png";
import logo_icon_white from "../assets/logo/logo-icon-white.png";
import coat_of_arms from "../assets/logo/coat-of-arms.png";

export const logo = {
  iconTitle: logo_icon_title,
  icon: logo_icon,
  iconWhite: logo_icon_white,
  coatOfArms: coat_of_arms,
};

export const navLinks = [
  { href: "/", label: "خانه" },
  {
    href: "/about",
    label: "درباره",
  },
  {
    href: "/courses",
    label: "کلاس ها",
  },
  { href: "/blog", label: "مقالات" },
  { href: "/contact", label: "ارتباط با ما" },
];

export const hamburgerLinks = [
  { href: "/", label: "خانه" },
  {
    href: "/about",
    label: "درباره",
  },
  {
    href: "/courses",
    label: "کلاس ها",
  },
  { href: "/blog", label: "مقالات" },
  { href: "/contact", label: "ارتباط با ما" },
  { href: "/policy", label: "قوانین" },
];

export const footLinks = [
  {
    title: "ما کی هستیم؟",
    class: "xl:col-span-2 lg:col-span-3",
    describe:
      "می‌توان گفت امپراتوری کد بی‌همتاست و هیچ رقیبی ندارد! آکادمی‌ای آنلاین که نه‌تنها برنامه‌نویسی را آموزش می‌دهد، بلکه آینده حرفه‌ای تو را در دنیای فناوری و برنامه‌نویسی تضمین میکند.",
  },
  {
    title: "بخش های وبسایت",
    class: "lg:col-span-1",
    links: [
      {
        label: "خانه",
        path: "/",
      },
      {
        label: "کلاس های آموزشی",
        path: "/courses",
      },
      {
        label: "مجله‌ی امپراتوری",
        path: "/blog",
      },
    ],
  },
  {
    title: "امپراتوری کد",
    class: "lg:col-span-1",
    links: [
      {
        label: "منشور قوانین",
        path: "/policy",
      },
      {
        label: "ارتباط با ما",
        path: "/contact",
      },
      {
        label: "درباره امپراتوری",
        path: "/about",
      },
    ],
  },
  {
    title: "ارتباط سریع",
    class: "lg:col-span-1",
    ways: [
      {
        label: "ایمیل",
        icon: "fa-solid fa-envelope",
        info: "info@codeempire.ir",
        href: "mailto:info@codeempire.ir",
      },
      {
        label: "تلگرام",
        icon: "fa-brands fa-telegram",
        info: "@codeempire_support",
        href: "https://t.me/codeempire_support",
      },
    ],
  },
];

export const socialButtons = [
  {
    href: "https://m.youtube.com/@EmpireOfCodes",
    iconClass: "fa-brands fa-youtube",
  },
  { href: "https://t.me/codeOFempire", iconClass: "fa-brands fa-telegram" },
  {
    href: "https://www.instagram.com/codeempire/",
    iconClass: "fa-brands fa-instagram",
  },

];

export const futureAcademy = {
  title: "امپراتوری کد؛ مسیر آینده",
  describe:
    "آکادمی آنلاین امپراتوری کد با هدف ارتقای سطح یادگیری و آموزش مهارت‌های برنامه‌نویسی، طراحی وبسایت، و بازی‌سازی تأسیس شده است. ما متعهدیم که برای تمامی افرادی که به دنبال آینده‌ای متفاوت هستند، مسیری الهام‌بخش و ارزشمند ایجاد کنیم؛ آینده‌ای که بر پایه مهارت‌های حرفه‌ای، درآمد پایدار و زندگی‌ای راحت و پیشرو در دنیای فناوری شکل می‌گیرد.",
  cover: Home_Academy,
};

export const newWays = {
  title: "یادگیری نوین و بی‌همتا",
  describe:
    "در آکادمی آنلاین امپراتوری کد، با بهره‌گیری از به‌روزترین و مؤثرترین روش‌های آموزش آنلاین، به شما کمک می‌کنیم تا در زمینه‌های برنامه‌نویسی، طراحی وبسایت و بازی‌سازی به مهارت‌های مورد علاقه خود مسلط شوید. اینجا جایی است که می‌توانید رویای خود را در دنیای کدها بسازید و آینده‌ای متفاوت رقم بزنید.",
  cover: Home_Ways,
};

export const whatWeAre = {
  title: "امپراتوری کد چیست؟",
  describe:
    "امپراتوری کد، گروهی توانمند و استوار است که آرزوی دگرگونی بنیادین در جهان وب‌سایت‌ها، برنامه‌ها و بازی‌ها را در سر دارد. خواهران و برادران ما در این امپراتوری، شبانه‌روز می‌کوشند تا با بهره‌گیری از شیوه‌های نوین و کارآمد، آموزشی بی‌مانند را به همه کسانی که می‌خواهند آینده خود را با یادگیری مهارت‌های برنامه‌نویسی، طراحی وب‌سایت یا بازی‌سازی بسازند، ارائه دهند. آموزش تازه‌ترین فناوری‌ها و زبان‌های نوین، با هدف ارتقای کیفیت برنامه‌ها، وب‌سایت‌ها و بازی‌ها، سرلوحه این حرکت است.",
  cover: Persians_Parade,
};

export const customerReviews = [
  {
    name: "محمد‌امین شربلو",
    job: "دانشجو",
    review:
      "بنده به عنوان دانشجوی رشته کامپیوتر در یکسری مقالات امپراتوری کد همکاری داشتم و این واقعا برام کاری مهم و جالب بود.",
    avatar: "https://api.dicebear.com/9.x/rings/svg?seed=Nolan",
    lastCooperation: "اسفند 1402",
  },
  {
    name: "امیر ارسلان پایدار",
    job: "گیتاریست",
    review:
      "بنده به عنوان یک گیتاریست و آموزگار گیتار از همکاری‌ خودم و تیمم با آکادمی آنلاین امپراتوری کد برای ساخت موزیک‌های کوتاه اختصاصی خیلی خوشحال شدیم و واقعا تجربه لذت بخشی بود. بنظرم امپراتوری کد تیمی پویا و پرانرژی هست که اهداف و قوانین جالبی برای کارشان و آیندشون دارن.",
    avatar: "https://api.dicebear.com/9.x/rings/svg?seed=Leah",
    lastCooperation: "آذر 1403",
  },
  {
    name: "محمدحسین رئیسی",
    job: "دانشجو",
    review:
      "من فقط چندتا مشورت و همکاری ساده درباره کارهای دانشگاهم باهاشون داشتم ولی واقعا به اندازه یک پروژه بزرگ برام لذت بخش بود. به امید همکاری‌های بیشتر...",
    avatar: "https://api.dicebear.com/9.x/rings/svg?seed=Luis",
    lastCooperation: "اسفند 1403",
  },
  {
    name: "امیرحسین امینی",
    job: "دانشجو",
    review:
      "من به شخصه کلاس‌ها، مقالات و تم وبسایت امپراتوری کد خیلی برام جالب بود. بنده به عنوان دانشجوی رشته انیمیشن خیلی دوست دارم که که در طراحی کرکتر و هنر بازی‌سازی پیشرفت کنم.",
    avatar: "https://api.dicebear.com/9.x/rings/svg?seed=Avery",
    lastCooperation: "آذر 1403",
  },
  // {
  //   name: "",
  //   job: "",
  //   review: "",
  //   avatar: "",
  //   lastCooperation: "آذر 1403",
  // },
];

export const contactForm = [
  {
    label: "نام",
    type: "text",
    name: "sender_name",
    required: true,
    half: true,
  },
  {
    label: "نام خانوادگی (اختیاری)",
    type: "text",
    name: "sender_lastname",
    half: true,
  },
  {
    label: "شماره تماس (اختیاری)",
    type: "tel",
    name: "sender_phone",
  },
  {
    label: "ایمیل",
    type: "email",
    name: "sender_email",
    required: true,
  },
  {
    label: "موضوع پیام",
    type: "text",
    name: "message_subject",
    required: true,
  },
  {
    label: "متن پیام",
    type: "textarea",
    name: "message_content",
    required: true,
  },
];

export const about = {
  job: {
    title: "امپراتوری چیکار میکنه؟",
    describe:
      "همیشه بهترین سایت یا برنامه، اونیه که کمترین و بهترین کد رو داشته باشه. اما کار ما تنها این نیست، امپراتوری کد به دنبال گسترش دانش برنامه نویسی به صورت حرفه‌ای و به زبان ساده در تمام بخش‌های زندگیست، چرا که بسیار مهمه!",
    cover: about_1,
  },
  reagon: {
    title: "ما فراتر از سرزمینمون هستیم",
    describe:
      "همیشه بهترین جامعه اونیه که فراتر از سرزمینمش بیاندیشه و این یکی از باور های مهم و اساسی امپراتوری ماست! امپراتوری کد همیشه به دنبال آن است تا دانش برنامه‌نویسی و فریلنسری را در ایران گسترش و پایه گذاری کند سپس در جهت پیشرفت بیشتر و ارتباط با جهان از آن استفاده کند.",
    cover: about_2,
  },
  numbers: [
    { number: 30, title: "مربی مجرب" },
    { number: 800, title: "دانش آموخته" },
    { number: 100, title: "هزار ساعت آموزش" },
    { number: 300, title: "ساعت مشاوره" },
  ],
  idea: {
    title: "ایده اصلی ما چیه؟",
    describe:
      "همیشه بهترین گروه یا فرد کسیه که در کمترین زمان درست‌ترین و بهینه ترین کار رو انجام بده. همیشه بهترین جامعه یا کشور، اونیه که بروز باشه و درست تلاش کنه. همیشه بهترین کلاس از زندگی، زمانیه که زندگیت مملو از برنامه ریزی و انگیزه و هدف و دسترسی به دانش‌های نوین و کارآمد باشه. ایده اصلی ما اجرای همه این موارد به صورت حرفه‌ای و ساده برای همه شماست!",
    cover: about_3,
  },
};

export const categories = [
  "همه",
  "امپراتوری",
  "بازی ویدئویی",
  "برنامه نویسی",
  'تکنولوژی',
];

export const sortby = ["تازه ترین", "قدیمی ترین", "پیشنهادات"];

export const registerForm = [
  {
    label: "نام",
    type: "text",
    name: "sender_name",
    required: true,
    half: true,
  },
  {
    label: "نام خانوادگی (اختیاری)",
    type: "text",
    name: "sender_lastname",
    half: true,
  },
  {
    label: "شماره تماس",
    type: "tel",
    name: "sender_phone",
  },
  {
    label: "ایمیل",
    type: "email",
    name: "sender_email",
    required: true,
  },
];

export const contactInfo = [
  { label: "شماره تماس", describe: "+98 923 192 5979" },
  {
    label: "ساعات کاری",
    describe: "روز های هفته: 24 ساعت - پایان هفته: از 9 تا 15",
  },
  {
    label: "ایمیل پشتیبانی",
    describe: "info@codeempire.ir",
  },
  {
    label: "آدرس دفتر",
    describe: "تهران، پونک، خیابان اشرفی اصفهانی، خیابان فلاح زاده، همیلا سنتر",
  },
];

export const companies = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Digikala-logo.png/800px-Digikala-logo.png?20220914182914",
    href: "https://www.digikala.com/",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Snapp%21_logo_%28English%29.svg/1920px-Snapp%21_logo_%28English%29.svg.png",
    href: "https://snapp.ir/",
  },
  {
    logo: "https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg",
    href: "https://www.otaghak.com/",
  },
  {
    logo: "https://mapnagroup.com/wp-content/uploads/2024/05/MAPNA-Group-Logo-EN-Horizontal-600-300x57.png",
    href: "https://mapnagroup.com/",
  },
  {
    logo: "https://cdn-a.flytoday.ir/upload/flytoday/public/white-labels/flytoday/images/logo.svg",
    href: "https://www.flytoday.ir/",
  },
  {
    logo: "https://myket.ir/core/images/logo/logo-en.png",
    href: "https://myket.ir/",
  },
];

export const teamMembers = [
  {
    name: "شهریار سرگورابی",
    role: "مدیرعامل",
    profile: Team_1,
    bio: "برنامه‌نویس و طراح وبسایت و دانشجوی ارشد علوم کامپیوتر. بنده به عنوان مدیرعامل این امپراتوری و یکی از اعضای تیم آموزشی آکادمی آنلاین امپراتوری کد بسیار خوشنودم که به شما بزرگواران خدمت میکنم.",
  },
  {
    name: "پارسا عربی",
    role: "هم بنیانگزار و رئیس هیت مدیره",
    profile: Team_2,
    bio: "بنده به عنوان یک برنامه‌نویس، مربی و دانشجوی رشته‌ی انیمیشن، با افتخار یکی از اعضای ارشد امپراتوری کد هستم و ریاست هیئت مدیره امپراتوری کد رو بر عهده دارم و در خدمت شما بزرگوارانم تا در این امپراتوری آینده ای شگفت‌انگیز بسازیم.",
  },
  {
    name: "کیان خسروشاهی",
    role: "سرپرست تیم آموزشی",
    profile: Team_3,
    bio: "برنامه‌نویس ارشد بلاکچین و هوش مصنوعی که در جهت ارائه‌ی بهترین آموزش ممکن و فرای آن در امپراتوری کد به شما دوستان گرامی در جایگاه سرپست تیم آموزشی خدمت میکنم.",
  },
];

export const shareButtons = [
  {
    title: "همرسانی با واتساپ",
    icon: "fa-brands fa-whatsapp",
    href: "whatsapp://send?text=",
  },
  {
    title: "همرسانی با اینستاگرام",
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/?url=",
  },
  {
    title: "همرسانی با تلگرام",
    icon: "fa-brands fa-telegram",
    href: "https://t.me/share/url?url=",
  },
];
