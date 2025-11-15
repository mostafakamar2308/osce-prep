import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  const benefits = [
    'تقييم مجاني لمستوى جاهزيتك السريرية',
    'تحليل دقيق لنقاط القوة والضعف',
    'إمكانية الانضمام للنسخة التجريبية المغلقة',
    'بداية رحلتك نحو الثقة الطبية',
  ];

  return (
    <section className="py-32 relative overflow-hidden" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="glass-strong p-12 md:p-16 rounded-4xl text-center space-y-8 glow-medical-strong">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-l from-primary to-secondary rounded-full text-white">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">ابدأ رحلتك الآن</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">هل أنت مستعد لتعرف</span>
                <br />
                <span className="bg-linear-to-l from-primary via-accent to-secondary bg-clip-text text-transparent">
                  مدى جاهزيتك قبل دخول المستشفى؟
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                ابدأ اختبار الجاهزية السريري الآن واكتشف إن كنت مؤهلاً للانضمام
                إلى النسخة التجريبية المغلقة
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4 py-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-primary/20 text-right hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/questionnaire">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-xl px-12 py-8 h-auto group"
                >
                  <span>ابدأ اختبار الجاهزية الآن</span>
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
                <span className="text-sm">⏱️</span>
                <p className="text-sm">
                  يستغرق ٥-٧ دقائق فقط • مجاني بالكامل • نتائج فورية
                </p>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  +100 طبيب بدأوا
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full bg-secondary animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <span className="text-sm text-muted-foreground">
                  تقييم ٤.٩/٥
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
                <span className="text-sm text-muted-foreground">
                  نتائج فورية
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Med Simulate
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              الطريق المختصر لتصبح طبيباً واثقاً قبل أن تبدأ عملك الحقيقي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
