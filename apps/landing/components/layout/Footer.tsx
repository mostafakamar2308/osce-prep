import { Activity, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-b from-background to-muted py-12 border-t border-border/50"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 text-right">
            <div className="flex items-center justify-end gap-3">
              <h3 className="text-xl font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
                Med Simulate
              </h3>
              <div className="p-2 rounded-lg glass">
                <Activity className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              منصّة تحاكي الواقع الطبي لتقوية التفكير السريري
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-right">
            <h4 className="font-semibold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  الخصائص
                </Link>
              </li>
              <li>
                <Link
                  href="/questionnaire"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ابدأ الاختبار
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-right">
            <h4 className="font-semibold text-foreground">تواصل معنا</h4>
            <a
              href="mailto:info@medsimulate.com"
              className="flex items-center gap-2 justify-end text-muted-foreground hover:text-primary transition-colors"
            >
              <span>info@medsimulate.com</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Med Simulate. جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>صُنع بحب لأطباء المستقبل</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
