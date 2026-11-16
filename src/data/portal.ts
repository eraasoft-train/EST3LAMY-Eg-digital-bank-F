export interface InvestigationCase {
  id: string
  institution: string
  institutionEn: string
  type: string
  typeEn: string
  subjectName: string
  subjectNameEn: string
  nationalId: string
  governorate: string
  governorateEn: string
  address: string
  workplace: string
  status: "new" | "assigned" | "field_visit" | "under_review" | "approved" | "rejected"
  priority: "عاجل" | "مرتفع" | "عادي"
  priorityEn: "Urgent" | "High" | "Normal"
  researcherId?: string
  researcherName?: string
  createdDate: string
  visitDate?: string
  gpsVerified: boolean
  gpsCoords?: { lat: number; lng: number }
  evidenceCount: number
  notes?: string
  qcChecklist: {
    idVerified: boolean
    addressMatched: boolean
    workVerified: boolean
    photosAttached: boolean
    neighborInquiry: boolean
  }
}

export interface FieldResearcher {
  id: string
  name: string
  nameEn: string
  governorate: string
  governorateEn: string
  status: "available" | "in_field" | "offline"
  activeCases: number
  completedMonth: number
  rating: number
  lastActive: string
  phoneMasked: string
}

export const INITIAL_RESEARCHERS: FieldResearcher[] = [
  {
    id: "RES-01",
    name: "كريم عبد الرحيم مصطفى",
    nameEn: "Kareem Abdelrahim",
    governorate: "القاهرة الكبرى",
    governorateEn: "Greater Cairo",
    status: "in_field",
    activeCases: 3,
    completedMonth: 48,
    rating: 4.9,
    lastActive: "منذ 12 دقيقة",
    phoneMasked: "+20 101 ••• 4812",
  },
  {
    id: "RES-02",
    name: "أحمد حسام الدين رضوان",
    nameEn: "Ahmed Hossam Radwan",
    governorate: "الجيزة",
    governorateEn: "Giza",
    status: "available",
    activeCases: 1,
    completedMonth: 42,
    rating: 4.8,
    lastActive: "منذ 5 دقائق",
    phoneMasked: "+20 106 ••• 9921",
  },
  {
    id: "RES-03",
    name: "محمود سليمان النجار",
    nameEn: "Mahmoud Soliman",
    governorate: "الإسكندرية",
    governorateEn: "Alexandria",
    status: "in_field",
    activeCases: 4,
    completedMonth: 53,
    rating: 4.95,
    lastActive: "منذ 2 دقيقة",
    phoneMasked: "+20 112 ••• 3310",
  },
  {
    id: "RES-04",
    name: "طارق زياد القاضي",
    nameEn: "Tarek Ziad",
    governorate: "الدقهلية والغربية",
    governorateEn: "Delta (Dakahlia & Gharbia)",
    status: "available",
    activeCases: 0,
    completedMonth: 37,
    rating: 4.75,
    lastActive: "منذ 25 دقيقة",
    phoneMasked: "+20 100 ••• 7144",
  },
  {
    id: "RES-05",
    name: "ياسر كمال المنشاوي",
    nameEn: "Yasser El-Menshawy",
    governorate: "أسيوط والمنيا",
    governorateEn: "Upper Egypt (Assiut & Minya)",
    status: "in_field",
    activeCases: 2,
    completedMonth: 31,
    rating: 4.85,
    lastActive: "منذ 18 دقيقة",
    phoneMasked: "+20 115 ••• 6609",
  },
]

export const INITIAL_CASES: InvestigationCase[] = [
  {
    id: "EST-2026-1048",
    institution: "بنك تجاري رائد (شريك تجريبي)",
    institutionEn: "Commercial Bank (Demo Partner)",
    type: "استعلام ائتماني وقرض شخصي",
    typeEn: "Personal Loan Credit Investigation",
    subjectName: "أيمن رفعت الشناوي",
    subjectNameEn: "Ayman Refaat El-Shennawy",
    nationalId: "28709140101954",
    governorate: "القاهرة الكبرى",
    governorateEn: "Cairo",
    address: "عمارة 14، شارع النزهة، مصر الجديدة",
    workplace: "شركة الأهرام للصناعات الهندسية",
    status: "field_visit",
    priority: "مرتفع",
    priorityEn: "High",
    researcherId: "RES-01",
    researcherName: "كريم عبد الرحيم مصطفى",
    createdDate: "2026-11-16 08:30",
    visitDate: "2026-11-16 11:15",
    gpsVerified: true,
    gpsCoords: { lat: 30.1012, lng: 31.3341 },
    evidenceCount: 6,
    notes: "تمت المعاينة الميدانية لسكن العميل ومطابقة فاتورة الغاز ومقابلة حارس العقار للتحقق.",
    qcChecklist: {
      idVerified: true,
      addressMatched: true,
      workVerified: true,
      photosAttached: true,
      neighborInquiry: true,
    },
  },
  {
    id: "EST-2026-1049",
    institution: "شركة تمويل استهلاكي كبرى (تجريبي)",
    institutionEn: "Consumer Finance Corp (Demo)",
    type: "تحقق فوري من محل الإقامة والعمل",
    typeEn: "Instant Residency & Workplace Verification",
    subjectName: "سارة عبد المنعم الباز",
    subjectNameEn: "Sara Abdelmonem El-Baz",
    nationalId: "29403221204891",
    governorate: "الجيزة",
    governorateEn: "Giza",
    address: "شارع مصدق، الدقي، الجيزة",
    workplace: "مستشفى العاصمة التخصصي",
    status: "under_review",
    priority: "عاجل",
    priorityEn: "Urgent",
    researcherId: "RES-02",
    researcherName: "أحمد حسام الدين رضوان",
    createdDate: "2026-11-15 14:10",
    visitDate: "2026-11-16 10:00",
    gpsVerified: true,
    gpsCoords: { lat: 30.0421, lng: 31.2089 },
    evidenceCount: 8,
    notes: "تم استيفاء كامل الأدلة الفوتوغرافية وتأكيد العمل الميداني بالقسم الإداري بالمستشفى.",
    qcChecklist: {
      idVerified: true,
      addressMatched: true,
      workVerified: true,
      photosAttached: true,
      neighborInquiry: true,
    },
  },
  {
    id: "EST-2026-1050",
    institution: "شركة تأجير تمويلي (تجريبي)",
    institutionEn: "Leasing Company (Demo)",
    type: "معاينة مقر المنشأة وخطوط الإنتاج",
    typeEn: "Commercial Facility & Equipment Inspection",
    subjectName: "مؤسسة النور للصناعات البلاستيكية",
    subjectNameEn: "Al-Noor Plastic Industries",
    nationalId: "100489221 (سجل تجاري)",
    governorate: "الإسكندرية",
    governorateEn: "Alexandria",
    address: "المنطقة الصناعية الثالثة، برج العرب",
    workplace: "مقر المصنع الرئيسي",
    status: "approved",
    priority: "مرتفع",
    priorityEn: "High",
    researcherId: "RES-03",
    researcherName: "محمود سليمان النجار",
    createdDate: "2026-11-14 11:00",
    visitDate: "2026-11-15 13:30",
    gpsVerified: true,
    gpsCoords: { lat: 30.9123, lng: 29.6201 },
    evidenceCount: 14,
    notes: "تم فحص الآلات وتصوير السجل التجاري والبطاقة الضريبية والتأكد من النشاط الفعلي.",
    qcChecklist: {
      idVerified: true,
      addressMatched: true,
      workVerified: true,
      photosAttached: true,
      neighborInquiry: true,
    },
  },
  {
    id: "EST-2026-1051",
    institution: "مؤسسة تمويل متناهي الصغر (تجريبي)",
    institutionEn: "Microfinance Institution (Demo)",
    type: "تحقيق ميداني لمشروع تجاري صغير",
    typeEn: "Micro-business Field Investigation",
    subjectName: "حسين فوزي الجندي",
    subjectNameEn: "Hussein Fawzy El-Gendy",
    nationalId: "28311051600812",
    governorate: "الدقهلية والغربية",
    governorateEn: "Delta",
    address: "شارع الجمهورية، المنصورة",
    workplace: "محل تجارة الأدوات الكهربائية",
    status: "new",
    priority: "عادي",
    priorityEn: "Normal",
    createdDate: "2026-11-16 09:45",
    gpsVerified: false,
    evidenceCount: 0,
    qcChecklist: {
      idVerified: false,
      addressMatched: false,
      workVerified: false,
      photosAttached: false,
      neighborInquiry: false,
    },
  },
  {
    id: "EST-2026-1052",
    institution: "شركة تمويل عقاري (تجريبي)",
    institutionEn: "Mortgage Finance (Demo)",
    type: "معاينة عقار سكني وتحقق من شاغليه",
    typeEn: "Property Inspection & Occupant Check",
    subjectName: "ممدوح شريف العادلي",
    subjectNameEn: "Mamdouh Sherif El-Adly",
    nationalId: "27805190103211",
    governorate: "القاهرة الكبرى",
    governorateEn: "Cairo",
    address: "كمبوند الياسمين، التجمع الأول، القاهرة الجديدة",
    workplace: "شركة بترول خاصة",
    status: "assigned",
    priority: "عاجل",
    priorityEn: "Urgent",
    researcherId: "RES-01",
    researcherName: "كريم عبد الرحيم مصطفى",
    createdDate: "2026-11-16 10:20",
    gpsVerified: false,
    evidenceCount: 0,
    qcChecklist: {
      idVerified: false,
      addressMatched: false,
      workVerified: false,
      photosAttached: false,
      neighborInquiry: false,
    },
  },
  {
    id: "EST-2026-1053",
    institution: "بنك إسلامي رائد (تجريبي)",
    institutionEn: "Islamic Bank (Demo)",
    type: "استعلام مرابحة سيارات وتحقق وظيفي",
    typeEn: "Auto Murabaha & Employment Verification",
    subjectName: "نورهان طلعت الدسوقي",
    subjectNameEn: "Nourhan Talaat El-Dessouky",
    nationalId: "29708110104928",
    governorate: "الجيزة",
    governorateEn: "Giza",
    address: "شارع الهرم، بالقرب من محطة العريش",
    workplace: "شركة استشارات تسويقية",
    status: "approved",
    priority: "عادي",
    priorityEn: "Normal",
    researcherId: "RES-02",
    researcherName: "أحمد حسام الدين رضوان",
    createdDate: "2026-11-14 16:00",
    visitDate: "2026-11-15 11:30",
    gpsVerified: true,
    gpsCoords: { lat: 29.9981, lng: 31.1712 },
    evidenceCount: 7,
    notes: "تقرير معتمد ومسلم إلى قطاع الائتمان بالبنك مصحوباً بجميع الوثائق المطلوبة.",
    qcChecklist: {
      idVerified: true,
      addressMatched: true,
      workVerified: true,
      photosAttached: true,
      neighborInquiry: true,
    },
  },
]
