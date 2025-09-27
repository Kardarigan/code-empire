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
import guide_intro from "../assets/guide/guide-intro.png";
import guide_type_1 from "../assets/guide/guide-type-1.png";
import guide_type_2 from "../assets/guide/guide-type-2.png";
import guide_type_3 from "../assets/guide/guide-type-3.png";
import guide_cta from "../assets/guide/guide-cta.png";

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

export const guide = {
  intro: {
    title: "امپراتوری کد: یادگیری برنامه‌نویسی با انعطاف کامل",
    describe:
      "در امپراتوری کد، یادگیری برنامه‌نویسی محدود به یک قالب نیست. ما باور داریم هرکس باید بتونه مسیر آموزشی خودش رو با توجه به شرایط و سبک زندگی انتخاب کنه. به همین دلیل، سه نوع کلاس طراحی کرده‌ایم که هرکدام انعطاف، کیفیت و راحتی را در اولویت قرار می‌دهند تا شما بدون دغدغه، تنها روی یادگیری تمرکز کنید.",
    cover: guide_intro,
  },
  types: [
    {
      title: "کلاس خصوصی آنلاین",
      describe:
        "کلاس‌های خصوصی آنلاین امپراتوری کد در Google Meet برگزار می‌شن؛ فضایی کاملاً اختصاصی که فقط شما و مدرس حضور دارین. این مدل باعث میشه بدون هیچ حواس‌پرتی روی مسیر خودت تمرکز کنی، تمرین‌ها و پروژه‌ها دقیقاً بر اساس سطح و هدف تو طراحی بشن و استاد هم در طول مسیر با بازخورد مداوم همراهت باشه. نتیجه‌اش یک یادگیری سریع‌تر، عمیق‌تر و مطمئن‌تره.",
      cover: guide_type_1,
    },
    {
      title: "کلاس خصوصی آفلاین",
      describe:
        "کلاس خصوصی آفلاین برای کساییه که بیشترین ارزش رو توی انعطاف می‌بینن. تو می‌تونی ویدئوهای هر جلسه رو از مدرس در تلگرام یا واتساپ بگیری و هر زمان که تمرکز و حال بهتر داشتی، سراغ یادگیری بری. این مدل برای کسایی مناسبه که دوست دارن با آرامش بیشتری پیش برن و درگیر اینترنت قوی یا زمان‌بندی ثابت نباشن. در عین حال، جلسات رفع اشکال و بررسی تمرین‌ها کیفیت آموزش رو تضمین می‌کنه.",
      cover: guide_type_2,
    },
    {
      title: "کلاس گروهی آنلاین",
      describe:
        "کلاس‌های گروهی هم مثل خصوصی در Google Meet برگزار می‌شن و برای یادگیری در کنار بقیه طراحی شدن؛ جایی که هم انگیزه جمعی داری و هم می‌تونی از پرسش‌ها و تجربه‌های بقیه استفاده کنی. این کلاس‌ها طبق برنامه آکادمی و بعد از تکمیل ظرفیت اعلام می‌شن. علاوه بر یادگیری فردی، تجربه کار تیمی و تبادل ایده هم بخشی از مسیرته، چیزی که در آینده‌ی شغلی هم به کارت میاد.",
      cover: guide_type_3,
    },
  ],
  method: {
    title: "متد آموزشی",
    describe:
      "روش آموزش در امپراتوری کد فقط تدریس ساده نیست؛ بلکه ترکیبی از پروژه‌های واقعی، مسیر اختصاصی، پشتیبانی مداوم و انعطاف زمانی است تا هر دانشجو مطابق شرایط خودش به نتیجه برسد.",
    items: [
      {
        title: "پروژه‌محور",
        icon: "fa-duotone fa-solid fa-project-diagram",
        describe:
          "تمام مفاهیم در قالب پروژه‌های واقعی آموزش داده می‌شوند تا دانشجو از همان ابتدا تجربه کار عملی داشته باشد.",
      },
      {
        title: "مسیر اختصاصی",
        icon: "fa-duotone fa-solid fa-route",
        describe:
          "برای هر دانشجو مسیر یادگیری متناسب با سطح و هدفش طراحی می‌شود؛ هیچ دو نفر دقیقا یک مسیر ندارند.",
      },
      {
        title: "پشتیبانی مداوم",
        icon: "fa-duotone fa-solid fa-headset",
        describe:
          "در طول دوره، استاد و تیم پشتیبانی همیشه آماده پاسخگویی به سوالات و رفع مشکلات هستند.",
      },
      {
        title: "انعطاف زمانی",
        icon: "fa-duotone fa-solid fa-clock",
        describe:
          "کلاس‌ها و تمرین‌ها با انعطاف کامل زمانی پیش می‌روند تا دانشجو بتواند یادگیری را با زندگی روزمره هماهنگ کند.",
      },
    ],
  },
  structure: {
    title: "ساختار هر جلسه",
    describe:
      "هر جلسه در امپراتوری کد بر اساس یک الگوی ساده ولی قدرتمند طراحی شده: آموزش، تمرین، بازخورد و جمع‌بندی. این چرخه باعث میشه دانشجو همزمان با یادگیری، تجربه عملی و مسیر روشن برای ادامه داشته باشه.",
    items: [
      {
        title: "آموزش",
        icon: "fa-duotone fa-solid fa-chalkboard-teacher",
        describe:
          "هر جلسه با آموزش شفاف و هدفمند شروع می‌شود تا دانشجو به درک دقیق مفاهیم برسد.",
      },
      {
        title: "تمرین",
        icon: "fa-duotone fa-solid fa-laptop-code",
        describe:
          "بلافاصله بعد از یادگیری، تمرین‌های عملی طراحی می‌شود تا دانشجو دانشش را تبدیل به مهارت کند.",
      },
      {
        title: "بازخورد",
        icon: "fa-duotone fa-solid fa-comments",
        describe:
          "استاد تمرین‌ها را بررسی می‌کند و بازخورد مستقیم می‌دهد تا نقاط ضعف و قوت مشخص شوند.",
      },
      {
        title: "جمع‌بندی",
        icon: "fa-duotone fa-solid fa-book-open",
        describe:
          "در پایان جلسه، مرور کلی انجام می‌شود تا مسیر جلسه‌ی بعد روشن باشد و هیچ نکته‌ای جا نماند.",
      },
    ],
  },
  ctaCover: guide_cta,
};

export const middleSupport = {
  title: "سوالی داری؟",
  subtitle: "خیالت راحت، تیم امپراتوری کد همیشه کنارت هست.",
  links: [
    {
      label: "تـمــاس بـا مـا",
      href: "/contact",
      icon: "fa-solid fa-headset",
    },
    {
      label: "پشتیبانی تلگرام",
      href: "https://t.me/codeempire_support",
      icon: "fa-brands fa-telegram",
    },
  ],
};

export const categories = [
  "همه",
  "امپراتوری",
  "بازی ویدئویی",
  "برنامه نویسی",
  "تکنولوژی",
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
    name: "پارسا آریا",
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
