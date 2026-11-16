// Demo data — clearly marked as sample data for prospective partner institutions

export const investigationStats = [
  { label: "الحالات الجديدة اليوم",  labelEn: "New Cases Today",     value: 24,  change: 8,   type: "up" },
  { label: "قيد الزيارة الميدانية",  labelEn: "Active in Field",     value: 18,  change: -2,  type: "down" },
  { label: "تقارير منجزة ومعتمدة",   labelEn: "Delivered Reports",   value: 31,  change: 15,  type: "up" },
  { label: "بانتظار مراجعة الجودة",  labelEn: "Pending QC Review",   value: 7,   change: 0,   type: "neutral" },
]

export const recentCases = [
  { id: "EST-1048", clientName: "أيمن رفعت الشناوي",    institution: "البنك التجاري (شريك تجريبي)", type: "استعلام ائتماني وقرض",  status: "قيد التنفيذ", priority: "عالية",  date: "اليوم" },
  { id: "EST-1049", clientName: "سارة عبد المنعم الباز", institution: "شركة تمويل استهلاكي",        type: "تحقق محل إقامة وعمل",   status: "قيد التنفيذ", priority: "متوسطة", date: "اليوم" },
  { id: "EST-1050", clientName: "مؤسسة النور للصناعات",  institution: "شركة تأجير تمويلي",           type: "معاينة أصول ومعدات",    status: "منجزة",       priority: "عالية",  date: "أمس" },
  { id: "EST-1051", clientName: "حسين فوزي الجندي",     institution: "مؤسسة تمويل متناهي الصغر",   type: "تحقق مشروع تجاري",      status: "جديدة",       priority: "عادية",  date: "اليوم" },
]

export const researcherActivity = [
  { name: "كريم عبد الرحيم", cases: 14, casesCompleted: 14, location: "القاهرة الجديدة", avgTime: "2.1 ساعة", rating: 4.9, status: "نشط" },
  { name: "أحمد حسام رضوان", cases: 11, casesCompleted: 11, location: "الدقي، الجيزة", avgTime: "2.4 ساعة", rating: 4.8, status: "نشط" },
  { name: "محمود سليمان",    cases: 16, casesCompleted: 16, location: "سموحة، الإسكندرية", avgTime: "1.9 ساعة", rating: 4.95, status: "في الميدان" },
  { name: "ياسر كمال",       cases: 9,  casesCompleted: 9,  location: "أسيوط والمنيا", avgTime: "2.6 ساعة", rating: 4.85, status: "نشط" },
]
