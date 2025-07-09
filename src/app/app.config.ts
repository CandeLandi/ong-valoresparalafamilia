import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  LucideAngularModule,
  Heart,
  Menu,
  X,
  MessageSquare,
  Shield,
  BookOpen,
  AlertTriangle,
  HandHeart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Clock,
  Train,
  Bus,
  Users,
  CheckCircle2,
  School,
  DollarSign
} from 'lucide-angular';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({
      Heart,
      Menu,
      X,
      MessageSquare,
      Shield,
      BookOpen,
      AlertTriangle,
      HandHeart,
      Mail,
      Phone,
      MapPin,
      Facebook,
      Instagram,
      Twitter,
      Youtube,
      Clock,
      Train,
      Bus,
      Users,
      CheckCircle2,
      School,
      DollarSign
    }))
  ]
};
