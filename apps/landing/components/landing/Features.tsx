import {
  MessageSquare,
  Brain,
  TestTube,
  FileText,
  Zap,
  TrendingUp,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'محادثة تفاعلية مع مريض افتراضي',
      description: 'تتحدث مع الحالة بصوتك',
      details: [
        'تُجيب كما تفعل في غرفة الكشف',
        'تستلم معلومات حسب طريقة أسئلتك فقط',
        'تجربة واقعية تحاكي اللقاء الحقيقي مع المريض',
      ],
      gradient: 'from-primary to-accent',
    },
    {
      icon: Brain,
      title: 'مسار تفكير سريري كامل',
      description: 'Clinical Reasoning Engine',
      details: [
        'هل سؤالُك كان صحيحاً؟',
        'هل يوجد سؤال أهم كان عليك أن تسأله؟',
        'كيف يغيّر هذا السؤال قائمة التشخيص التفريقي؟',
      ],
      gradient: 'from-secondary to-primary',
    },
    {
      icon: TestTube,
      title: 'جناح التحقيقات',
      description: 'Investigation Suite',
      details: [
        'طلب التحاليل والفحوصات بشكل تفاعلي',
        'رؤية النتائج كما لو كانت حقيقية',
        "تعلّم 'لماذا' تطلب كل فحص وفهم البيانات",
      ],
      gradient: 'from-accent to-secondary',
    },
    {
      icon: FileText,
      title: 'دليل إدارة الحالة',
      description: 'Interactive Management Guide',
      details: [
        'خطوات العلاج المناسبة للحالة',
        'تنبيهات في حال اختيار علاج غير مناسب',
        'خيارات تعتمد على Guidelines مع تفسير سريري',
      ],
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Zap,
      title: 'تغذية راجعة فورية ودقيقة',
      description: 'Immediate Feedback',
      details: [
        'تحليل لطريقة تفكيرك ونقاط القوة والضعف',
        'أين أخطأت ولماذا',
        'كيف يمكن أن تؤدي بشكل أفضل في المرة القادمة',
      ],
      gradient: 'from-secondary to-accent',
    },
    {
      icon: TrendingUp,
      title: 'لوحة تقدّم ذكية',
      description: 'Smart Progress Panel',
      details: [
        'عدد الحالات التي أنهيتها ومتوسط الأداء',
        'أكثر الأخطاء شيوعاً لديك',
        'منحنى تطور الثقة السريرية',
      ],
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-right mb-16 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <span className="text-sm font-semibold text-primary">
              الخصائص الأساسية
            </span>
            <Zap className="w-4 h-4 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
              كل ما تحتاجه
            </span>
            <br />
            <span className="text-foreground">لتصبح طبيباً واثقاً</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            ست خصائص قوية تحوّل طريقة تدريبك الطبي
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-strong p-8 rounded-3xl hover:glow-medical transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${feature.gradient} mb-6 glow-medical`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Details */}
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Gradient Line */}
              <div
                className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-l ${feature.gradient} rounded-full mt-6`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
