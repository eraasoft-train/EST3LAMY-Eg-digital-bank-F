// Demo data — clearly marked as sample data

export const investigationStats = [
  { label: "الحالات الجديدة",    labelEn: "New Cases",        value: 24,  change: 8,   type: "up"      },
  { label: "قيد التنفيذ",       labelEn: "In Progress",      value: 18,  change: -2,  type: "down"    },
  { label: "منجزة اليوم",       labelEn: "Completed Today",  value: 31,  change: 15,  type: "up"      },
  { label: "بانتظار المراجعة",  labelEn: "Pending Review",   value: 7,   change: 0,   type: "neutral" },
]

export const recentCases = [
  { id: "INV-2024-001", clientName: "أحمد محمد علي",    institution: "بنك القاهرة",           type: "تمويل شخصي",         status: "منجزة",       priority: "عالية",  date: "اليوم" },
  { id: "INV-2024-002", clientName: "سارة إبراهيم حسن", institution: "شركة تمويل المستقبل",   type: "تحقق من العنوان",   status: "قيد التنفيذ", priority: "متوسطة", date: "اليوم" },
  { id: "INV-2024-003", clientName: "محمود عبد الرحمن", institution: "شركة الأمل للتأجير",    type: "تقييم ميداني",       status: "جديدة",       priority: "عالية",  date: "أمس"   },
  { id: "INV-2024-004", clientName: "فاطمة خالد نور",   institution: "بنك مصر",              type: "تمويل عقاري",        status: "منجزة",       priority: "عادية",  date: "أمس"   },
]

export const researcherActivity = [
  { name: "كريم سالم",       casesCompleted: 12, avgTime: "2.3 ساعة", rating: 4.8, status: "نشط"         },
  { name: "نورهان مصطفى",    casesCompleted: 9,  avgTime: "2.8 ساعة", rating: 4.6, status: "نشط"         },
  { name: "عمر الشيخ",       casesCompleted: 15, avgTime: "1.9 ساعة", rating: 4.9, status: "في الميدان"  },
]
