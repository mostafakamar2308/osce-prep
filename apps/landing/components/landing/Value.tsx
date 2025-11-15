import { AlertCircle, BookOpen, Stethoscope, Target } from 'lucide-react';

const Value = () => {
  const challenges = [
    'يفرّقون بين الحالات المتشابهة',
    'يختارون الفحوصات المناسبة',
    'يديرون الحالة بخطوات واضحة',
    'يتصرفون بثقة عند أول Encounter حقيقي',
  ];

  return (
    <section
      className="py-24 bg-linear-medical relative overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-right space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="text-sm font-semibold text-primary">
                القيمة الأساسية
              </span>
              <Target className="w-4 h-4 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">Med Simulate</span>
              <br />
              <span className="bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
                التدريب الذي لم تحصل عليه في الامتياز
              </span>
            </h2>
          </div>

          {/* Problem Statement */}
          <div className="glass-strong p-8 md:p-12 rounded-3xl space-y-6">
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 space-y-4">
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  معظم طلاب الامتياز يحفظون الحالات نظرياً
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  لكنهم لا يتدرّبون على التفكير السريري الحقيقي
                  <br />
                  ولا يعرفون كيف:
                </p>
              </div>
              <div className="p-4 bg-destructive/10 rounded-2xl shrink-0">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
            </div>

            {/* Challenges List */}
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="glass p-8 md:p-12 rounded-3xl space-y-6 glow-medical">
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 space-y-4">
                <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed">
                  Med Simulate يمنحك تجربة محاكاة كاملة لحالات الباطنة كأنك في
                  المستشفى…
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  لكن بأمان، وبوقت تختاره أنت.
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0 glow-medical">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    تدريب آمن
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    تعلّم من أخطائك بدون أي مخاطر على المرضى الحقيقيين
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    مرونة كاملة
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    تدرّب متى وأينما تريد، بالوتيرة التي تناسبك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
