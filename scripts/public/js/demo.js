var xel_langs = {
    "eng": "English",
    "aka": "Akan (Twi)",
	"amh": "Amharic",
	"ara": "Arabic",
	"ben": "Bengali",
	"bg" : "Bulgarian",
	"cs" : "Czech",
	"ned": "Dutch",
	"fas": "Farsi",
	"deu": "German",
	"hau": "Hausa",
	"hin": "Hindi",
	"hun": "Hungarian",
	"ind": "Indonesian",
	"kin": "Kinyarwanda",
	"cmn": "Mandarin",
	"orm": "Oromo",
	"pl" : "Polish",
	"rus": "Russian",
	"sin": "Sinhala",
	"som": "Somali",
	"spa": "Spanish",
	"swa": "Swahili",
	"tam": "Tamil",
	"tgl": "Tagalog",
	"tha": "Thai",
	"tir": "Tigrinya",
	"tur": "Turkish",
	"uig": "Uyghur",
	"uzb": "Uzbek",
	"vie": "Vietnamese",
	"wol": "Wolof",
	"yor": "Yoruba",
	"zul": "Zulu"
}

var xel_examples = {
    "eng": [
		"Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst. Freud was born to Galician Jewish parents in the Moravian town of Freiberg, in the Austrian Empire. He qualified as a doctor of medicine in 1881 at the University of Vienna. Freud lived and worked in Vienna, having set up his clinical practice there in 1886. In 1938, Freud left Austria to escape Nazi persecution. He died in exile in the United Kingdom in 1939.",
        "Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and an Illinois state senator from 1997 to 2004.",
		"Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and in turn inspired movements for civil rights and freedom across the world. The honorific Mahātmā, first applied to him in 1914 in South Africa, is now used throughout the world."
    ],
    "aka": [
        "Ɛfiri hɔ no meba ha, maba ha anɔpa yi, meba ha anadwo. Manhunu Biribiara. Ɛwɔ sɛ. Ɛma me pamo nkwadaa no firi ha. Ɛna ɛma wɔn wɔ ha no. Nnora me ara me wuraa. Ben Ephson fie. Ɛhwɛɛ sɛ napomuden ɛte sɛn. Ɛmaa mehunuu sɛ. Ɔyɛɛ free wɔhɔ. Mepɛ sɛ meyɛ sure sɛ. Obiara entia ne fahodie so. Sɛ mma no pue anaa sɛ mma no nkɔ inside. Even though that was the situation on wednesday night. Megyina ha yi, Am a professional. trained police man. And i use the dialogue. Me mma na me start mmo amanfoɔ. Ɛno na me kaa sɛ, Boys no. Wɔn hwɛ around. Ebia na nnipa bɔnefoɔ bi. Abɛfra wɔn mu. Ɛrebɛdi bɔne bi ahyɛ wɔn. Asɛm a mekae ni. Monhwɛ na bi a na nnipa bɔnefoɔ bi. Afiri baabi. Abɛfra mo mu. Ɛrebɛdi bɔne ahyɛ mo. Enti mo mmue moani ɛwɔ ɛno ho. Na nnyɛ obi fie. Ɛnna mede firii ha. Mehyiaa. Honourable. Mireku, Mr. Mireku ɛwɔ ha sei. Ɛma yɛ exchange numbers. Enti metee radio no. Ɔno na yɛ first thing a. Meferɛɛ no ka kyerɛɛ no sɛ sei na mate. Na mereba abɛhwɛ. Enti maka kyerɛ youth no. Sɛ wɔnka kyerɛ saa nnipa no. Na ɔnya deɛ ɔreyɛ no. Na mmom."
    ],
	"amh": [
		"ሲግመንድ ፍሩድ አንድ የኦስትሪያ የነርቭ ሐኪም እና የሥነ-ልቦና ትንታኔ መስራች ነበር ፣ በታካሚ እና በስነ-ልቦና ተንታኝ መካከል በመግባባት ሥነ-ልቦና-ሕክምናን ለማከም ክሊኒካዊ ዘዴ ፡፡ ፍሮይድ በኦስትሪያ ግዛት ውስጥ በሞራቪያ ከተማ በምትገኘው ፍሪበርግ ውስጥ ከጋሊሺያዊው የአይሁድ ወላጆች ተወለደ ፡፡ በ 1881 በቪየና ዩኒቨርሲቲ በሕክምና ዶክተርነት ብቁ ሆነ ፡፡ ፍሮይድ እዛው እ.አ.አ. በ 1886 ክሊኒካዊ ልምምዱን በመጀመር በቪዬና ይኖር እና ይሰራ ነበር ፡፡ በ 1938 ፍሮድ ከናዚ ስደት ለማምለጥ ከኦስትሪያ ወጣ ፡፡ በስደት እንግሊዝ ውስጥ በ 1939 አረፈ ፡፡",
        "ሞሃንዳስ ካራምቻንድ ጋንዲ የህንድ ጠበቃ ፣ ፀረ-ቅኝ ገዢ ብሄርተኛ እና የፖለቲካ ስነምግባር ያላቸው ፣ ህንድ ከብሪታንያ አገዛዝ ነፃ እንድትወጣ የተጀመረውን ስኬታማ ዘመቻ ለመምራት ተቃውሟቸውን የማይቀበሉ ተቃውሞዎችን ያከናወኑ እና በተራው ደግሞ በመላው ዓለም ለዜጎች መብቶች እና ነፃነት የሚንቀሳቀሱ እንቅስቃሴዎች ነበሩ ፡፡ በደቡብ አፍሪካ ውስጥ ለመጀመሪያ ጊዜ በ 1914 የተተገበረው የተከበረው ማህተማ አሁን በዓለም ዙሪያ ሁሉ ጥቅም ላይ ውሏል ፡፡",
		"በፓኪስታን በተከሰተ የጎርፍ አደጋ ከ53 በላይ ሰዎች ሞቱ  አዲስ አበባ ፣ መጋቢት 26 ፣ 2008 (ኤፍ.ቢ.ሲ) በፓኪስታን የጣለውን ከባድ ዝናብ ተከትሎ ከ53 በላይ ሰዎች በጎርፍ አደጋ መሞታቸው ተሰማ። ከቅዳሜ ዕለት ጀምሮ ካይበር ፓክቱንክዋ፣ ካሽሚርና ግልጊት ባልቲስታን በተባሉ ግዛቶች ከባድ ዝናብ እየጣለ ሲሆን፥ በሰሜን ምዕራብ የሀገሪቱ ክፍል ነው በጎርፍ ሳቢያ ከ53 በላይ ሰዎች መሞታቸውን ባለስልጣናት ያስታወቁት። ባለሰልጣናቱ እየጣለ ያለው ዝናብ የከፋ ጉዳት ሊያደርስ ስለሚችል ነዋሪዎች አካባቢውን ለቀው አንዲወጡ አሳስበዋል። የሀገሪቱ ብሄራዊ የአደጋ መከላከል ባለስልጣን ላቲፍ ሬህማን በሳምንቱ እየጣለ ባለው ዝናብ ጉዳት የደረሰባቸው ሰዎች ወደ ሆሰፒታል እየተወሰዱ ነው ብለዋል። የአካባቢው ነዋሪዎች ቀያቸውን እየለቀቁ ቢሆንም የመንግስት ደጋፍ እየተደረገላቸው እንዳልሆነ ተናግረዋል። ባለስልጣናት በበኩላቸው ድንኳኖችና የምግብ አቅርቦቶችን ወደ አካባቢው እየላክን ነው ብለዋል። ምንጭ፦ ቢቢሲ",
		"ባራክ ሁሴን ኦባማ II አሜሪካዊው ፖለቲከኛ እና ጠበቃ ሲሆን እ.ኤ.አ. ከ 2009 እስከ 2017 ድረስ 44 ኛው የአሜሪካ ፕሬዝዳንት ሆነው ያገለገሉ ናቸው ፡፡ ቀደም ሲል ከ 2005 እስከ 2008 ከኢሊኖይስ የአሜሪካ ሴናተር እና ከ 1997 እስከ 2004 የኢሊኖይ ግዛት ሴናተር ሆነው አገልግለዋል ፡፡ "
	], 
	"ara": [
		"كان سيغموند فرويد طبيب أعصاب نمساويًا ومؤسس التحليل النفسي ، وهو أسلوب سريري لعلاج الأمراض النفسية من خلال الحوار بين المريض والمحلل النفسي. ولد فرويد لوالدين يهوديين من غاليسيا في بلدة فرايبرغ المورافيا في الإمبراطورية النمساوية. تأهل كطبيب في الطب عام 1881 في جامعة فيينا. عاش فرويد وعمل في فيينا ، بعد أن أسس ممارسته السريرية هناك عام 1886. في عام 1938 ، غادر فرويد النمسا هربًا من الاضطهاد النازي. توفي في المنفى في المملكة المتحدة عام 1939.",
		"باراك حسين أوباما الثاني سياسي ومحامي أمريكي شغل منصب الرئيس الرابع والأربعين للولايات المتحدة من عام 2009 إلى عام 2017. كان أوباما عضوًا في الحزب الديمقراطي ، وكان أول رئيس أمريكي من أصل أفريقي للولايات المتحدة. شغل سابقًا منصب عضو مجلس الشيوخ الأمريكي عن ولاية إلينوي من عام 2005 إلى عام 2008 وعضو مجلس الشيوخ عن ولاية إلينوي من عام 1997 إلى عام 2004. ",
        "مقتل عضو من هيئة علماء المسلمين خلال اقتحام القوات الاميركية منزله في بغداد (25/12/2004) بغداد (اف ب) قتل عضو من هيئة علماء المسلمين ابرز هيئة دينية للطائفة السنية خلال اقتحام القوات الاميركية الجمعة منزله في بغداد كما اكدت الهيئة في بيان اصدرته السبت."
	], 
	"ben": [
		"সিগমুন্ড ফ্রয়েড ছিলেন একজন অস্ট্রিয়ান নিউরোলজিস্ট এবং সাইকোঅ্যানালাইসিসের প্রতিষ্ঠাতা, একজন রোগী এবং মনোবিজ্ঞানীর মধ্যে কথোপকথনের মাধ্যমে সাইকোপ্যাথোলজির চিকিত্সার জন্য একটি ক্লিনিকাল পদ্ধতি। ফ্রয়েড অস্ট্রিয়ান সাম্রাজ্যের মোরোভিয়ান শহর ফ্রেইবার্গে গ্যালিশিয়ান ইহুদি পিতামাতার কাছে জন্মগ্রহণ করেছিলেন। তিনি ভিয়েনা বিশ্ববিদ্যালয়ের 1881 সালে মেডিসিনের একজন ডাক্তার হিসাবে যোগ্যতা অর্জন করেছিলেন। ফ্রয়েড ১৮ien৮ সালে সেখানে তাঁর ক্লিনিকাল অনুশীলন শুরু করে ভিয়েনায় থাকতেন এবং কাজ করেছিলেন। ১৯৩৮ সালে ফ্রয়েড নাৎসিদের অত্যাচার থেকে বাঁচতে অস্ট্রিয়া ত্যাগ করেছিলেন। ১৯৩৯ সালে তিনি যুক্তরাজ্যে নির্বাসনে মারা যান।",
		"বারাক হুসেন ওবামা দ্বিতীয় হলেন একজন আমেরিকান রাজনীতিবিদ এবং অ্যাটর্নি যিনি ২০০৯ থেকে ২০১ 2017 সাল পর্যন্ত আমেরিকার ৪৪ তম রাষ্ট্রপতি হিসাবে দায়িত্ব পালন করেছেন। ডেমোক্র্যাটিক পার্টির সদস্য ওবামা আমেরিকার প্রথম আফ্রিকান-আমেরিকান রাষ্ট্রপতি ছিলেন। তিনি এর আগে ২০০ to থেকে ২০০৮ সাল অবধি ইলিনয় থেকে মার্কিন যুক্তরাষ্ট্রের সিনেটর এবং ১৯৯ 1997 থেকে ২০০৪ সাল পর্যন্ত ইলিনয় রাজ্য সিনেটর হিসাবে দায়িত্ব পালন করেছেন। ",
		"ডেঙ্গু জ্বরে হাসপাতালে ভাঙচুর হয়েছিল। হাসপাতাল কর্তৃপক্ষ রক্ত ক্যান্সারের জন্য তার চিকিৎসা করেছে। তারপরে diedাকা বিশ্ববিদ্যালয়ের প্রাণিবিদ্যা বিভাগের প্রথম বর্ষের ছাত্র আফিয়া জাহান মারা যান। তাঁর সহপাঠীরা অভিযোগ করেছেন। বৃহস্পতিবার সকাল ১১ টার দিকে রাজধানীর গ্রিন রোডের সেন্ট্রাল হাসপাতালে এই ঘটনা ঘটে। আফিয়া জাহানের বন্ধু জিহাদ বলেছিল আফিয়াকে জ্বর হয়েছে। বুধবার সকালে তাকে সেন্ট্রাল হাসপাতালে ভর্তি করা হয়।"
	], 
	"bg" : [
		"Зигмунд Фройд е австрийски невролог и основател на психоанализата, клиничен метод за лечение на психопатология чрез диалог между пациент и психоаналитик. Фройд е роден от галисийски еврейски родители в моравския град Фрайберг, Австрийската империя. Квалифицира се като доктор по медицина през 1881 г. във Виенския университет. Фройд живее и работи във Виена, след като създава там своята клинична практика през 1886 г. През 1938 г. Фройд напуска Австрия, за да избегне нацистките преследвания. Умира в изгнание в Обединеното кралство през 1939 година.",
        "Барак Хюсеин Обама II е американски политик и адвокат, който е служил като 44-и президент на САЩ от 2009 до 2017 г. Член на Демократическата партия, Обама е първият афро-американски президент на САЩ. Преди това е служил като американски сенатор от Илинойс от 2005 до 2008 г. и сенатор от щата Илинойс от 1997 до 2004 г. ",
		"Мохандас Карамчанд Ганди беше индийски адвокат, антиколониален националист и политически етик, който използва ненасилствена съпротива, за да ръководи успешната кампания за независимост на Индия от британското управление и от своя страна вдъхнови движения за граждански права и свобода по целия свят. Почетният Mahātmā, прилаган за пръв път през 1914 г. в Южна Африка, сега се използва по целия свят."
	], 
	"cs" : [
		"Sigmund Freud byl rakouský neurolog a zakladatel psychoanalýzy, klinické metody léčby psychopatologie prostřednictvím dialogu mezi pacientem a psychoanalytikem. Freud se narodil galicijským židovským rodičům v moravském městě Freiberg v rakouském císařství. V roce 1881 se stal doktorem medicíny na vídeňské univerzitě. Freud žil a pracoval ve Vídni, kde zde zahájil klinickou praxi v roce 1886. V roce 1938 Freud opustil Rakousko, aby unikl nacistické perzekuci. Zemřel v exilu ve Velké Británii v roce 1939.",
        "Barack Hussein Obama II je americký politik a právník, který v letech 2009 až 2017 působil jako 44. prezident Spojených států. Obama, člen Demokratické strany, byl prvním afroamerickým prezidentem Spojených států. Předtím působil jako americký senátor z Illinois v letech 2005 až 2008 a senátor státu Illinois v letech 1997 až 2004. ",
		"Mohandas Karamchand Gandhi byl indický právník, antikoloniální nacionalista a politický etik, který použil nenásilný odpor, aby vedl úspěšnou kampaň za nezávislost Indie od britské nadvlády, a následně inspiroval hnutí za občanská práva a svobodu po celém světě. Čestná Mahátma, která se k němu poprvé přihlásila v roce 1914 v Jižní Africe, se nyní používá po celém světě."
	], 
	"ned": [
		"Sigmund Freud was een Oostenrijkse neuroloog en de grondlegger van de psychoanalyse, een klinische methode voor de behandeling van psychopathologie door middel van dialoog tussen een patiënt en een psychoanalyticus. Freud werd geboren uit Galicische Joodse ouders in de Moravische stad Freiberg, in het Oostenrijkse rijk. Hij kwalificeerde zich als doctor in de geneeskunde in 1881 aan de Universiteit van Wenen. Freud woonde en werkte in Wenen, nadat hij daar in 1886 zijn klinische praktijk had opgezet. In 1938 verliet Freud Oostenrijk om aan de nazi-vervolging te ontsnappen. Hij stierf in ballingschap in het Verenigd Koninkrijk in 1939.",
        "Barack Hussein Obama II (Honolulu, 4 augustus 1961) is een Amerikaans politicus en schrijver. Hij was de 44e president van de Verenigde Staten, in functie van 20 januari 2009 tot 20 januari 2017 gedurende twee ambtsperiodes. Hij was de eerste Amerikaanse president van (deels) Afrikaanse afkomst. ",
		"Mohandas Karamchand Gandhi was een Indiase advocaat, antikoloniale nationalist en politiek ethicus, die geweldloos verzet gebruikte om de succesvolle campagne voor India's onafhankelijkheid van de Britse overheersing te leiden, en op zijn beurt inspireerde hij bewegingen voor burgerrechten en vrijheid over de hele wereld. De eretitel Mahātmā, die in 1914 voor het eerst op hem werd toegepast in Zuid-Afrika, wordt nu over de hele wereld gebruikt."
	], 
	"fas": [
		"زیگموند فروید یک متخصص مغز و اعصاب اتریشی و بنیانگذار روانکاوی بود ، یک روش بالینی برای درمان آسیب شناسی روانی از طریق گفتگو بین یک بیمار و یک روانکاو. فروید از پدر و مادر یهودی گالیسیایی در شهر فرایبرگ موراویایی ، در امپراتوری اتریش به دنیا آمد. وی در سال 1881 در دانشگاه وین به عنوان دکتر پزشکی صلاحیت یافت. فروید در وین زندگی و کار می کرد ، زیرا در سال 1886 عمل بالینی خود را در آنجا راه اندازی کرد. در 1938 ، فروید برای فرار از آزار و اذیت نازی ها ، اتریش را ترک کرد. وی در سال 1939 در تبعید در انگلستان درگذشت.",
		"باراک حسین اوباما دوم یک سیاستمدار و وکیل مدافع آمریکایی است که از سال 2009 تا 2017 به عنوان چهل و چهارمین رئیس جمهور ایالات متحده خدمت کرد. اوباما عضو حزب دموکرات ، اولین رئیس جمهور آفریقایی-آمریکایی ایالات متحده بود. وی پیش از این از 2005 تا 2008 به عنوان سناتور ایالات متحده از ایلینوی و از 1997 تا 2004 به عنوان سناتور ایالت ایلینوی خدمت می کرد.",
		"مهندس کارامچاند گاندی یک وکیل هندی ، ملی گرای ضد استعمار و اخلاق سیاسی بود ، که برای هدایت مبارزات موفقیت آمیز برای استقلال هند از حاکمیت انگلیس ، و به نوبه خود از جنبش های حقوق مدنی و آزادی در سراسر جهان ، مقاومت بی خشونت به کار گرفت. Mahātmā شرافتمندانه ، که برای اولین بار در سال 1914 در آفریقای جنوبی برای او اعمال شد ، اکنون در سراسر جهان مورد استفاده قرار می گیرد."
	], 
	"deu": [
		"Sigmund Freud war ein österreichischer Neurologe und der Begründer der Psychoanalyse, einer klinischen Methode zur Behandlung der Psychopathologie im Dialog zwischen einem Patienten und einem Psychoanalytiker. Freud wurde als Sohn galizischer jüdischer Eltern im mährischen Freiberg im österreichischen Reich geboren. Er qualifizierte sich 1881 als Doktor der Medizin an der Universität Wien. Freud lebte und arbeitete in Wien, nachdem er dort 1886 seine klinische Praxis eingerichtet hatte. 1938 verließ Freud Österreich, um der nationalsozialistischen Verfolgung zu entgehen. Er starb 1939 im britischen Exil.",
        "Barack Hussein Obama II ist ein amerikanischer Politiker und Anwalt, der von 2009 bis 2017 als 44. Präsident der Vereinigten Staaten fungierte. Als Mitglied der Demokratischen Partei war Obama der erste afroamerikanische Präsident der Vereinigten Staaten. Zuvor war er von 2005 bis 2008 als US-Senator von Illinois und von 1997 bis 2004 als Senator des Staates Illinois tätig.",
		"Mohandas Karamchand Gandhi war ein indischer Anwalt, antikolonialer Nationalist und politischer Ethiker, der gewaltfreien Widerstand einsetzte, um die erfolgreiche Kampagne für die Unabhängigkeit Indiens von der britischen Herrschaft zu leiten, und wiederum Bewegungen für Bürgerrechte und Freiheit auf der ganzen Welt inspirierte. Der ehrenwerte Mahātmā, der 1914 in Südafrika erstmals bei ihm angewendet wurde, wird heute weltweit verwendet."
	],
	"hau": [
		"Sigmund Freud masanin likitancin Austriya ne kuma wanda ya kirkiro masaniyar halayyar dan adam, wata hanya ce ta asibiti don kula da ilimin halayyar dan adam ta hanyar tattaunawa tsakanin majiyyaci da masanin halayyar dan adam. Freud an haife shi ne ga iyayen Bayahude na Galician a garin Moravia na Freiberg, a cikin Daular Austriya. Ya cancanci matsayin likitan magani a cikin 1881 a Jami'ar Vienna. Freud ya zauna kuma yayi aiki a Vienna, bayan da ya kafa aikin likita a can a cikin 1886. A cikin 1938, Freud ya bar Austria don tserewa zaluncin Nazi. Ya mutu a gudun hijira a Burtaniya a 1939.",
        "Barack Hussein Obama na biyu ɗan siyasan Amurka ne kuma lauya wanda ya yi aiki a matsayin shugaban Amurka na 44 daga shekara ta 2009 zuwa 2017. Wani memba na Jam’iyyar Democrat, Obama shi ne shugaban Ba-Amurke na farko na Amurka. Ya taba zama dan majalisar dattijan Amurka daga Illinois daga 2005 zuwa 2008 da kuma sanatan jihar Illinois daga 1997 zuwa 2004.",
		"Mohandas Karamchand Gandhi wani lauya ne dan Indiya, mai adawa da mulkin mallaka, kuma mai bin tsarin siyasa, wanda ya yi amfani da turjiya ba hamayya don jagorantar nasarar yakin neman ‘yancin Indiya daga mulkin Birtaniyya, sannan kuma ya haifar da yunkuri don 'yancin jama'a da' yanci a duk duniya. Mahātmā mai daraja, wanda aka fara amfani da shi a cikin 1914 a Afirka ta Kudu, yanzu ana amfani da shi a duk duniya."
	], 
	"hin": [
		"सिगमंड फ्रायड एक ऑस्ट्रियाई न्यूरोलॉजिस्ट और मनोविश्लेषण के संस्थापक थे, जो एक रोगी और एक मनोविश्लेषक के बीच संवाद के माध्यम से मनोचिकित्सा का इलाज करने के लिए एक नैदानिक विधि है। फ्रायड का जन्म ऑस्ट्रियन साम्राज्य के फ्रीबर्ग के मोरावियन शहर में गैलिशियन यहूदी माता-पिता से हुआ था। उन्होंने 1881 में वियना विश्वविद्यालय में चिकित्सा के डॉक्टर के रूप में योग्यता प्राप्त की। 1886 में फ्रायड ने वियना में काम किया और अपना नैदानिक अभ्यास किया। 1938 में, फ्रायड ने नाजी उत्पीड़न से बचने के लिए ऑस्ट्रिया छोड़ दिया। 1939 में यूनाइटेड किंगडम में निर्वासन में उनकी मृत्यु हो गई।",
		"बराक हुसैन ओबामा II एक अमेरिकी राजनेता और वकील हैं जिन्होंने 2009 से 2017 तक संयुक्त राज्य अमेरिका के 44 वें राष्ट्रपति के रूप में कार्य किया। डेमोक्रेटिक पार्टी के एक सदस्य, ओबामा संयुक्त राज्य के पहले अफ्रीकी-अमेरिकी राष्ट्रपति थे। उन्होंने पहले 2005 से 2008 तक इलिनोइस से अमेरिकी सीनेटर और 1997 से 2004 तक इलिनोइस राज्य के सीनेटर के रूप में कार्य किया। ",
		"मोहनदास करमचंद गांधी एक भारतीय वकील, उपनिवेशवाद विरोधी राष्ट्रवादी और राजनीतिक नैतिकतावादी थे, जिन्होंने ब्रिटिश शासन से भारत की आजादी के लिए सफल अभियान का नेतृत्व करने के लिए अहिंसक प्रतिरोध को नियोजित किया था, और बदले में दुनिया भर में नागरिक अधिकारों और स्वतंत्रता के लिए प्रेरित आंदोलनों का नेतृत्व किया। दक्षिण अफ्रीका में 1914 में पहली बार उनके लिए लागू किया गया सम्मानीय महात्म्य, अब दुनिया भर में उपयोग किया जाता है।"
	], 
	"hun": [
		"Sigmund Freud osztrák neurológus volt, és a pszichoanalízis megalapítója. Ez a klinikai módszer a pszichopatológia kezelésére a beteg és egy pszichoanalitikus között. Freud galíciai zsidó szülőktől született a morvaországi Freiberg városban, az Osztrák Birodalomban. 1881-ben orvosdiplomát szerzett a bécsi egyetemen. Freud Bécsben élt és dolgozott, klinikai gyakorlatát 1886-ban kezdte meg. 1938-ban Freud elhagyta Ausztriát, hogy elkerülje a náci üldöztetést. Az Egyesült Királyság száműzetésében halt meg 1939-ben.",
		"Barack Hussein Obama II amerikai politikus és ügyvéd, aki 2009 és 2017 között az Egyesült Államok 44. elnökeként tevékenykedett. Obama a Demokrata Párt tagja volt az Egyesült Államok első afro-amerikai elnöke. Korábban 2005-től 2008-ig amerikai szenátorként dolgozott Illinois-ból, 1997-től 2004-ig pedig Illinois államban.",
		"Mohandas Karamchand Gandhi indiai ügyvéd, gyarmatellenes nacionalista és politikai etikus volt, erőszakos ellenállást tanúsítva, hogy vezesse az indiai brit uralomtól való függetlenségének sikeres kampányát, és ezáltal az állampolgári jogok és szabadság mozgalmainak inspirálását szerte a világon. A megtisztelő Mahātmát, amelyet 1914-ben alkalmaztak először Dél-Afrikában, ma már az egész világon használják.",
		"A hepatitis B oltás logikájáról A tegnapi cikk a hepatitis B oltásról és az abban szereplő véleményem üdvözlő olvasmányt kapott, amelyben csak egy dolgot sajnálok: azt, hogy egy nagyon sajátos kérdéssel foglalkoztam (vagy inkább: nagyon szélsőséges helyzetre reagáltam) ) - miközben úgy tűnik, hogy lenne értelme megvitatni a hepatitis B oltással kapcsolatos alapvető kérdéseket! Sajnos a cikkből kiderül, hogy édesanyját teljesen félreértik a hepatitis B mechanizmusát, járványtani és közegészségügyi jelentőségét érintő alapvető kérdésekben, ezt sem az újságíró, sem Dr. Ócsai orvos nem javította. (Egyébként teljesen érthető módon: az újságíró természetesen nincs tudatában ezeknek, feltételezem Ócsai doktort, hogy hozzám hasonlóan csak néhány konkrét kérdéssel keresett meg.)"
	], 
	"ind": [
		"Sigmund Freud adalah seorang ahli saraf Austria dan pendiri psikoanalisis, metode klinis untuk mengobati psikopatologi melalui dialog antara pasien dan psikoanalis. Freud lahir dari orang tua Yahudi Galisia di kota Freiberg, Moravia, di Kekaisaran Austria. Ia memenuhi syarat sebagai doktor kedokteran pada tahun 1881 di Universitas Wina. Freud tinggal dan bekerja di Wina, setelah mendirikan praktik klinisnya di sana pada tahun 1886. Pada tahun 1938, Freud meninggalkan Austria untuk menghindari penganiayaan Nazi. Dia meninggal di pengasingan di Inggris pada tahun 1939.",
		"Barack Hussein Obama II adalah seorang politikus dan pengacara Amerika yang menjabat sebagai presiden ke-44 Amerika Serikat dari tahun 2009 hingga 2017. Seorang anggota Partai Demokrat, Obama adalah presiden Amerika-Afrika pertama di Amerika Serikat. Dia sebelumnya menjabat sebagai senator AS dari Illinois dari 2005 hingga 2008 dan senator negara bagian Illinois dari 1997 hingga 2004.",
		"Mohandas Karamchand Gandhi adalah seorang pengacara India, nasionalis anti-kolonial, dan ahli etika politik, yang menggunakan perlawanan tanpa kekerasan untuk memimpin kampanye sukses kemerdekaan India dari kekuasaan Inggris, dan pada gilirannya mengilhami gerakan untuk hak-hak sipil dan kebebasan di seluruh dunia. Mahātmā kehormatan, pertama kali diterapkan padanya pada tahun 1914 di Afrika Selatan, sekarang digunakan di seluruh dunia.",
        "Limapuluh Kota darurat bencana banjir-longsor tujuh hari: Pemerintah Kabupaten Limapuluh Kota, Sumatera Barat. Jalan lintas Riau-Sumbar terputus akibat banjir dan badan jalan tertimbun longsor di Kabupaten Limapulu Kota Sumbar"
	], 
	"kin": [
		"Sigmund Freud yari inzobere mu by'imitsi yo muri Otirishiya akaba ari na we washinze isesengura rya psychoanalyse, uburyo bwo kuvura indwara zo mu mutwe binyuze mu biganiro hagati y’umurwayi na psychoanalyst. Freud yabyawe n'ababyeyi b'Abayahudi b'Abagalatiya mu mujyi wa Freiberg wa Moraviya, mu Bwami bwa Otirishiya. Yujuje ibyangombwa byo kuba umuganga mu 1881 muri kaminuza ya Vienne. Freud yabaga kandi akora i Vienne, ahashinga ubuvuzi bwe mu 1886. Mu 1938, Freud yavuye muri Otirishiya kugira ngo ahunge ibitotezo by'Abanazi. Yapfiriye mu buhungiro mu Bwongereza mu 1939.",
		"Barack Hussein Obama II ni umunyapolitiki w’umunyamerika akaba n’avoka wabaye perezida wa 44 wa Leta zunze ubumwe z’Amerika kuva mu 2009 kugeza 2017. Umunyamuryango w’ishyaka riharanira demokarasi, Obama yari perezida wa mbere w’umunyamerika n’Amerika muri Amerika. Yabanje kuba senateri w’Amerika kuva Illinois kuva 2005 kugeza 2008 na senateri wa leta ya Illinois kuva 1997 kugeza 2004. ",
		"Mohandas Karamchand Gandhi ni umunyamategeko w’Ubuhinde, umunyapolitiki urwanya ubukoloni n’umunyapolitiki w’imyitwarire ya politiki, wakoresheje imyigaragambyo idahwitse kugira ngo ayobore ubukangurambaga bw’Ubuhinde mu guharanira ubwigenge ku butegetsi bw’Abongereza, kandi na bwo bwashishikarije isi yose guharanira uburenganzira n’ubwisanzure. Icyubahiro mahātmā, cyakoreshejwe bwa mbere muri 1914 muri Afrika yepfo, ubu gikoreshwa kwisi yose.",
		"Impunzi z’Abarundi mu Rwanda ziratahuka zibisikana n’izihunga   Yasuwe : 8772 Yavuzweho: 0 0   Ushinzwe itumanaho muri Minisiteri ishinzwe impunzi no gukumira ibiza, Frdric Ntawukuriryayo, yatangarije The New Times ko bivugwa ko impunzi zAbarundi zatangiye gutahuka, ziganjemo abari basanzwe baba hanze yinkambi batari bariyandikishije nkimpunzi.  Ibi bibaye nyuma yiminsi micye, Perezida Pierre Nkurunziza atangajwe ko ariwe watsinze amatora yUmukuru wIgihugu.  Ntawukuriryayo yavuze ko hari bacye mu nkambi zagateganyo basabye ko basubira iwabo, ashimangira ko ari uburenganzira bwimpunzi gusubira mu gihugu cyabo.  Hagati aho, nibura Abarundi bagera kuri 60 nibo bakiriwe ku butaka bwu Rwanda kuwa Kabiri wiki cyumweru tariki 28 Nyakanga 2015 mu nkambi yagateganyo ya Bugesera, 40 bakirwa i Mahama naho 8 bakirwa i Nyanza, mu gihe abandi bagera kuri 428 bahisemo kutajya mu nkambi ahubwo bakaguma mu Mujyi, biyandikishije mu Mujyi wa Kigali nkuko bitangazwa na Midimar.",
		"Zimwe mu mpunzi zAbarundi mu nkambi ya Mahama i Kirehe   Erika Fitzpatrick, ukorana nitsinda rishinzwe itangazamakuru mu Ishami ryUmuryango wAbibumbye rishinzwe impunzi i Kigali, UNHCR, yavuze ko bakiriye amakuru ko hari impunzi ziri gutaha , avuga ko arimo gukorana nIkigo gishinzwe abinjira nabasohoka kugira ngo bamenye umubare wimpunzi zatashye.  Umubare wimpunzi zAbarundi zanditswe mu Rwanda mu bice byo mu Mujyi wageraga ku 20,624 ku mugoroba wo kuwa Kabiri. Minisiteri ishinzwe impunzi yabaruraga 18,391 mu Mujyi wa Kigali ndetse na 2,233 i Huye.  Fitzpatrick yemeje ko bakiri kwakira impunzi nshya buri munsi. Mu gihe kuwa Kabiri impunzi nshya zakiriwe zari 108 , yavuze ko umunsi wari wabanje zari 153.  Yakomeje avuga ko umubare wimpunzi mu nkambi ya Mahama warengaga ibihumbi 30 mu cyumweru gishize, hakaba hari gahunda yo kongera serivisi zitangwa muri iyo nkambi kugira ngo hacumbikirwe nabandi bagera ku bihumbi 16 bakiri mu nkambi zagateganyo.  Ubwo batangiraga guhunga ku bwinshi muri Mata uyu mwaka, Abarundi bahungiraga mu Rwanda bavugaga ko bahunga kubera gutinya ko bazicwa nurubyiruko rwo mu ishyaka riri ku butegetsi ruzwi nkImbonerakure.  Inkuru bifitanye isano: Abarundi bahungiye mu Rwanda hamaze gutahuka ngerere."
	], 
	"cmn": [
		"西格蒙德·弗洛伊德（Sigmund Freud）是奧地利的神經病學家，也是精神分析的創始人。精神分析是一種通過患者與精神分析人員之間的對話來治療精神病理的臨床方法。 弗洛伊德出生於奧地利帝國摩拉維亞小鎮弗賴貝格的加利西亞猶太父母。 他於1881年在維也納大學獲得醫學博士學位。 弗洛伊德在維也納生活和工作，1886年在維也納開始了臨床工作。1938年，弗洛伊德離開奧地利，逃避了納粹的迫害。 他於1939年在英國流亡。",
		"巴拉克·侯赛因·奥巴马二世（Barack Hussein Obama II）是一位美国政治家和律师，2009年至2017年担任美国第44任总统。奥巴马是民主党的一员，是美国第一位非裔美国总统。 他曾于2005年至2008年担任伊利诺伊州的美国参议员，并于1997年至2004年担任伊利诺伊州参议员。",
		"Mohandas Karamchand Gandhi是印度律師，反殖民民族主義者和政治倫理學家，他運用非暴力抵抗力量領導了印度獨立於英國統治之外的成功運動，進而激發了全世界爭取公民權利和自由的運動。 尊敬的Mahātmā於1914年在南非首次應用於他，如今已在全世界使用。",
		"聽到有關四川地震的消息，我感到震驚，近一萬人喪生。儘管我在那裡沒有親戚，但我是顏，黃的後裔，是中國的同胞。在這個危機時刻，我不禁伸出援手，盡一切可能安慰我的同胞和良心。在餐桌上，我們全家，包括我13歲的女兒和幾乎4歲的兒子，都同意向受災群眾捐款。我女兒決定捐出從父母那裡做家務所得的部分錢。使國家擺脫困境是我們華僑的責任，也是我們華僑的優良傳統。",
		"1911年革命爆發那年，華僑捐獻了物資，甚至直接參加了革命，流血犧牲，為現代中國革命事業做出了巨大貢獻。當日本人入侵我們時，陳嘉庚大喊，東南亞的中國人幾乎傾注了自己的錢，捐款超過2000萬元，加上華人向在中國的親戚匯款，總金額達數億美元。 （見譚家記的《南橋回憶錄》），是當時國民政府最重要的外彙來源。即使在改革開放後的1980年代初期，中國政府的吸引外資政策也得以實現。實際上並沒有吸引太多西方投資，在那個時期外國投資的主要來源仍然是海外華人投資。"
	],
	"orm": [
        "Lixa Shaggar Magaalaan Cituu Fi Ammayyaa Diddaa Isaanii Akka Itti Fufanitti Jiru. https://t.co/WoLlw0UEP1 #OromoRevolution Qeerroon \"Oromia International Tewukando\" kan biyya Misiraa keessa jiran ajjeechaa obboloota... https://t.co/2xBRprQZvS"
	], 
	"pl" : [
		"Sigmund Freud był austriackim neurologiem i twórcą psychoanalizy, klinicznej metody leczenia psychopatologii poprzez dialog między pacjentem a psychoanalitykiem. Freud urodził się z galicyjskich żydowskich rodziców w morawskim mieście Freiberg w Cesarstwie Austriackim. Otrzymał tytuł doktora medycyny w 1881 roku na Uniwersytecie Wiedeńskim. Freud mieszkał i pracował w Wiedniu, gdzie w 1886 roku założył swoją praktykę kliniczną. W 1938 roku Freud opuścił Austrię, aby uniknąć nazistowskich prześladowań. Zmarł na wygnaniu w Wielkiej Brytanii w 1939 roku.",
        "Barack Hussein Obama II to amerykański polityk i prawnik, który był 44. prezydentem Stanów Zjednoczonych od 2009 do 2017 roku. Członek Partii Demokratycznej, Obama był pierwszym afroamerykańskim prezydentem Stanów Zjednoczonych. Wcześniej był senatorem USA z Illinois w latach 2005-2008 i senatorem stanu Illinois w latach 1997-2004.",
		"Mohandas Karamchand Gandhi był indyjskim prawnikiem, nacjonalistą antykolonialnym i etykiem politycznym, który wykorzystał pokojowy opór, aby poprowadzić udaną kampanię na rzecz niepodległości Indii od rządów brytyjskich, co z kolei zainspirowało ruchy na rzecz praw obywatelskich i wolności na całym świecie. Honorific Mahatma, po raz pierwszy zastosowany do niego w 1914 roku w Afryce Południowej, jest obecnie używany na całym świecie."
	], 
	"rus": [
		"Зигмунд Фрейд был австрийским неврологом и основателем психоанализа, клинического метода лечения психопатологии посредством диалога между пациентом и психоаналитиком. Фрейд родился в семье галицких евреев в моравском городе Фрайберг в Австрийской империи. Он получил степень доктора медицины в 1881 году в Венском университете. Фрейд жил и работал в Вене, открыв там свою клиническую практику в 1886 году. В 1938 году Фрейд покинул Австрию, спасаясь от преследований нацистов. Он умер в изгнании в Соединенном Королевстве в 1939 году.",
		"Барак Хусейн Обама II - американский политик и поверенный, который занимал пост 44-го президента США с 2009 по 2017 год. Член Демократической партии, Обама был первым афроамериканским президентом Соединенных Штатов. Ранее он был сенатором США от Иллинойса с 2005 по 2008 год и сенатором штата Иллинойс с 1997 по 2004 год. ",
		"Мохандас Карамчанд Ганди был индийским юристом, антиколониальным националистом и политиком, который использовал ненасильственное сопротивление, чтобы возглавить успешную кампанию за независимость Индии от британского правления, и, в свою очередь, движения, вдохновляющие гражданские права и свободу во всем мире. Почтительное слово Махатма, впервые примененное к нему в 1914 году в Южной Африке, теперь используется во всем мире.",
		"В результате землетрясения в Китае погибло более 380 человек. Трагедия произошла накануне, 3 августа 2014 года, около полудня по минскому времени. Эпицентр землетрясения магнитудой 6,5 находился на глубине 12 километров, в 23 километрах от города Чжаотун провинции Юньнань. Тремор ощущался в соседних провинциях Гуйчжоу и Сычуань. Как сообщает Русская служба Би-би-си со ссылкой на местные власти, в результате было разрушено много домов, нарушена связь и электроснабжение.",
		"По данным информационного агентства «Синьхуа», в округе Лудян, где проживают 439 000 человек, обрушилось около 12 000 зданий. Уезд Цяоцзя, где было зарегистрировано наибольшее количество пострадавших, сильно пострадал. Многие местные жители остаются на открытом воздухе, опасаясь повторных потрясений и обрушений. Больницы переполнены ранеными. Две тысячи палаток, три тысячи раскладушек, одеял и шинелей были отправлены в район землетрясения в помощь пострадавшим. По последним данным, жертвами землетрясения стал 381 человек, еще 801 получил ранения, трое считаются пропавшими без вести."
	], 
	"sin": [
		"සිග්මන්ඩ් ෆ්‍රොයිඩ් ඔස්ට්‍රියානු ස්නායු විශේෂ ist යෙකු වූ අතර මනෝ විශ්ලේෂණයේ නිර්මාතෘවරයෙකි. රෝගියෙකු සහ මනෝ විශ්ලේෂකයෙකු අතර සංවාදයක් මගින් මනෝ ව්‍යාධි විද්‍යාවට ප්‍රතිකාර කිරීමේ සායනික ක්‍රමයකි. ෆ්‍රොයිඩ් උපත ලැබුවේ ඔස්ට්‍රියානු අධිරාජ්‍යයේ මොරවියන් නගරයේ ෆ්‍රීබර්ග්හි ගැලීසියානු යුදෙව් දෙමව්පියන්ට ය. ඔහු 1881 දී වියානා විශ්ව විද්‍යාලයේ වෛද්‍යවරයෙකු ලෙස සුදුසුකම් ලැබීය. 1886 දී ෆ්‍රොයිඩ් සිය සායනික පුහුණුව ආරම්භ කළ වියානාහි ජීවත් වූ අතර සේවය කළේය. ඔහු 1939 දී එක්සත් රාජධානියේ පිටුවහල්ව සිටියදී මිය ගියේය.",
        "දෙවන බරක් හුසේන් ඔබාමා 2009 සිට 2017 දක්වා එක්සත් ජනපදයේ 44 වන ජනාධිපතිවරයා විය, ඇමරිකානු දේශපාලන නීති lawyer යෙකු සහ නීති සම්පාදකයෙකි. ඩිමොක්‍රටික් පක්ෂයේ සාමාජිකයෙකු වන ඔබාමා එක්සත් ජනපදයේ පළමු අප්‍රිකානු-ඇමරිකානු ජනාධිපතිවරයා විය. ඔහු මීට පෙර 2005 සිට 2008 දක්වා එක්සත් ජනපද සෙනෙට් සභිකයෙකු ලෙසත් 1997 සිට 2004 දක්වා ඉලිනොයිස් ප්‍රාන්ත සෙනෙට් සභිකයෙකු ලෙසත් සේවය කළේය.",
		"මොහාන්දාස් කරම්චන්ද් ගාන්ධි යනු ඉන්දියානු නීති lawyer යෙක්, යටත් විජිත විරෝධී ජාතිකවාදියෙක් සහ දේශපාලන ආචාරධර්මවාදියෙකි. ඔහු බ්‍රිතාන්‍ය පාලනයෙන් ඉන්දියාවේ ස්වාධීනත්වය සඳහා වූ සාර්ථක උද් campaign ෝෂනයට නායකත්වය දීම සඳහා අවිහිංසාවාදී ප්‍රතිරෝධයක් දැක්වීය. 1914 දී දකුණු අප්‍රිකාවේදී ඔහුට ප්‍රථම වරට යොදන ලද ගෞරවනීය මහත්මා දැන් ලොව පුරා භාවිතා වේ."
	], 
	"som": [
		"Sigmund Freud wuxuu ahaa aqoonyahan Austrian neurologist iyo aasaasaha cilmi nafsiga, hab caafimaad oo loogu daweeyo cilmu-nafsiga iyadoo loo marayo wadahadalka bukaan socodka iyo cilmi nafsiga. Freud wuxuu ku dhashay Waalidiinta Yuhuudda Galician ee ku nool magaalada Moravian ee Freiberg, ee Boqortooyada Austria. Wuxuu uqalmay dhakhtar daawo sanadkii 1881 ee jaamacada Vienna. Freud wuxuu ku noolaa kana shaqeeyey Vienna, asagoo halkaas ka bilaabay howlihiisa caafimaad sanadkii 1886. Wuxuu masaafuris ugu dhintay Boqortooyada Ingiriiska 1939.",
		"Barack Hussein Obama II waa siyaasi Mareykan ah iyo garyaqaan u soo shaqeeyay madaxweynihii 44aad ee Mareykanka intii u dhaxeysay 2009 ilaa 2017. Xubin ka tirsan Xisbiga Dimuqraadiga, Obama wuxuu ahaa madaxweynihii ugu horreeyay ee Afrikaan Mareykan ah ee Mareykanka. Wuxuu horey u soo noqday senetarka Mareykanka laga soo doorto Illinois sanadihii 2005 ilaa 2008 iyo Senator laga soo doorto gobolka Illinois 1997 ilaa 2004.",
		"Mohandas Karamchand Gandhi wuxuu ahaa qareen Hindi ah, wadaniyiin ka soo horjeedka gumeystaha, iyo anshax siyaasadeed, oo u adeegsaday iska caabin aan xasilooneyn si uu u hogaamiyo ololihii guuleystay ee xorriyadda Hindiya ee ka qaadatay xukunkii Ingiriiska, iyo sidoo kale dhiirrigelinta dhaqdhaqaaqyada xuquuqda madaniga iyo xorriyadda adduunka. Sharafta Mahātmā, oo markii ugu horreysay lagu dabaqay 1914-kii Koonfur Afrika, ayaa hadda laga isticmaalaa adduunka oo dhan."
	], 
	"spa": [
        "Sigmund Freud fue un neurólogo austriaco y fundador del psicoanálisis, un método clínico para tratar la psicopatología a través del diálogo entre un paciente y un psicoanalista. Freud nació de padres judíos gallegos en la ciudad morava de Freiberg, en el Imperio austríaco. Se graduó como doctor en medicina en 1881 en la Universidad de Viena. Freud vivió y trabajó en Viena, donde estableció su práctica clínica en 1886. En 1938, Freud dejó Austria para escapar de la persecución nazi. Murió exiliado en el Reino Unido en 1939.",
		"Barack Hussein Obama II es un político y abogado estadounidense que se desempeñó como el 44º presidente de los Estados Unidos de 2009 a 2017. Miembro del Partido Demócrata, Obama fue el primer presidente afroamericano de los Estados Unidos. Anteriormente se desempeñó como senador de Estados Unidos por Illinois de 2005 a 2008 y como senador del estado de Illinois de 1997 a 2004. ",
		"Mohandas Karamchand Gandhi fue un abogado indio, nacionalista anticolonial y especialista en ética política, que empleó la resistencia no violenta para liderar la exitosa campaña por la independencia de la India del dominio británico y, a su vez, inspiró movimientos por los derechos civiles y la libertad en todo el mundo. El Mahātmā honorífico, que se le aplicó por primera vez en 1914 en Sudáfrica, ahora se usa en todo el mundo."
	], 
	"swa": [
        // "MAFURIKO DAR YALIVYOACHA VILIO >> Angalia Majanga hayo   Mvua kubwa iliyonyesha ambayo haijawahi kunyesha ndani ya Jiji la Dar es Salaam kwa kipindi cha miaka kumi, imeacha vilio na umaskini mkubwa kwa wakazi wake, imebainika.  Mwili ukiwa kwenye gari la polisi.  Timu ya Uwazi kipindi chote cha mvua ilikuwa mitaani na kubaini kuwa hadi juzi watu zaidi ya kumi walipoteza maisha kutokana na mvua hiyo na baadhi ya miili iliyopatikana haijatambulika na ndugu zao na waliotambuliwa wameshazikwa na kuacha vilio.  Aidha, waandishi wetu walishuhudia jeshi la polisi likitoa maiti moja katika Mto Msimbazi uliyoko Magomeni jijini Dar es Salaam, hata hivyo haikuweza kutambuliwa hivyo kuaminika kuwa ilisombwa na maji kutoka mbali.Kamanda wa Polisi wa Kanda Maalum ya Kipolisi ya Dar es Salaam, Kamishna Suleiman Kova aliliambia Uwazi kuwa maiti kadhaa zilikuwa zimehifadhiwa Hospitali ya Muhimbili na ndugu walikuwa hawafahamiki na kuwataka waliopotelewa na ndugu zao kwenda kuzitambua.  Waandishi wetu katika mitaa mbalimbali jijini Dar es Salaam, walibaini athari kubwa za maji yaliyoingia katika majumba ya watu hasa maeneo ya Jangwani, Kigogo, Kinondoni na wakazi wake kuachwa wakiwa hawana makazi ya kuishi, hivyo familia kusambaratika.  Maeneo ya Jangwani ilionekana kama kisiwa kwani nyumba nyingi zilizingirwa na maji na kuhamwa na wakazi wake, huku wengine wakilalamika kuwa wamepoteza mali zao ambazo zimesombwa na maji na mbwa wa polisi walitumika kusaka maiti.  Mwili ulioopolewa kwenye maji.  Neema Laulence mkazi wa Magomeni Makuti, alisema kuwa kutokana na mvua hiyo, watu wamekosa makazi baada ya nyumba zao kujaa maji, hata hivyo alisema serikali haipaswi kulaumiwa kwa sababu viongozi wa mkoa wamejitahidi sana kuelimisha wanaoishi mabondeni ili wahame lakini wamekuwa wabishi.  Abdallah Hamis alisema: “Mvua hii ni kubwa na haijawahi kutokea na walioathirika wajilaumu wenyewe maana serikali ilishatoa viwanja Mabwepande lakini baadhi yao waliviuza na kurudi mabondeni. ”Naye Mwanaisha Hamisi maarufu kwa jina la mama Kabang, alisema serikali itumie nguvu kuwahamisha watu wanaokaa mabondeni kwa sababu wanapofariki taifa linapata aibu.  “Ni aibu serikali kushindwa kuwadhibiti watu wanaong’ang’ania kuishi mabondeni. Iwahamishe kwa nguvu,” alisema Mwanaisha.Mkurugenzi Mkuu wa Mamlaka ya Hali ya Hewa Tanzania, Dk. Agnes Kijazi akizungumzia hali ya mvua nchini alisema: “Maeneo ambayo hali ya mvua inaweza kuyaathiri zaidi na kukumbwa na vimbunga ni pamoja na kanda ya kati, nyanda za juu kusini magharibi, magharibi mwa nchi na maeneo ya ukanda wa Pwani hivyo wananchi wachukue tahadhari.”  Nyumba ikizingilwa na maji.  Naye Mkuu wa Mkoa wa Dar es Salaam, Said Meck Sadik alisema anasikitishwa na kitendo cha baadhi ya watu kuilaumu serikali wakati miaka mingi imekuwa ikiwahimiza wanaoishi mabondeni kuhama. “Ukweli ni kwamba safari hii hatuwapi hifadhi kwa sababu wamekuwa jeuri na pia baadhi yao wameishitaki serikali mahakamani, sasa tufanye nini?” alihoji."
		"Sigmund Freud alikuwa daktari wa neva wa Austria na mwanzilishi wa psychoanalysis, njia ya kliniki ya kutibu saikolojia kupitia mazungumzo kati ya mgonjwa na mtaalam wa kisaikolojia. Freud alizaliwa na wazazi wa Kiyahudi wa Kigalisia katika mji wa Moravian wa Freiberg, katika Dola ya Austria. Alihitimu kama daktari wa dawa mnamo 1881 katika Chuo Kikuu cha Vienna. Freud aliishi na kufanya kazi huko Vienna, baada ya kuanzisha mazoezi yake ya kliniki huko mnamo 1886. Mnamo 1938, Freud aliondoka Austria kutoroka mateso ya Nazi. Alikufa akiwa uhamishoni nchini Uingereza mnamo 1939.",
		"Barack Hussein Obama II ni mwanasiasa na wakili wa Amerika ambaye aliwahi kuwa rais wa 44 wa Merika kutoka 2009 hadi 2017. Mwanachama wa Democratic Party, Obama alikuwa rais wa kwanza wa Afrika na Amerika wa Merika. Hapo awali aliwahi kuwa seneta wa Merika kutoka Illinois kutoka 2005 hadi 2008 na seneta wa jimbo la Illinois kutoka 1997 hadi 2004. ",
		"Mohandas Karamchand Gandhi alikuwa mwanasheria wa Kihindi, mzalendo anayepinga ukoloni, na mtaalam wa maadili, ambaye alitumia upinzani usio na vurugu kuongoza kampeni iliyofanikiwa ya uhuru wa India kutoka kwa utawala wa Briteni, na kwa upande wake aliongoza harakati za haki za raia na uhuru ulimwenguni kote. Mahātmā ya heshima, iliyotumika kwanza kwake mnamo 1914 huko Afrika Kusini, sasa inatumika ulimwenguni kote."
	], 
	"tam": [
		//  " பாதிக்கப்பட்ட இடங்களை மீண்டும் கட்டியெழுப்ப 25 ஆயிரம் கோடி தேவை!   வெள்ளப் பெருக்கு மற்றும் மண்சரிவு காரணமாக இதுவரை ஏற்பட்ட சேதங்கள் குறித்து முழுமையான கணிப்பீடு மேற்கொள்ளப்படாத நிலையில், புனரமைப்பு பணிகளுக்காக 15 ஆயிரம் முதல் 25 ஆயிரம் கோடி ரூபா செலவாகும் என்று நிதி அமைச்சர் ரவி கருணாநாயக்க தெரிவித்துள்ளார்.  அத்துடன், சட்டவிரோத குடியேற்றம், மற்றம் முறையற்ற விதத்தில் கட்டப்பட்ட கட்டடங்கள் காரணமாகவே, கொழும்பில் வெள்ள அனர்த்தம் ஏற்பட்டதாகவும் அவர் கூறினார்.  களனி ஆற்றிற்கு இருபுறமும் இவ்வாறான சட்டவிரோத குடியேற்றங்கள் நிர்மாணிக்கப்பட்டுள்ளமையினால், நிவாரண பணிகளை கூட மேற்கொள்ள முடியாத நிலை தோன்றியுள்ளதாகவும், வெள்ளப் பெருக்கு காரணமாக கொழும்பு மாவட்டத்தில் மாத்திரம் 33 ஆயிரம் குடும்பங்களைச் சேர்ந்த ஒரு லட்சத்து ஐயாயிரம் பேர் தமது வீடுகளிலிருந்து வெளியேற்றப்பட்டுள்ளதாகவும் அவர் கூறினார்.  இந்த வெள்ளத்தினால், கொழும்பு மாவட்டத்தின் கொலன்னாவை பிரதேச செயலாளர் பிரிவிலேயே அதிகளவானோர் பாதிக்கப்பட்டுள்ளதாகவும், இதன்படி, கொலன்னாவை பிரதேச செயலாளர் பிரிவில் மாத்திரம் 20 ஆயிரம் குடும்பங்களைச் சேர்ந்த 80 ஆயிரம் பேர் பாதிக்கப்பட்டுள்ளதாகவும் சுட்டிக்காட்டினார்.",
		"சிக்மண்ட் பிராய்ட் ஒரு ஆஸ்திரிய நரம்பியல் நிபுணர் மற்றும் மனோ பகுப்பாய்வின் நிறுவனர் ஆவார், இது ஒரு நோயாளிக்கும் மனோதத்துவ ஆய்வாளருக்கும் இடையிலான உரையாடலின் மூலம் மனநோயாளிகளுக்கு சிகிச்சையளிப்பதற்கான மருத்துவ முறையாகும். பிராய்ட் ஆஸ்திரிய பேரரசில் உள்ள மொராவியன் நகரமான ஃப்ரீபெர்க்கில் காலிசிய யூத பெற்றோருக்கு பிறந்தார். 1881 இல் வியன்னா பல்கலைக்கழகத்தில் மருத்துவ மருத்துவராக தகுதி பெற்றார். பிராய்ட் 1886 ஆம் ஆண்டில் வியன்னாவில் வசித்து வந்தார், அங்கு தனது மருத்துவ பயிற்சியை அமைத்தார். 1938 ஆம் ஆண்டில், பிராய்ட் நாஜி துன்புறுத்தலில் இருந்து தப்பிக்க ஆஸ்திரியாவை விட்டு வெளியேறினார். அவர் 1939 இல் ஐக்கிய இராச்சியத்தில் நாடுகடத்தப்பட்டார்.",
		"பராக் ஹுசைன் ஒபாமா II ஒரு அமெரிக்க அரசியல்வாதி மற்றும் வழக்கறிஞர் ஆவார், அவர் 2009 முதல் 2017 வரை அமெரிக்காவின் 44 வது ஜனாதிபதியாக பணியாற்றினார். ஜனநாயகக் கட்சியின் உறுப்பினரான ஒபாமா அமெரிக்காவின் முதல் ஆப்பிரிக்க-அமெரிக்க ஜனாதிபதியாக இருந்தார். அவர் முன்னர் 2005 முதல் 2008 வரை இல்லினாய்ஸிலிருந்து யு.எஸ். செனட்டராகவும் 1997 முதல் 2004 வரை இல்லினாய்ஸ் மாநில செனட்டராகவும் பணியாற்றினார். ",
		"மோகன்தாஸ் கரம்சந்த் காந்தி ஒரு இந்திய வழக்கறிஞர், காலனித்துவ எதிர்ப்பு தேசியவாதி மற்றும் அரசியல் நெறிமுறையாளர் ஆவார், அவர் பிரிட்டிஷ் ஆட்சியில் இருந்து இந்தியாவின் சுதந்திரத்திற்கான வெற்றிகரமான பிரச்சாரத்தை வழிநடத்த வன்முறையற்ற எதிர்ப்பைப் பயன்படுத்தினார், மேலும் இது உலகெங்கிலும் உள்ள சிவில் உரிமைகள் மற்றும் சுதந்திரத்திற்கான இயக்கங்களை ஊக்கப்படுத்தியது. மரியாதைக்குரிய மஹத்மா, 1914 இல் தென்னாப்பிரிக்காவில் முதன்முதலில் அவருக்குப் பயன்படுத்தப்பட்டது, இப்போது உலகம் முழுவதும் பயன்படுத்தப்படுகிறது."
	], 
	// Filipino
	"tgl": [
		"Si Sigmund Freud ay isang neurologist ng Austrian at nagtatag ng psychoanalysis, isang klinikal na pamamaraan para sa pagpapagamot sa psychopathology sa pamamagitan ng dayalogo sa pagitan ng isang pasyente at isang psychoanalyst. Si Freud ay ipinanganak ng mga magulang na Galician na Hudyo sa bayan ng Moravian na Freiberg, sa Imperyo ng Austrian. Naging kwalipikado siya bilang isang doktor ng gamot noong 1881 sa University of Vienna. Si Freud ay nanirahan at nagtrabaho sa Vienna, na naayos ang kanyang klinikal na pagsasanay doon noong 1886. Noong 1938, iniwan ni Freud ang Austria upang makatakas sa pag-uusig ng Nazi. Namatay siya sa pagkatapon sa United Kingdom noong 1939.",
		"Si Barack Hussein Obama II ay isang Amerikanong politiko at abugado na nagsilbi bilang ika-44 na pangulo ng Estados Unidos mula 2009 hanggang 2017. Isang miyembro ng Demokratikong Partido, si Obama ang unang pangulo ng Aprika-Amerikano ng Estados Unidos. Siya ay dating nagsilbi bilang isang senador ng Estados Unidos mula sa Illinois mula 2005 hanggang 2008 at isang senador ng estado ng Illinois mula 1997 hanggang 2004.",
		"Si Mohandas Karamchand Gandhi ay isang abugado ng India, nasyonalista na kontra-kolonyal, at etikalista sa politika, na gumamit ng hindi marahas na paglaban upang pangunahan ang matagumpay na kampanya para sa kalayaan ng India mula sa pamamahala ng British, at sa gayon ay inspirasyon ng mga paggalaw para sa mga karapatang sibil at kalayaan sa buong mundo. Ang marangal na Mahātmā, na unang inilapat sa kanya noong 1914 sa South Africa, ay ginagamit na sa buong mundo.",
        "Bagyong Nina, lumakas pa; public storm warning signal itataas sa Bicol at Samar area mamaya o bukas   Lalo pang lumakas ang bagyong Nina at inaasahang tatama sa kalupaan sa mismong araw ng bagyo.  Sa 11AM weather bulletin ng PAGASA, huling namataan ang severe tropical storm Nina sa layong 790 kilometer East ng Guiuan, Eastern Samar.  Taglay na ngayon ng bagyo ang lakas ng hanging aabot sa 105 kilometers bawat oras at pagbugsong aabot sa 130 kilometers bawat oras. Kumikilos ang bagyo sa bilis na 25 kilometer bawat oras sa direksyong West Northwest. ",
		"Ayon sa PAGASA, sa December 25 ng hapon o gabi tatama sa lupa ang bagyo, at sa December 26 ito magsisimulang maramdaman sa Metro Manila.  Mamayang hapon o gabi ay maaring magtaas na ng public storm warning signal number sa Bicol region at sa Samar area.  Habang sa Metro Manila, may posibilidad din na magtaas ng storm warning signals number 2 hanggang 3 depende sa lakas ng bagyo matapos itong makapaglandfall.  Sa Miyerkules ng hapon o gabi inaasahang lalabas ng Philippine Area of Responsibility ang bagyo."
	], 
	"tha": [
		//  "กรมทรัพย์ฯเตือน 21 จว. ระวังแผ่นดินถล่ม-น้ำป่าจากพายุ \"ช้างสาร\" 2 ต.ค. 49 - พายุไต้ฝุ่นช้างสาร อ่อนกำลังลงกลายเป็นพายุดีเปรสชัน ซึ่งมีศูนย์กลางอยู่ที่ จ.ร้อยเอ็ด ส่งผลให้หลายจังหวัดในพื้นที่ภาคอีสานมีฝนตกหนัก กรมทรัพยากรธรณีจึงออกมาเตือนชาวบ้าน 21 จังหวัด ให้ระวังดินถล่มและน้ำป่าไหลหลาก นายวรวุฒิ ตันติวนิช ผู้เชี่ยวชาญเฉพาะด้าน ที่ปรึกษาทางการบริหารจัดการทรัพยากรณี กรมทรัพยากรธรณี กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม กล่าวว่า หลังจากพายุไต้ฝุ่นช้างสารเคลื่อนตัวเข้าในแถบภาคอีสาน กรมทรัพยากรธรณีได้ออกประกาศเตือนให้ชาวบ้านในพื้นที่ภูเขาสูงและหมู่บ้านในหุบเขา บริเวณภาคตะวันออกเฉียงเหนือ ได้แก่ จ.อุบลราชธานี ศรีสะเกษ เลย นครราชสีมา และชัยภูมิ ภาคตะวันออก ได้แก่ จ.ตราด จันทบุรี สระแก้ว และปราจีนบุรี ภาคเหนือ บริเวณ จ.เพชรบูรณ์ พิษณุโลก อุตรดิตถ์ แพร่ สุโขทัย กำแพงเพชร ตาก และลำปาง บริเวณภาคใต้ ได้แก่ จ.ตรัง พัทลุง สตูล สงขลา และจังหวัดใกล้เคียง ตรวจเฝ้าระวังภัยดินถล่มและน้ำป่าไหลหลาก และขอให้ประชาชนเพิ่มความระมัดระวังในการเดินทาง ซึ่งอาจเกิดดินไหล หรือหินร่วงมาปิดทับเส้นทาง พร้อมทั้งให้อาสาสมัครเฝ้าระวังแจ้งเตือนภัยดินถล่มของกรมทรัพยากรธรณี เฝ้าระวังและวัดปริมาณน้ำฝนอย่างต่อเนื่อง และแจ้งหน่วยงานที่เกี่ยวข้องตามที่มีการอบรมไว้แล้ว นอกจากนี้ ยังส่งเจ้าหน้าที่เข้าพื้นที่เพื่อประสานงานกับผู้เกี่ยวข้องในการเฝ้าระวังอย่างต่อเนื่อง และหากจำเป็นต้องอพยพก็ต้องให้ประชาชนอพยพออกจากพื้นที่ สำหรับกรุงเทพฯ นายอภิรักษ์ โกษะโยธิน ผู้ว่าราชการกรุงเทพมหานคร (กทม.)วันที่ 2 ต.ค. ลงพื้นที่ชุมชนวัดลำต้อยติ่ง เขตหนองจอก ที่ประสบภัยน้ำท่วมบ้านเรือน นาข้าว และบ่อปลาเสียหาย พร้อมสั่งการสำรวจความเสียหายเพื่อจัดงบช่วยเหลือด่วน ล่าสุดได้วางกระสอบทรายกั้นแนวถนน-คลอง และสูบน้ำออก ทั้งนี้ ยังมั่นใจว่าจะรับมือพายุช้างสารได้ เพราะหากปริมาณฝนตกไม่เกิน 100 มิลลิเมตรต่อชั่วโมง จะสามารถระบายน้ำได้ทัน ซึ่งคืนที่ผ่านมาวัดปริมาณฝนที่ตกลงมาอย่างหนักที่เขตลาดกระบังได้เพียง 79 มิลลิเมตรต่อชั่วโมง ขณะที่ปริมาณน้ำท้ายเขื่อนที่ปล่อยลงสู่กรุงเทพฯ มีปริมาณ 2,990 ลบ.ม.ต่อวินาที ระดับน้ำทะเลหนุนยังไม่สูง ซึ่งแผนป้องกันน้ำท่วมจะยังคงเร่งพร่องน้ำจากคลองหลัก เช่น คลองประเวศบุรีรมย์ คลองหลวงแพ่ง ให้รองรับปริมาณน้ำฝนที่อาจตกหนักให้ได้มากที่สุด นอกจากนี้ นายอภิรักษ์ กล่าวอีกว่าว่า ยังมีเรื่องที่น่าเป็นห่วง คือ พื้นที่เกษตรและบ่อปลาด้านฝั่งตะวันออก ที่มีมากถึง 1.74 แสนไร่ ได้รับผลกระทบ แยกเป็น หนองจอก เสียหาย 2.9 หมื่นไร่ คลองสามวา 4,000 ไร่ ลาดกระบัง มีนบุรี และประเวศเขตละ 1,300 ไร่ ซึ่งมอบหมายให้ไปจัดทำรายละเอียดเพื่อจะนำหารือรัฐบาล เพื่อขอรับการสนับสนุนด้านงบประมาณต่อไป",
		"ซิกมันด์ฟรอยด์เป็นนักประสาทวิทยาชาวออสเตรียและเป็นผู้ก่อตั้งจิตวิเคราะห์ซึ่งเป็นวิธีการทางคลินิกในการรักษาจิตพยาธิวิทยาผ่านการสนทนาระหว่างผู้ป่วยและนักจิตวิเคราะห์ Freud เกิดกับพ่อแม่ชาวยิวชาวกาลิเซียในเมือง Freiberg ของ Moravian ในจักรวรรดิออสเตรีย เขามีคุณสมบัติเป็นแพทย์ด้านการแพทย์ในปีพ. ศ. 2424 ที่มหาวิทยาลัยเวียนนา ฟรอยด์อาศัยและทำงานในเวียนนาโดยเริ่มการปฏิบัติทางคลินิกที่นั่นในปี พ.ศ. 2429 ในปี พ.ศ. 2481 ฟรอยด์ออกจากออสเตรียเพื่อหลบหนีการข่มเหงของนาซี เขาเสียชีวิตเนื่องจากถูกเนรเทศในสหราชอาณาจักรในปี พ.ศ. 2482",
		"บารัคฮุสเซนโอบามาที่ 2 เป็นนักการเมืองและทนายความชาวอเมริกันซึ่งดำรงตำแหน่งประธานาธิบดีคนที่ 44 ของสหรัฐอเมริกาตั้งแต่ปี 2552 ถึง 2560 โอบามาเป็นสมาชิกพรรคเดโมแครตเป็นประธานาธิบดีแอฟริกัน - อเมริกันคนแรกของสหรัฐอเมริกา เขาเคยดำรงตำแหน่งวุฒิสมาชิกสหรัฐจากรัฐอิลลินอยส์ตั้งแต่ปี 2548 ถึง 2551 และเป็นวุฒิสมาชิกรัฐอิลลินอยส์ตั้งแต่ปี 2540 ถึง 2547   ",
		"Mohandas Karamchand Gandhi เป็นนักกฎหมายชาวอินเดียนักชาตินิยมต่อต้านอาณานิคมและนักจริยธรรมทางการเมืองซึ่งใช้การต่อต้านอย่างไม่รุนแรงเพื่อนำไปสู่การรณรงค์เพื่อเอกราชของอินเดียจากการปกครองของอังกฤษที่ประสบความสำเร็จและในทางกลับกันก็เป็นแรงบันดาลใจให้เกิดการเคลื่อนไหวเพื่อสิทธิและเสรีภาพทั่วโลก Mahātmāผู้มีเกียรติซึ่งนำมาใช้กับเขาครั้งแรกในปีพ. ศ. 2457 ในแอฟริกาใต้ปัจจุบันถูกใช้ไปทั่วโลก"
	], 
	"tir": [
        "ካብ ፖሊሲ ተኲስካ ቅተል ድሒነን ኣብ ኢድ ወተሃደራት ህግደፍ...........   ካብ ፖሊሲ ተኲስካ ቅተል ድሒነን ኣብ ኢድ ወተሃደራት ህግደፍ ዝወድቃ ኤርትራውያን ደቂ-ኣንስትዮ ክንዮ ማእሰርቲ ዝተፈላለየ ግፍዕታት ከም ዝበጽሐን ተፈሊጡ። ኣብ ኤርትራ ነጊሱ ብዘሎ ኣረሜናዊ ምሕደራ ዝጠንቁ፡ ካብ’ቲ ስርዓት ሃዲመን ናብ ስደት ዘምረሓ ኤርትራውያን ደቂ-ኣንስትዮ፡ ኣብ ዶባት ካብ ፖሊሲ ተኲስካ ቅተል ንስክላ ብህይወት ተሪፈን ኣብ ኢድ ወተሃደራት ህግደፍ ኣብ ዝወድቃሉ ግዜ፡ ክንዮቲ ቀረብ ማይን መግብን ዘይብሉ ሕሱም ቤት ማእሰርቲ፡ ንወተሃደራት መግቢ ከብስላ ከም ዝግደዳ ኣስማተን ክግለጽ ዘይደላያ ግዳያት ሓቢረን።"
	], 
	"tur": [
		"Sigmund Freud, Avusturyalı bir nörolog ve bir hasta ile bir psikanalist arasındaki diyalog yoluyla psikopatolojiyi tedavi etmeye yönelik klinik bir yöntem olan psikanalizin kurucusuydu. Freud, Avusturya İmparatorluğu'nun Moravya kasabası Freiberg'de Galiçyalı Yahudi bir ailede dünyaya geldi. 1881'de Viyana Üniversitesi'nde tıp doktoru oldu. Freud, 1886'da klinik muayenehanesini burada kurduktan sonra Viyana'da yaşadı ve çalıştı. 1938'de Freud, Nazi zulmünden kaçmak için Avusturya'dan ayrıldı. 1939'da Birleşik Krallık'ta sürgünde öldü.",
		"Barack Hussein Obama II, 2009'dan 2017'ye kadar Amerika Birleşik Devletleri'nin 44. başkanı olarak görev yapan Amerikalı bir politikacı ve avukattır. Demokrat Parti'nin bir üyesi olan Obama, Amerika Birleşik Devletleri'nin ilk Afrikalı-Amerikalı başkanıydı. Daha önce 2005'ten 2008'e kadar Illinois'den ABD senatörü ve 1997'den 2004'e kadar Illinois eyalet senatörü olarak görev yaptı. ",
		"Mohandas Karamchand Gandhi, Hindistan'ın İngiliz yönetiminden bağımsızlığı için başarılı bir kampanyaya liderlik etmek için şiddetsiz bir direniş sergileyen ve karşılığında dünya çapında sivil haklar ve özgürlük hareketlerine ilham veren Hintli bir avukat, sömürge karşıtı milliyetçi ve politik etikçiydi. Ona ilk kez 1914'te Güney Afrika'da uygulanan şerefli Mahātmā şimdi tüm dünyada kullanılmaktadır."
	], 
	"uig": [
		"سىگموند فرۇد ئاۋىستىرىيەلىك نېرۋا كېسەللىكلىرى دوختۇرى ۋە پىسخىكا ئانالىزىنىڭ قۇرغۇچىسى ، بىمار بىلەن پىسخىكا ئانالىزچىسى ئوتتۇرىسىدىكى دىئالوگ ئارقىلىق روھىي كېسەللىكلەرنى داۋالاشنىڭ كلىنىكىلىق ئۇسۇلى. فرۇد ئاۋسترىيە ئىمپېرىيىسىنىڭ موراۋىيە فرېيبېرگ بازىرىدا گالىسىيەلىك يەھۇدىي ئاتا-ئانىسىدا تۇغۇلغان. ئۇ 1881-يىلى ۋيېنا ئۇنىۋېرسىتېتىدا مېدىتسىنا دوختۇرى بولغان. فرۇد ۋيېنادا ياشىغان ۋە ئىشلىگەن ، 1886-يىلى ئۇ يەردە ئۆزىنىڭ كلىنىكىلىق تەجرىبىسىنى قۇرغان. 1938-يىلى ، فرۇد ناتسىستلارنىڭ زىيانكەشلىكىدىن قۇتۇلۇش ئۈچۈن ئاۋىستىرىيەدىن ئايرىلغان. ئۇ 1939-يىلى ئەنگىلىيەدە سۈرگۈندە ۋاپات بولغان.",
        "باراك ھۈسەيىن ئوباما ئىككىنچى ئامېرىكىلىق سىياسەتچى ۋە ئادۋوكات ، ئۇ 2009-يىلدىن 2017-يىلغىچە ئامېرىكىنىڭ 44-نۆۋەتلىك پرېزىدېنتى بولغان. دېموكراتلار پارتىيىسىنىڭ ئەزاسى ، ئوباما ئامېرىكىنىڭ تۇنجى ئافرىقا-ئامېرىكا پرېزىدېنتى. ئۇ ئىلگىرى 2005-يىلدىن 2008-يىلغىچە ئىللىنوئىس شىتاتىنىڭ ئامېرىكا كېڭەش پالاتا ئەزاسى ، 1997-يىلدىن 2004-يىلغىچە ئىللىنوئىس شىتاتىنىڭ كېڭەش پالاتا ئەزاسى بولغان. ",
		"موخانداس قارامچاند گەندى ھىندىستاننىڭ ئادۋوكاتى ، مۇستەملىكىچىلىككە قارشى مىللەتچى ۋە سىياسىي ئەخلاقشۇناس بولۇپ ، ئۇ زوراۋان قارشىلىق ئىشلىتىپ ، ھىندىستاننىڭ ئەنگىلىيە ھۆكۈمرانلىقىدىن مۇستەقىل بولۇش ھەرىكىتىنىڭ مۇۋەپپەقىيەتلىك ئېلىپ بېرىلىشىغا رەھبەرلىك قىلغان ، شۇنداقلا دۇنيانىڭ ھەرقايسى جايلىرىدىكى پۇقرالار ھوقۇقى ۋە ئەركىنلىكى ھەرىكەتلىرىنى ئىلھاملاندۇرغان. شەرەپلىك مەخمۇت 1914-يىلى تۇنجى قېتىم جەنۇبىي ئافرىقىدا قوللىنىلغان ، ھازىر دۇنيانىڭ ھەرقايسى جايلىرىدا ئىشلىتىلدى."
	], 
	"uzb": [
		"Zigmund Freyd avstriyalik nevrolog va psixoanalizning asoschisi, bemor va psixoanalist o'rtasidagi dialog orqali psixopatologiyani davolashning klinik usuli edi. Freyd Galiusiyadagi yahudiy ota-onasi tomonidan Avstriya imperiyasining Moraviya shtatidagi Frayberg shahrida tug'ilgan. U 1881 yilda Vena Universitetida tibbiyot doktori sifatida malakasini oldi. Freyd Venada yashagan va ishlagan, u erda o'zining klinik amaliyotini 1886 yilda boshlagan. 1938 yilda Freyd fashistlarning ta'qibidan qutulish uchun Avstriyani tark etgan. U 1939 yilda Buyuk Britaniyada surgunda vafot etdi.",
        "Barak Xuseyn Obama II - Amerikalik siyosatchi va advokat, 2009 yildan 2017 yilgacha AQShning 44-prezidenti bo'lib ishlagan. Demokratik partiya a'zosi Obama AQShning birinchi afroamerikalik prezidenti bo'lgan. U ilgari 2005-2008 yillarda Illinoysdan AQSh senatori va 1997-2004 yillarda Illinoys shtati senatori bo'lib ishlagan. ",
		"Mohandas Karamchand Gandi hind huquqshunosi, mustamlakachilikka qarshi millatchi va siyosiy axloqshunos bo'lib, u zo'ravonliksiz qarshilik ko'rsatib, Hindistonning Britaniya hukmronligidan mustaqilligi uchun muvaffaqiyatli kampaniyani olib bordi va o'z navbatida butun dunyoda fuqarolik huquqlari va erkinligi uchun harakatlarni ilhomlantirdi. 1914 yilda Janubiy Afrikada unga nisbatan qo'llanilgan sharafli Mahatma hozirgi kunda butun dunyoda qo'llanilmoqda."
	], 
	"vie": [
        // "Đức ghi nhận ca tử vong đầu tiên do sởi  Tất cả trẻ em đều cần được tiêm phòng sởi Theo quan chức của Bệnh viện Charite, nạn nhân là một chàng trai 18 tuổi, chưa được tiêm phòng sởi trước đó. Kết quả khám nghiệm tử thi cho thấy chàng trai này bị nhiễm thêm một loại bệnh khác nhưng đó không phải là nguyên nhân chính dẫn đến cái chết. Dịch sởi bùng phát tại Berlin từ tháng 10/2014 sau đó lây lan nhanh chóng cho 570 người. Giới chức y tế Berlin tin rằng vụ dịch này bắt nguồn từ một đứa trẻ tị nạn đến từ Bosnia (Đông Nam châu Âu). Sự lây lan nhanh chóng của dịch bệnh có thể là do tỷ lệ tiêm chủng ở những người trên 45 tuổi rất thấp và người trẻ hơn không được tiêm phòng đủ hai mũi vaccine (theo khuyến cáo mới). Theo các quan chức y tế, hơn 90% người dân cần được tiêm vaccine để ngăn chặn dịch sởi. Tuy nhiên, tỷ lệ tiêm chủng ở châu Âu giảm đi rõ rệt sau một tuyên bố sai lầm rằng việc tiêm vaccine sởi, quai bị và rubella có thể gây bệnh tự kỷ. Ngày 23/2 vừa qua, Bộ trưởng Bộ Y tế Đức Hermann Groehe đã kêu gọi tất cả trẻ em đều cần được tiêm phòng và nếu cần thiết, việc tiêm phòng sẽ trở thành bắt buộc. Cùng ngày, một trường trung học tại Berlin đã phải đóng của để phòng lây lan dịch bệnh. Kim Chi H+ (Theo Foxnews)"
		"Sigmund Freud là một nhà thần kinh học người Áo và là người sáng lập ra phân tâm học, một phương pháp lâm sàng để điều trị bệnh lý tâm thần thông qua đối thoại giữa bệnh nhân và nhà phân tâm học. Freud được sinh ra trong gia đình có cha mẹ là người Do Thái gốc Galicia tại thị trấn Freiberg của người Moravian, thuộc Đế quốc Áo. Ông đủ điều kiện trở thành bác sĩ y khoa năm 1881 tại Đại học Vienna. Freud sống và làm việc tại Vienna, sau khi bắt đầu thực hành lâm sàng tại đây vào năm 1886. Năm 1938, Freud rời Áo để thoát khỏi sự đàn áp của Đức Quốc xã. Ông qua đời khi sống lưu vong tại Vương quốc Anh vào năm 1939.",
		"Barack Hussein Obama II là một chính trị gia và luật sư người Mỹ, từng là tổng thống thứ 44 của Hoa Kỳ từ năm 2009 đến năm 2017. Là thành viên của Đảng Dân chủ, Obama là tổng thống người Mỹ gốc Phi đầu tiên của Hoa Kỳ. Trước đây, ông từng là thượng nghị sĩ Hoa Kỳ từ Illinois từ 2005 đến 2008 và là thượng nghị sĩ bang Illinois từ 1997 đến 2004. ",
		"Mohandas Karamchand Gandhi là một luật sư người Ấn Độ, người theo chủ nghĩa dân tộc chống thực dân và nhà đạo đức chính trị, người đã vận dụng sự phản kháng bất bạo động để lãnh đạo chiến dịch thành công giành độc lập của Ấn Độ khỏi sự cai trị của Anh, và lần lượt truyền cảm hứng cho các phong trào đòi dân quyền và tự do trên toàn thế giới. Kính ngữ Mahātmā, lần đầu tiên được áp dụng cho ông vào năm 1914 ở Nam Phi, hiện được sử dụng trên khắp thế giới."
	], 
	"wol": [
        "Xamnga bouma gueinone wax nila damay politiser, dagnounane damay politiser, té bougouma politiser, warna deim Espagne mais boumako waxé gnouné, ta voyage bimakoy wadj, boba, yaguena, parce que bima, bignouma fal euh bignouma nommer, dama deif un plan de tournée pour contact ak sénégalais de l'extérieur yii. Lo deif gnouné dangay politiser, lo deifgnouné dafa am lo cii wout té walou niit kou gueine adina keine douko fowé, keine doucii ko politiser. Boy sett sax, communiquer sax danaka meune nané diarouko. Yalla xamna, leip lo xamné dina am gno xamni dinanou seddei biss, sénégalais yii néé Espagne, damay woo di renseigner wou biss bou neek ana lana xeew parce que xeuyna mane nano néé consulat nimoulay renseigner dou nonou wala dara wayé consulat bii taxaw nanou pour que lounou mane reik nou deif ko et."
	], 
	"yor": [
		"Sigmund Freud jẹ onimọran onimọran ara ilu Austrian ati oludasile psychoanalysis, ọna itọju kan fun atọju imọ-ọkan nipa ijiroro laarin alaisan kan ati onimọran nipa ọkan. Freud ni a bi si awọn obi Juu Juu Galician ni ilu Moravian ti Freiberg, ni Ilu-ọba Austrian. O jẹ oṣiṣẹ bi dokita ti oogun ni 1881 ni Yunifasiti ti Vienna. Freud gbe ati ṣiṣẹ ni Vienna, ti ṣeto ilana iṣoogun rẹ sibẹ ni ọdun 1886. Ni ọdun 1938, Freud fi Ilu Austria silẹ lati sa fun inunibini Nazi. O ku ni igbekun ni United Kingdom ni ọdun 1939.",
        "Barack Hussein Obama II jẹ oloselu ara ilu Amẹrika ati aṣofin kan ti o ṣiṣẹ bi aarẹ 44th ti Amẹrika lati ọdun 2009 si ọdun 2017. Ọmọ ẹgbẹ kan ti Democratic Party, Obama ni Alakoso Afirika-Amẹrika akọkọ ti Amẹrika. O ti ṣiṣẹ tẹlẹ bi igbimọ AMẸRIKA lati Illinois lati 2005 si 2008 ati Alagba ipinlẹ Illinois lati 1997 si 2004. ",
		"Mohandas Karamchand Gandhi jẹ agbẹjọro ara ilu India kan, alatako orilẹ-ede, ati alamọ-iṣe oloṣelu, ti o lo atako aiṣedeede lati ṣe amojuto ipolongo aṣeyọri fun ominira India kuro labẹ ofin Ijọba Gẹẹsi, ati ni ọna yiyi awọn agbeka iwuri fun awọn ẹtọ ilu ati ominira jakejado agbaye. Mahātmā ọlá, ti o lo fun ni akọkọ ni ọdun 1914 ni South Africa, ti lo ni gbogbo agbaye ni bayi."
	], 
	"zul": [
		"USigmund Freud wayengudokotela wezinzwa wase-Austria futhi engumsunguli we-psychoanalysis, indlela yokwelashwa yokwelapha i-psychopathology ngokuxoxisana phakathi kwesiguli kanye ne-psychoanalyst. UFreud wazalelwa kubazali abangamaGalician abangamaJuda edolobheni laseMoravia iFreiberg, eMbusweni wase-Austrian. Wathola iziqu zobudokotela kwezokwelapha e-1881 e-University of Vienna. UFreud wayehlala futhi esebenza eVienna, esungule indlela yakhe yokwelashwa lapho ngo-1886. Ngo-1938, uFreud washiya i-Austria ebalekela ukushushiswa amaNazi. Ushonele ekudingisweni e-United Kingdom ngo-1939.",
		"UBarack Hussein Obama II ungusopolitiki nommeli waseMelika owake waba ngumongameli wama-44 wase-United States kusuka ngo-2009 kuya ku-2017. Phambilini uke wasebenza njenge senator yase-U.S. Esuka e-Illinois kusukela ngonyaka ka 2005 kuya ku 2008 kanye nesenator yase Illinois kusukela ngo 1997 kuya ku 2004. ",
		"UMohandas Karamchand Gandhi wayengummeli waseNdiya, owayephikisana nobukoloniyali, futhi enesimo sezombusazwe, owayesebenzisa ukumelana okungenabudlova ukuhola umkhankaso ophumelelayo wokuzimela kweNdiya embusweni waseBrithani, futhi kwagqugquzela ukunyakaza kwamalungelo omphakathi kanye nenkululeko emhlabeni jikelele. IMahātmā ehloniphekile, eyaqala ukusetshenziswa kuye ngo-1914 eNingizimu Afrika, manje isiyasetshenziswa emhlabeni wonke."
	]
}


function fillExampleSelectField(lang) {
	// alert("examples...");
	$("#example").empty();
	selectField = document.getElementById("example");
	textField = document.getElementById("text");
	idx = 0;
	for (var example in xel_examples[lang]) {
		var opt = document.createElement("option");
		opt.value=idx;
		opt.innerHTML = xel_examples[lang][idx].substring(0,50)+"..."; 
		selectField.appendChild(opt);
		idx += 1;
	}	
	selectField.value = "0";
	textField.value = xel_examples[lang][0];
	$("#result").html( "" );
}

function fillLanguageSelectField() {
	selectField = document.getElementById("lang");
	textField = document.getElementById("text");
	for (var key in xel_langs) {
		if (xel_langs.hasOwnProperty(key)) {           
			var opt = document.createElement("option");
			opt.value=key;
			opt.innerHTML = xel_langs[key]; // ["lang"]; 
			selectField.appendChild(opt);
		}
	}	
	selectField.value = "eng";
	// textField.value = xel_langs["eng"]["text"];
	fillExampleSelectField(selectField.value)
}

function newExampleSelect() {
	langSelectField = document.getElementById("lang");
	lang = langSelectField.value;
	exampleSelectField = document.getElementById("example");
	example = exampleSelectField.value;
	textField = document.getElementById("text");
	// textField.value = xel_langs[languageSelected]["text"]; 
	textField.value = xel_examples[lang][example]; 
	$("#result").html( "" );
}

function newLanguageSelect() {
	langSelectField = document.getElementById("lang");
	lang = langSelectField.value;
	fillExampleSelectField(lang);
	//textField = document.getElementById("text");
	//textField.value = xel_langs[languageSelected]["text"]; 
	//$("#result").html( "" );
}

async function postData(url = '', data = {}, pfunction) {
  // console.log(url); 
  // console.log(JSON.stringify(data)); 
  fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
	// mode: 'no-cors',
    body: JSON.stringify(data) 
  }).then(resp => resp.json())
	.then(json => {
		pfunction(json);
	});
}

/*
function runNER() {
	fLang = document.getElementById("lang").value;
	fText = document.getElementById("text").value;
	data = {
		"lang" : fLang,
		"model": "bert",
		"text" : fText
	};
	url="/ner";
	postData(url, data, processNER);
}

function runEDL(json) {
	fLang = json["lang"];
	fText = json["text"];
	data = {
		"lang" : fLang,
		"model": "bert",
		"text" : fText
	};
	url="/edl";
	postData(url, data, processEDL);
}

function processNER(json) {
	console.log("NER resulting json: " + JSON.stringify(json)); 
	runEDL(json);
}

function processEDL(json) {
	console.log("EDL resulting json: " + JSON.stringify(json)); 	
}
*/

function outputXEL(json) {
	// console.log("XEL resulting json: " + JSON.stringify(json)); 
	// $("#result").html(JSON.stringify(json));
	$("#result").html( json["html"] );
}

function runXEL() {
	fLang = document.getElementById("lang").value;
	fText = document.getElementById("text").value;
	data = {
		"lang" : fLang,
		"model": "bert",
		"text" : fText
	};
	url="http://dickens.seas.upenn.edu:4033/xel";
	//console.log("XEL input: " + JSON.stringify(data)); 
	postData(url, data, outputXEL);
}

function formSubmit() {
	$("#result").html( "" );
	runXEL();
	return false;
}
