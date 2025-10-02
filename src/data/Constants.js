import about_about from "../assets/pages/about_about.png";
import about_mission from "../assets/pages/about_mission.png";
import about_why_us from "../assets/pages/about_why_us.png";
import team_parsa from "../assets/team/profile_parsa.png";
import team_shahriar from "../assets/team/profile_shahriar.png";
import team_setareh from "../assets/team/profile_setareh.png";
import home_codeempire from "../assets/pages/what-codeempire-is.png";
import home_ways from "../assets/pages/our-way.png";
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
    href: "/guide",
    label: "راهنما",
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
    href: "/guide",
    label: "راهنما",
  },
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

export const home = {
  whatWeAre: {
    title: "امپراتوری کد؛ مسیر آینده‌ی شما",
    describe:
      "آکادمی آنلاین امپراتوری کد با هدف ارتقای مهارت‌های برنامه‌نویسی، طراحی وب و بازی‌سازی تأسیس شده است. ما متعهدیم مسیری الهام‌بخش و ارزشمند برای تمام کسانی ایجاد کنیم که به دنبال آینده‌ای متفاوت هستند؛ آینده‌ای بر پایه مهارت‌های حرفه‌ای، درآمد پایدار و زندگی راحت در دنیای فناوری. در این امپراتوری، تیم ما با شیوه‌های نوین آموزشی، دانش و تجربه‌ای بی‌همتا را در اختیار شما قرار می‌دهد تا مسیر یادگیری‌تان کوتاه‌تر، جذاب‌تر و مؤثرتر شود.",
    cover: home_codeempire,
  },
  newWays: {
    title: "یادگیری نوین و بی‌همتا",
    describe:
      "در امپراتوری کد، آموزش فقط تئوری نیست؛ ما با روش‌های به‌روز و تجربه‌محور، مسیر یادگیری را برای شما زنده می‌کنیم. از برنامه‌نویسی تا طراحی وب و بازی‌سازی، اینجا جایی است که مهارت می‌سازید، خلاقیت‌تان را پرورش می‌دهید و آینده‌ای واقعی در دنیای کد رقم می‌زنید.",
    cover: home_ways,
  },
};

export const about = {
  halfSections: [
    {
      title: "درباره‌ی امپراتوری کد",
      describe:
        "امپراتوری کد فقط یک آکادمی نیست؛ یک حرکت برای ساختن آینده است. ما اینجاییم تا یادگیری برنامه‌نویسی، طراحی وب و بازی سازی رو برای هر کسی که می‌خواد مسیرش رو شروع کنه ساده، جذاب و کارآمد کنیم.",
      cover: about_about,
    },
    {
      title: "ماموریت این امپراتوری",
      describe:
        "ما باور داریم آینده‌ی شغلی هرکسی می‌تونه با مهارت ساخته بشه. ماموریت ما ایجاد مسیری روشن برای یادگیری مهارت‌های دیجیتال از وب و برنامه‌نویسی تا هوش مصنوعی و بازی‌سازی، با روشی ساده و الهام‌بخش هست.",
      cover: about_mission,
    },
    {
      title: "چرا امپراتوری کد؟",
      describe:
        "امپراتوری کد جاییه که آموزش فقط درس دادن نیست؛ اینجا شما با پروژه‌های واقعی یاد می‌گیرید، در کنار مربی‌هایی که همیشه کنارتون هستن. ما یادگیری رو ساده، کاربردی و الهام‌بخش می‌کنیم تا سریع‌تر به مسیر شغلی مطمئن و آینده‌ای حرفه‌ای برسید",
      cover: about_why_us,
    },
  ],
  numbers: [
    { number: 30, title: "مربی مجرب" },
    { number: 800, title: "دانش آموخته" },
    { number: 100, title: "هزار ساعت آموزش" },
    { number: 300, title: "ساعت مشاوره" },
  ],
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
    profile: team_shahriar,
    bio: "برنامه‌نویس و طراح وب و دانشجوی ارشد علوم کامپیوتر که به عنوان مدیرعامل آکادمی امپراتوری کد هدایت این مجموعه رو بر عهده دارم، تا باهم فضایی کاربردی و پویا برای یادگیری و نوآوری بسازیم.",
  },
  {
    name: "پارسا آریا",
    role: "هم بنیانگزار و رئیس هیت مدیره",
    profile: team_parsa,
    bio: "برنامه‌نویس و مربی و دانشجوی رشته انیمیشن که به عنوان رئیس هیئت مدیره امپراتوری کد مسئولیت راهبری عالیه مجموعه را دارم. همراه شما هستم تا مسیر هیجان‌انگیزی از پیشرفت و تجربه داشته باشیم.",
  },
  {
    name: "ستاره اسدالهی",
    role: "سرپرست تیم آموزشی",
    profile: team_setareh,
    bio: "برنامه‌نویس وب و یادگیری ماشین که به عنوان سرپرست تیم آموزشی امپراتوری کد مسیر یادگیری و رشد دانشجویان رو هموار می‌کنم. اینجاییم تا  یادگیری رو ساده، جذاب و لذت‌بخش کنیم.",
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
