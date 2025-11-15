import { AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';

const Story = () => {
  const realities = [
    'لا يوجد نظام واضح لتعليم التفكير السريري',
    'التعلّم يتم عبر الملاحظة فقط',
    'أغلب القرارات تُتخذ بحفظ سابق وليس فهم',
    'أول نبطشية تكون تجربة صادمة للجميع',
  ];

  return (
    <section
      className="py-24 bg-gradient-medical relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-right mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="text-sm font-semibold text-destructive">
                لماذا هذا مهم؟
              </span>
              <Lightbulb className="w-4 h-4 text-destructive" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">
                لأن الامتياز ليس تدريباً منظماً…
              </span>
              <br />
              <span className="text-destructive">بل مسؤولية فجائية</span>
            </h2>
          </div>

          {/* Reality Check */}
          <div className="glass-strong p-8 md:p-12 rounded-3xl mb-8 border-2 border-destructive/20">
            <div className="flex items-start gap-4 justify-end mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  الواقع يقول:
                </h3>
              </div>
              <div className="p-3 bg-destructive/10 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {realities.map((reality, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 bg-destructive/5 rounded-xl border border-destructive/10"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-destructive">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">{reality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Statement */}
          <div className="glass p-8 md:p-12 rounded-3xl glow-medical border-2 border-primary/20">
            <div className="flex items-start gap-4 justify-end mb-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Med Simulate يحوّل هذه الفوضى إلى طريق واضح ومنهجي…
                </h3>
                <p className="text-xl text-foreground font-semibold">
                  يجعلك طبيباً يَفهم قبل أن يحفظ، ويفكّر قبل أن يقرر.
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0 glow-medical">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-primary/20">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  منهجي
                </div>
                <p className="text-sm text-muted-foreground">
                  تدريب منظم خطوة بخطوة
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-secondary mb-2">
                  واضح
                </div>
                <p className="text-sm text-muted-foreground">
                  فهم عميق للمفاهيم
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-accent mb-2">واثق</div>
                <p className="text-sm text-muted-foreground">
                  ثقة حقيقية في القرارات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
